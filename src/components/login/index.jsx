import React from "react";
import { Link } from "react-router-dom";
import "./styles.scss";
import phonelogin from "../../assets/images/phonelogin.png";
import appstore from "../../assets/images/appstore.png";
import googleplay from "../../assets/images/googleplay.png";
import logo from "../../assets/images/logo.png";

const Login = () => {
  return (
    <>
      <div className="login">
        <img className="login__phones" src={phonelogin} alt="phones-login" />
        <div className="login__box">
          <div className="form">
            <img className="form__logo" src={logo} alt="logo" />
            <input
              className="form__input"
              type="text"
              placeholder="Teléfono, usuario o correo electrónico"
            />
            <input
              className="form__input"
              type="password"
              placeholder="Contraseña"
              name=""
              id=""
            />
            <Link to={"/Home"} className="form__button" disabled>
              Iniciar sesión
            </Link>
            <div className="form__decoration">
              <div className="form__line"></div>
              <div className="form__circle"></div>
              <div className="form__line"></div>
            </div>
            <a href="#!" className="form__fb-login">
              <i className="fab fa-facebook-square"></i> Iniciar sesión con
              Facebook
            </a>
            <a href="#!" className="form__forgotten-password">
              ¿Has olvidado la contraseña?
            </a>
          </div>
          <div className="account">
            <p>¿No tienes una cuenta?</p>
            <a href="#!" className="account__register">
              Registrate
            </a>
          </div>
          <div className="download">
            <p>Descarga la aplicación.</p>
            <div className="download__stores">
              <a href="#!">
                <img className="download__store" src={appstore} alt="appstore" />
              </a>
              <a href="#!">
                <img className="download__store" src={googleplay} alt="googleplay" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="login-footer">
        <a className="login-footer__footer-link" href="#!">
          informacion
        </a>
        <a className="login-footer__footer-link" href="#!">
          ayuda
        </a>
        <a className="login-footer__footer-link" href="#!">
          prensa
        </a>
        <a className="login-footer__footer-link" href="#!">
          api
        </a>
        <a className="login-footer__footer-link" href="#!">
          empleo
        </a>
        <a className="login-footer__footer-link" href="#!">
          privacidad
        </a>
        <a className="login-footer__footer-link" href="#!">
          condiciones
        </a>
        <a className="login-footer__footer-link" href="#!">
          ubicaciones
        </a>
        <a className="login-footer__footer-link" href="#!">
          cuentas destacadas
        </a>
        <a className="login-footer__footer-link" href="#!">
          hashtags
        </a>
        <a className="login-footer__footer-link" href="#!">
          idioma
        </a>

        <p> &copy; 2020 InstagramClon made by Tulio Ramirez</p>
      </div>
    </>
  );
};

export default Login;
