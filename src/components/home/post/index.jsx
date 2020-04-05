import React from "react";
import "./styles.scss";

const Post = ({ feed }) => {
  const { avatar, user, post, likes, comment } = feed;

  return (
    <>
      <div className="post">
        <div className="post__post-header">
          <div className="post__post-profile">
            <a className="post__account-avatar" href="#!">
              <div className="post__avatar-decoration">
                <img className="post__avatar-image" src={avatar} alt={avatar} />
              </div>
            </a>
            <a className="post__account-name" href="#!">
              {user}
            </a>
          </div>
          <a className="post__menu-dots" href="#!">
            <i className="fas fa-ellipsis-h"></i>
          </a>
        </div>
        <img className="post__image-post" src={post} alt={post} />
        <div className="post__post-footer">
          <div className="post__post-action">
            <a className="post__action-link" href="#!">
              <i className="far fa-heart"></i>
            </a>
            <a className="post__action-link" href="#!">
              <i className="far fa-comment"></i>
            </a>
            <a className="post__action-link" href="#!">
              <i className="far fa-paper-plane"></i>
            </a>
          </div>
          <a className="post__post-save" href="#!">
            <i className="far fa-bookmark"></i>
          </a>
        </div>
        <a className="post__post-likes" href="#!">
          {likes} Me gusta
        </a>
        <div className="post__post-comments">
          <a className="post__user-comment" href="#!">
            {user}
          </a>
          <span className="post__comment">{comment}</span>
        </div>
        <a className="post__comments" href="#!">
          Ver los {likes} comentarios
        </a>
        <div className="post__comment-box">
          <form className="post__comment-elements">
            <textarea className="post__comment-text" placeholder="Añade un comentario..." cols="30" rows="10"></textarea>
            <button className="post__comment-submit" disabled>Publicar</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Post;
