import React from "react";
import { useHistory } from "react-router-dom";
import "./styles.scss";
import logo from "../../assets/images/logo.png";
import Gretel from "../../assets/images/Gretel.png";

const Nav = () => {
  let match = useHistory();
  let location = match.location.pathname;

  return (
    <>
      {location === "/" ? null : (
        <>
          <div className="nav">
            <div className="nav__nav-header">
              <a className="nav__nav-header__nav-left" href="#!">
                <img
                  className="nav__nav-header__nav-left__logo"
                  src={logo}
                  alt="logo"
                />
              </a>
              <div className="nav__nav-header__nav-center">
                <input
                  className="nav__nav-header__nav-center__input"
                  type="text"
                  placeholder="Busca"
                />
              </div>
              <div className="nav__nav-header__nav-right">
                <a className="nav__nav-header__nav-right__nav-link" href="#!">
                  <i className="fas fa-home"></i>
                </a>
                <a className="nav__nav-header__nav-right__nav-link" href="#!">
                  <i className="far fa-paper-plane"></i>
                </a>
                <a className="nav__nav-header__nav-right__nav-link" href="#!">
                  <i className="far fa-compass"></i>
                </a>
                <a className="nav__nav-header__nav-right__nav-link" href="#!">
                  <i className="far fa-heart"></i>
                </a>
                <a className="nav__nav-header__nav-right__nav-link" href="#!">
                  <img
                    className="nav__nav-header__nav-right__nav-link__image"
                    src={Gretel}
                    alt="profile"
                  />
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Nav;
