import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const url = 'https://crudnode-production.up.railway.app/api/users/create';

export const CreateProducts = () => {
    const [producto, setProducto] = useState('');
    const [cliente, setCliente] = useState('');
    const [cantidad, setCantidad] = useState('');
    const [valor_pagado, setValor_pagado] = useState('');
    const [fecha_compra, setFecha_compra] = useState('');
    const redirect = useNavigate();

    const store = async (e) => {
        e.preventDefault();
        
        const partesFecha = fecha_compra.split('-');
        const año = partesFecha[0];
        const mes = partesFecha[1];
        const dia = partesFecha[2];
        const fechaFormateada = `${año}-${mes}-${dia}`;

        await axios.post(url, { producto, cliente, cantidad, valor_pagado, fecha_compra: fechaFormateada });
        redirect('/');
    };

    return (
        <div className='container-fluid'>
            <div className='row mt-1'>
                <div className='col-8 col-lg8 offset-0 offset-lg-2'>
                    <div className='card text-center'>
                        <div className='card-header bg-success text-white'>Añadir Productos</div>
                        <div className='card-body'></div>
                        <form onSubmit={store} className='mb-3 mx-2'>
                            <span className='input-group-text mb-1'><i className='fa-solid fa-cart-shopping'></i> Producto</span>
                            <input type='text' id='nameProduct' maxLength='80'
                                className='form-control mb-3'
                                required={true} value={producto} onChange={(e) => setProducto(e.target.value)}>
                            </input>
                            <span className='input-group-text mb-1'><i className='fa-solid fa-user'></i>Cliente</span>
                            <input type='text' id='NameCustomer' maxLength='80'
                                className='form-control mb-3'
                                required={true} value={cliente} onChange={(e) => setCliente(e.target.value)}>
                            </input>
                            <span className='input-group-text mb-1'><i className='fa-solid fa-scale-balanced'></i>Cantidad</span>
                            <input type='number' id='amount'
                                className='form-control mb-3'
                                required={true} value={cantidad} onChange={(e) => setCantidad(e.target.value)}>
                            </input>
                            <span className='input-group-text mb-1'><i className='fa-solid fa-cash-register'></i>Valor Pagado</span>
                            <input type='number' id='pay'
                                className='form-control mb-3'
                                required={true} value={valor_pagado} onChange={(e) => setValor_pagado(e.target.value)}>
                            </input>
                            <span className='input-group-text mb-1'><i className='fa-solid fa-calendar-days'></i>Fecha Compra</span>
                            <input type='date' id='dateBuy'
                                className='form-control mb-1'
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

export default CreateProducts