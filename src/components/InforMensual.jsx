import React, { useState, useEffect } from 'react';
import { Form, Button, Container, Row, Col, Table } from 'react-bootstrap';
import Chart from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import 'bootstrap/dist/css/bootstrap.min.css';

export const InforMensual = () => {
  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [totalAmountPaid, setTotalAmountPaid] = useState(0);

  useEffect(() => {
    handleSearch();
  }, [selectedDate]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`https://crudnode-production.up.railway.app/api/search/${search}`);
      const searchData = response.data;

      setData(searchData);
      // Filtra los datos por mes y año seleccionados
      const monthlySummary = calculateMonthlySummary(searchData, selectedDate);
      setTotalQuantity(monthlySummary.totalQuantity);
      setTotalAmountPaid(monthlySummary.totalAmountPaid);
    } catch (error) {
      console.error('Error al buscar el producto:', error);
    }
  };

  const calculateMonthlySummary = (data, date) => {
    if (!date) {
      return { totalQuantity: 0, totalAmountPaid: 0 };
    }

    const selectedMonth = date.getMonth() + 1;
    const selectedYear = date.getFullYear();

    const filteredData = data.filter((item) => {
      const itemDate = new Date(item.fecha_compra);
      return (
        itemDate.getMonth() + 1 === selectedMonth && itemDate.getFullYear() === selectedYear
      );
    });

    const totalQuantity = filteredData.reduce((total, item) => total + item.cantidad, 0);
    const totalAmountPaid = filteredData.reduce((total, item) => total + item.valor_pagado, 0);

    return { totalQuantity, totalAmountPaid };
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
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              showMonthYearPicker
              dateFormat="MM/yyyy"
              className="form-control"
              placeholderText='Mes/Año'
            />
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
                <td>{selectedDate ? selectedDate.toLocaleDateString('es-ES', { month: 'long', year: 'numeric' }) : 'N/A'}</td>
              </tr>
            </tbody>
          </Table>
        </Col>
        <hr />
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
};

export default InforMensual;
