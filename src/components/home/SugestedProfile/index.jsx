import React from "react";
import "./styles.scss";

const SugestedProfile = ({ profile }) => {
  const { avatar, user } = profile;
  return (
    <>
      <div className="sugested-profile">
        <div className="sugested-profile__profile-box">
          <a href="#!" className="sugested-profile__profile-link">
            <img
              className="sugested-profile__profile-image"
              src={avatar}
              alt={user}
              avatar
            />
          </a>
          <a className="sugested-profile__profile-account" href="#!">
            {user}
          </a>
        </div>
        <a className="sugested-profile__profile-follow" href="#!">
          Seguir
        </a>
      </div>
    </>
  );
};

export default SugestedProfile;
