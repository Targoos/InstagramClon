import React from "react";
import "./styles.scss";

const Post = ({ feed }) => {
  const { avatar, user, post, likes, comment } = feed;

  return (
    <>
      <div className="post">
        <div className="post__post-header">
          <div className="post__post-header__post-profile">
            <a
              className="post__post-header__post-profile__account-avatar"
              href="#!"
            >
              <div className="post__post-header__post-profile__account-avatar__avatar-decoration">
                <img
                  className="post__post-header__post-profile__account-avatar__avatar-decoration__avatar-image"
                  src={avatar}
                  alt={avatar}
                />
              </div>
            </a>
            <a
              className="post__post-header__post-profile__account-name"
              href="#!"
            >
              {user}
            </a>
          </div>
          <a className="post__post-header__menu-dots" href="#!">
            <i className="fas fa-ellipsis-h"></i>
          </a>
        </div>
        <img className="post__image-post" src={post} alt={post} />
        <div className="post__post-footer">
          <div className="post__post-footer__post-action">
            <a
              className="post__post-footer__post-action__action-link"
              href="#!"
            >
              <i class="far fa-heart"></i>
            </a>
            <a
              className="post__post-footer__post-action__action-link"
              href="#!"
            >
              <i class="far fa-comment"></i>
            </a>
            <a
              className="post__post-footer__post-action__action-link"
              href="#!"
            >
              <i class="far fa-paper-plane"></i>
            </a>
          </div>
          <a className="post__post-footer__post-save" href="#!">
            <i class="far fa-bookmark"></i>
          </a>
        </div>
        <a className="post__post-likes" href="#!">
          {likes} Me gusta
        </a>
        <div className="post__post-comments">
          <a className="post__post-comments__user-comment" href="#!">
            {user}
          </a>
          <span className="post__post-comments__comment">{comment}</span>
        </div>
        <a className="post__comments" href="#!">
          Ver los {likes} comentarios
        </a>
      </div>
    </>
  );
};

export default Post;
