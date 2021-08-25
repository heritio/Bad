import React from "react";

export default function FeedItem(props) {
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
      <div className="feed-item__footer">
        <ul className="feed-item__footer-icons">
          <li className="feed-item__footer-icon-item">
            <i class="far fa-heart"></i>
          </li>
          <li className="feed-item__footer-icon-item">
            <i class="far fa-comment"></i>
          </li>
        </ul>
      </div>
      <div className="feed-item__likes-amount">
        <bold className="feed-item__likes-amount-nr">{props.post.likes}</bold>
        <p>likes</p>
      </div>
    </div>
  );
}
