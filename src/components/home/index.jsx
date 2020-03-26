import React from "react";
import "./styles.scss";
import Gretel from "../../assets/images/Gretel.png";

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="home__feeds"></div>
        <div className="home__sidebar">
          <div className="home__sidebar__home-profile">
            <a className="home__sidebar__home-profile__profile-picture" href="">
              <img
                className="home__sidebar__home-profile__profile-picture__profile-image"
                src={Gretel}
                alt="profile"
              />
            </a>
            <div className="home__sidebar__home-profile__profile-account">
              <a
                className="home__sidebar__home-profile__profile-account__profile-name"
                href="#!"
              >
                Kiscia
              </a>
              <span className="home__sidebar__home-profile__profile-account__profile-account">
                Gretel
              </span>
            </div>
          </div>
          <div className="home__sidebar__home-history">
            <div className="home__sidebar__home-history__history-nav">
              <span className="home__sidebar__home-history__history-nav__title">
                Historias
              </span>
              <a
                className="home__sidebar__home-history__history-nav__see-all"
                href="#!"
              >
                Ver todas
              </a>
            </div>
            <div className="home__sidebar__home-history__history-profiles">
              <p>HISTORIA</p>
              <p>HISTORIA</p>
              <p>HISTORIA</p>
              <p>HISTORIA</p>
              <p>HISTORIA</p>
              <p>HISTORIA</p>
            </div>
          </div>
          {/* <div className="home__sidebar__suggested-profiles">
                        <div className="home__sidebar__suggested-profiles__profiles-nav"></div>
                        <div className="home__sidebar__suggested-profiles__profiles-history"></div>
                    </div> */}
        </div>
      </div>
    </>
  );
};

export default Home;
