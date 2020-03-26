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
        <div className="login__body">
          <img
            className="login__body__phones"
            src={phonelogin}
            alt="phones-login"
          />
          <div className="login__body__box">
            <div className="login__body__box__form">
              <img
                className="login__body__box__form__logo"
                src={logo}
                alt="logo"
              />
              <input
                className="login__body__box__form__input"
                type="text"
                placeholder="Teléfono, usuario o correo electrónico"
              />
              <input
                className="login__body__box__form__input"
                type="password"
                placeholder="Contraseña"
                name=""
                id=""
              />
              <Link
                to={"/Home"}
                className="login__body__box__form__button"
                disabled
              >
                Iniciar sesión
              </Link>
              <div className="login__body__box__form__decoration">
                <div className="login__body__box__form__decoration__line"></div>
                <div className="login__body__box__form__decoration__circle"></div>
                <div className="login__body__box__form__decoration__line"></div>
              </div>
              <a href="#!" className="login__body__box__form__fb-login">
                <i class="fab fa-facebook-square"></i> Iniciar sesión con
                Facebook
              </a>
              <a
                href="#!"
                className="login__body__box__form__forgotten-password"
              >
                ¿Has olvidado la contraseña?
              </a>
            </div>
            <div className="login__body__box__account">
              <p>¿No tienes una cuenta?</p>
              <a href="#!" className="login__body__box__account__register">
                Registrate
              </a>
            </div>
            <div className="login__body__box__download">
              <p>Descarga la aplicación.</p>
              <div className="login__body__box__download__stores">
                <a href="#!">
                  <img
                    className="login__body__box__download__stores__store"
                    src={appstore}
                    alt="appstore"
                  />
                </a>
                <a href="#!">
                  <img
                    className="login__body__box__download__stores__store"
                    src={googleplay}
                    alt="googleplay"
                  />
                </a>
              </div>
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
