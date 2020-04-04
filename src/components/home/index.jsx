import React, { useState } from "react";
import "./styles.scss";
import Post from "../home/post";
import History from "../home/history";
import Gretel from "../../assets/images/Gretel.png";
import { userFeeds } from "./posts";

const Home = () => {
  const [feeds] = useState(userFeeds);

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
          <div className="box-container box-container--profiles"></div>
        </div>
      </div>
    </>
  );
};

export default Home;
