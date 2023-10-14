import { useDispatch } from 'react-redux';
import Logo from '../../assets/CobrecoIMG.png'
import { startLogin } from '../../store/auth/thunks';
import { useForm } from '../../hooks';

export const LoginPage = () => {

  const dispatch = useDispatch();
  const { email, password, onInputChange } = useForm({
    email: '',
    password: ''
  })  
  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(startLogin({email, password}));
  }


  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card" style={{ marginBottom: "200px", marginTop: "200px", width: "400px", background: "#F7F2F2" }}>
        <div className="card-body d-flex flex-column align-items-center" style={{ margin: "50px" }}>
          <img
            className="mb-4"
            src={Logo}
            alt=""
            width="72"
            height="65"
          />
          <h1 className="h3 mb-3 fw-normal text-center">Inicie sesión</h1>
          <form onSubmit={onSubmit} style={{ width: "350px" }}>
            <div class="form-floating" style={{ marginBottom: "10px", borderLeftWidth: "70px" }}>
              <input type="email" name='email' value={email} onChange={onInputChange} class="form-control" id="floatingInput" placeholder="name@example.com" />
              <label for="floatingInput">Correo</label>
            </div>
            <div class="form-floating">
              <input type="password" name='password' value={password} onChange={onInputChange} class="form-control" id="floatingPassword" placeholder="Password" />
              <label for="floatingPassword">Contraseña</label>
            </div>

            <div className="form-check text-start my-3">
              <input
                className="form-check-input"
                type="checkbox"
                value="remember-me"
                id="flexCheckDefault"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Recuerdame
              </label>
            </div>
            <button
              className="btn btn-primary w-100 py-2"
              type="submit"
            >
              Iniciar sesión
            </button>
            <p className="mt-5 mb-3 text-body-secondary text-center">
              &copy; Rgomezm21 2023
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};
