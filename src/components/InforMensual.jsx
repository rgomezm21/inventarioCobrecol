import React, { useState, useEffect } from 'react';
import { Form, Button, Container, Row, Col, Table } from 'react-bootstrap';
import Chart from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';
import axios from 'axios';

export const InforMensual = () => {
  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState('');
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [totalAmountPaid, setTotalAmountPaid] = useState(0);

  useEffect(() => {
    handleSearch();
  }, []);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`https://crudnode-production.up.railway.app/api/search/${search}`);
      const searchData = response.data;

      setData(searchData);
      const monthlySummary = calculateMonthlySummary(searchData, selectedMonth);
      setTotalQuantity(monthlySummary.totalQuantity);
      setTotalAmountPaid(monthlySummary.totalAmountPaid);
    } catch (error) {
      console.error('Error al buscar el producto:', error);
    }
  };

  const calculateMonthlySummary = (data, month) => {
    const filteredData = data.filter((item) => {
      const itemDate = new Date(item.fecha_compra);
      return itemDate.getMonth() === month - 1;
    });

    const totalQuantity = filteredData.reduce((total, item) => total + item.cantidad, 0);
    const totalAmountPaid = filteredData.reduce((total, item) => total + item.valor_pagado, 0);

    return { totalQuantity, totalAmountPaid };
  };

  const getMonthName = (monthNumber) => {
    const months = [
      'Enero',
      'Febrero',
      'Marzo',
      'Abril',
      'Mayo',
      'Junio',
      'Julio',
      'Agosto',
      'Septiembre',
      'Octubre',
      'Noviembre',
      'Diciembre',
    ];
    return months[parseInt(monthNumber) - 1];
  };

  return (
    <Container>
      <h1 className='mt-3'>Buscar Producto</h1>
      <Form>
        <Row>
          <Col>
            <Form.Control
              type="text"
              placeholder="Nombre del producto"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </Col>
          <Col>
            <Form.Control
              as="select"
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(e.target.value)}
            >
              <option value="">Seleccionar mes</option>
              <option value="1">Enero</option>
              <option value="2">Febrero</option>
              <option value="3">Marzo</option>
              <option value="4">Abril</option>
              <option value="5">Mayo</option>
              <option value="6">Junio</option>
              <option value="7">Julio</option>
              <option value="8">Agosto</option>
              <option value="9">Septiembre</option>
              <option value="10">Octubre</option>
              <option value="11">Noviembre</option>
              <option value="12">Diciembre</option>
            </Form.Control>
          </Col>
          <Col>
            <Button variant="primary" onClick={handleSearch}>
              Buscar
            </Button>
          </Col>
        </Row>
      </Form>
      <Row>
        <Col md={6} className='mt-2'>
          <h2>Resultados</h2>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Cantidad Total comprada</th>
                <th>Monto pagado</th>
                <th>Mes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{totalQuantity}</td>
                <td>{totalAmountPaid}</td>
                <td>{getMonthName(selectedMonth)}</td>
              </tr>
            </tbody>
          </Table>
        </Col>
        <hr/>
        <Col md={8}>
          <Bar
            data={{
              labels: ['Total Cantidad', 'Total Monto Pagado'],
              datasets: [
                {
                  label: 'Resumen Mensual',
                  data: [totalQuantity, totalAmountPaid],
                  backgroundColor: ['rgba(75, 192, 192, 0.2)', 'rgba(255, 99, 132, 0.2)'],
                  borderColor: ['rgba(75, 192, 192, 1)', 'rgba(255, 99, 132, 1)'],
                  borderWidth: 1,
                },
              ],
            }}
            options={{
              scales: {
                y: {
                  beginAtZero: true,
                },
              },
            }}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default InforMensual;
