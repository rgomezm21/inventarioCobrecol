import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import logo from '../assets/CobrecoIMG.png';
import { Link } from 'react-router-dom';

export const Sidebar = () => {
    return (
        <>
            <div
                className="d-flex flex-column flex-shrink-0 p-3 text-bg-success"
                style={{ width: 280, height: '100vh' }}
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
                    <li>
                        <a href="/create" className="nav-link text-white">
                            <svg className="bi pe-none me-2" width={16} height={16}>
                                <use xlinkHref="#people-circle" />
                            </svg>
                            Añadir Registro
                        </a>
                    </li>
                </ul>
                <hr />
                <div className="link">
                    <a
                        href="#"
                        className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                        <img
                            src={logo}
                            alt=""
                            width={32}
                            height={32}
                            className="rounded-circle me-2"
                        />
                        <strong>Cerrar sesión</strong>
                    </a>
                </div>
            </div>
        </>
    )
}
