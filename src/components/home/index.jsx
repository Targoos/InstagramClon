import React, { useState } from "react";
import "./styles.scss";
import Post from "../home/post";
import History from "../home/history";
import SugestedProfile from "../home/SugestedProfile";
import Gretel from "../../assets/images/Gretel.png";
import { userFeeds } from "./posts";
import { suggestedProfiles } from "./sugestedProfiles";

const Home = () => {
  const [feeds] = useState(userFeeds);
  const [profiles] = useState(suggestedProfiles);

  return (
    <>
      <div className="home">
        <div className="home__posts">
          {feeds.map(i => (
            <Post feed={i} key={i.id} />
          ))}
        </div>
        <div className="home__sidebar">
          <div className="home-profile">
            <a className="home-profile__profile-picture" href="#!">
              <img
                className="home-profile__profile-image"
                src={Gretel}
                alt="profile"
              />
            </a>
            <div className="home-profile__profile-account">
              <a className="home-profile__profile-name" href="#!">
                Kiscia
              </a>
              <span className="home-profile__profile-account">Gretel</span>
            </div>
          </div>
          <div className="box-nav">
            <span className="box-nav__title">Historias</span>
            <a className="box-nav__see-all" href="#!">
              Ver todas
            </a>
          </div>
          <div className="box-container">
            {feeds.map(k => (
              <History feed={k} key={k.id} />
            ))}
          </div>
          <div className="box-nav">
            <span className="box-nav__title">Sugerencias para ti</span>
            <a className="box-nav__see-all" href="#!">
              Ver todo
            </a>
          </div>
          <div className="box-container box-container--profiles">
              {profiles.map(l => (
                <SugestedProfile profile={l} key={l.id}/>
              ))}
          </div>
          <div className="sidebar-footer">
            <a href="#!" className="sidebar-footer__sidebar-link">Informacion</a>
            <a href="#!" className="sidebar-footer__sidebar-link">Ayuda</a>
            <a href="#!" className="sidebar-footer__sidebar-link">Prensa</a>
            <a href="#!" className="sidebar-footer__sidebar-link">API</a>
            <a href="#!" className="sidebar-footer__sidebar-link">Empleo</a>
            <a href="#!" className="sidebar-footer__sidebar-link">Privacidad</a>
            <a href="#!" className="sidebar-footer__sidebar-link">Condiciones</a>
            <a href="#!" className="sidebar-footer__sidebar-link">Ubicaciones</a>
            <a href="#!" className="sidebar-footer__sidebar-link">Cuentas destacadas</a>
            <p className="sidebar-footer__sidebar-p" >&copy; 2020 InstagramClon made by Tulio Ramirez</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
