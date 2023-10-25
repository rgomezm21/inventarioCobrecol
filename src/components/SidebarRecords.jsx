import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import logo from '../assets/CobrecoIMG.png';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { startLogout } from '../store/auth/thunks';

export const Sidebar = () => {
    const dispatch = useDispatch();
    const onLogout = () =>{
        dispatch(startLogout());
    }
    return (
        <>
            <div
                className="d-flex flex-column flex-shrink-0 p-3 text-bg-success"
                style={{ width: 270, height: '100vh' }}
            >
                <a
                    href="/"
                    className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
                >
                     <img
                            src={logo}
                            alt=""
                            width={52}
                            height={52}
                            className="rounded-circle me-2"
                        />
                    <svg className="bi pe-none me-2" width={5}>
                        <use xlinkHref="#bootstrap" />
                    </svg>
                    <span className="fs-4">COBRECOL</span>
                </a>
                <hr />
                <ul className="nav nav-pills flex-column mb-auto">
                    <li style={{fontSize:'18px'}}>
                        <a href="/create" className="nav-link text-white">
                            <svg className="bi pe-none me-2" width={16} height={16}>
                                <use xlinkHref="#people-circle" />
                            </svg>
                            <i class="bi bi-cart-plus me-2"></i>
                            Añadir Compra
                        </a>
                    </li>
                    <li style={{fontSize:'18px'}}>
                        <a href="/inform" className="nav-link text-white">
                            <svg className="bi pe-none me-2" width={16} height={16}>
                                <use xlinkHref="#people-circle" />
                            </svg>
                            <i class="bi bi-clipboard-data me-2"></i>
                            Informe Mensual
                        </a>
                    </li>
                </ul>
                <hr />
                <div className="link" onClick={onLogout}>
                    <a 
                    href="#"
                    className="d-flex align-items-center text-white text-decoration-none"
                    >
                        <img
                            src={logo}
                            alt=""
                            width={32}
                            height={32}
                            className="rounded-circle me-2"
                        />
                        <strong style={{fontSize:'18px'}}>Cerrar sesión</strong>
                    </a>
                </div>
            </div>
        </>
    )
}
