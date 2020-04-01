import React from "react";
import "./styles.scss";

const History = ({ feed }) => {
  const { avatar, user, name } = feed;

  return (
    <>
      <div className="historys">
        <a className="historys__history-profile" href="">
          <div className="historys__history-profile__history-decoration">
            <img
              className="historys__history-profile__history-decoration__profile-avatar"
              src={avatar}
              alt={avatar}
            />
          </div>
        </a>
        <div className="historys__history">
          <a className="historys__history__history-account" href="#!">
            {user}
          </a>
        </div>
      </div>
    </>
  );
};

export default History;
