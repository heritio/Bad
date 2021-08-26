import React, { useState } from "react";
import CommentFeed from "./CommentFeed";
export default function FeedItem(props) {
  const [show, setShow] = useState(false);
  function showComment() {
    setShow(!show);
  }
  return (
    <div className="feed-item">
      <div className="feed-item__header">
        <img className="feed-item__avatar" src={props.post.userAvatar} />
        <div className="feed-item__avatar-info">
          <p className="feed-item__display-name">{props.post.displayName}</p>
          <p className="feed-item__display-handler">{props.post.handler}</p>
        </div>
      </div>
      <p className="feed-item__text-content">{props.post.textContent}</p>
      <img className="feed-item__feed-img" src={props.post.img} />
      <div className="feed-item__likes-amount">
        <bold className="feed-item__likes-amount-nr">{props.post.likes}</bold>
        <p className="feed-item__likes-amount-label">likes</p>
      </div>
      <div className="feed-item__footer">
        <ul className="feed-item__footer-icons">
          <li className="feed-item__footer-icon-item">
            <i class="far fa-heart"></i>
          </li>
          <li
            onClick={() => {
              showComment();
            }}
            className="feed-item__footer-icon-item"
          >
            <i class="far fa-comment"></i>
          </li>
        </ul>
      </div>
      {show === true ? (
        <div className="feed-item__comments-container">
          <div className="feed-item__comments-form">
            <img
              className="feed-item__comments-user"
              src={props.post.userAvatar}
              alt="Current User"
            />
            {" *"}
            <input
              className="feed-item__comments-input"
              type="text"
              placeholder="Comment here"
            />
            <i class="fas fa-paper-plane"></i>
          </div>
          <div className="feed-item__comments-inner-container">
            {props.post.comments.map((comment, index) => {
              return <CommentFeed comment={comment} />;
            })}
          </div>
        </div>
      ) : null}
    </div>
  );
}
