import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const urlUpdate = 'https://crudnode-production.up.railway.app/api/users/update'

export const EditProducts = () => {
    const [producto, setProducto] = useState('');
    const [cliente, setCliente] = useState('');
    const [cantidad, setCantidad] = useState('');
    const [valor_pagado, setValor_pagado] = useState('');
    const [fecha_compra, setFecha_compra] = useState('');
    const { id } = useParams();
    const redirect = useNavigate();


    useEffect(() => {
        const getProduct = async () => {
            try {
                const respuesta = await axios.get(`https://crudnode-production.up.railway.app/api/users/${id}`);
                setProducto(respuesta.data.producto);
                setCliente(respuesta.data.cliente);
                setCantidad(respuesta.data.cantidad);
                setValor_pagado(respuesta.data.valor_pagado);
                setFecha_compra(respuesta.data.fecha_compra);
            } catch (error) {
                console.error('Error al obtener el producto:', error);
            }
        };
        getProduct();
    }, [id]);

    const update = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`${urlUpdate}/${id}`, {
                id: id,
                producto: producto,
                cliente: cliente,
                cantidad: cantidad,
                valor_pagado: valor_pagado,
                fecha_compra: fecha_compra
            });
            redirect('/');
        } catch (error) {
            console.error('Error al actualizar el producto:', error);
        }
    }

    return (
        <div className='container-fluid'>
            <div className='row mt-3'>
                <div className='col-8 col-lg8 offset-0 offset-lg-2'>
                    <div className='card text-center mt-1'>
                        <div className='card-header bg-success text-white'>Modificar Productos</div>
                        <div className='card-body'></div>
                        <form onSubmit={update} className='mb-1 mx-2'>
                            <span className='input-group-text mb-1'><i className='fa-solid fa-cart-shopping'>Producto</i></span>
                            <input type='text' id='nameProduct' maxLength='80'
                                className='form-control mb-2'
                                required={true} value={producto} onChange={(e) => setProducto(e.target.value)}>
                            </input>
                            <span className='input-group-text mb-1'><i className='fa-solid fa-user'></i>Cliente</span>
                            <input type='text' id='NameCustomer' maxLength='80'
                                className='form-control mb-2'
                                required={true} value={cliente} onChange={(e) => setCliente(e.target.value)}>
                            </input>
                            <span className='input-group-text mb-1'><i className='fa-solid fa-scale-balanced'></i>Cantidad</span>
                            <input type='number' id='amount'
                                className='form-control mb-2'
                                required={true} value={cantidad} onChange={(e) => setCantidad(e.target.value)}>
                            </input>
                            <span className='input-group-text mb-1'><i className='fa-solid fa-cash-register'></i>Valor Pagado</span>
                            <input type='number' id='pay'
                                className='form-control mb-2'
                                required={true} value={valor_pagado} onChange={(e) => setValor_pagado(e.target.value)}>
                            </input>
                            <span className='input-group-text mb-1'><i className='fa-solid fa-calendar-days'></i>Fecha Compra</span>
                            <input type='date' id='dateBuy'
                                className='form-control mb-2'
                                required={true} value={fecha_compra} onChange={(e) => setFecha_compra(e.target.value)}>
                            </input>
                            <button className='btn btn-success mt-3'>Guardar</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditProducts;