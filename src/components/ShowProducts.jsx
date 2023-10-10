import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { search } from '../services/user.service';

const url = 'https://crudnode-production.up.railway.app/api/users';

function ShowProducts() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // Página actual
  const [itemsPerPage] = useState(8); // Número de elementos por página

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const respuesta = await axios.get(url);
    setProducts(respuesta.data);
  };

  const handleChange = async (e) => {
    e.preventDefault();

    if (e.target.value === '') {
      getProducts();
    } else {
      const result = await search(e.target.value);
      setProducts(result);
    }
  };

  const deleteProduct = async (id) => {
    console.log('ID a eliminar:', id);
    try {
      const response = await axios.delete(
        `https://crudnode-production.up.railway.app/api/users/eliminate/${id}`
      );
      console.log('Respuesta del servidor:', response);
      if (response.status === 200) {
        console.log('Producto eliminado con éxito');
        getProducts();
      } else {
        console.error('Error al eliminar el producto:', response.status);
      }
    } catch (error) {
      console.error('Error al eliminar el producto:', error);
    }
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);

  const totalItems = products.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const renderPagination = () => {
    return (
      <ul className="pagination justify-content-end"> {/* Mover a la esquina derecha */}
        <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
          <button
            className="page-link"
            onClick={() => handlePageChange(currentPage - 1)}
          >
            Anterior
          </button>
        </li>
        {Array.from({ length: totalPages }).map((_, index) => (
          <li
            key={index}
            className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}
          >
            <button
              className="page-link"
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </button>
          </li>
        ))}
        <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
          <button
            className="page-link"
            onClick={() => handlePageChange(currentPage + 1)}
          >
            Siguiente
          </button>
        </li>
      </ul>
    );
  };

  return (
    <div className="container-fluid">
      <nav className="navbar bg-success border-body">
        <div className="container-fluid d-flex justify-content-center">
          <form className="d-flex" role="search">
            <input
              onChange={handleChange}
              name="search"
              id="search"
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              style={{width:"426px"}}
            />
            <button className="btn btn-outline-success bg-light" type="submit">
              Buscar
            </button>
          </form>
        </div>
      </nav>
      <div className="row mt-3">
        <div className="col-12 col-lg-10 offset-0 offset-lg-1">
          <div className="table-responsive table-success">
            <table className="table table-bordered">
              <thead className="table-success">
                <tr>
                  <th>#</th>
                  <th>Producto</th>
                  <th>cliente</th>
                  <th>cantidad (KG)</th>
                  <th>Valor pagado</th>
                  <th>Fecha Compra (AAAA/MM/DD)</th>
                  <th>Opciones</th>
                </tr>
              </thead>
              <tbody className="table-group-divider">
                {currentItems.map((product, i) => (
                  <tr key={product.id}>
                    <td>{i + 1}</td>
                    <td>{product.producto}</td>
                    <td>{product.cliente}</td>
                    <td>{product.cantidad}</td>
                    <td>${new Intl.NumberFormat('es-CO').format(product.valor_pagado)}</td>
                    <td>{product.fecha_compra}</td>
                    <td>
                      <Link to={`/edit/${product.id}`} className="btn btn-warning">
                        Editar
                      </Link>
                      &nbsp;
                      <button className="btn btn-danger" onClick={() => deleteProduct(product.id)}>
                        Eliminar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {renderPagination()} {/* Renderizar los controles de paginación */}
    </div>
  );
}

export default ShowProducts;
