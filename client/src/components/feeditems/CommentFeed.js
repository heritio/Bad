import React from "react";

export default function CommentFeed(props) {
  return (
    <div className="feed-item__comment-item">
      <img
        className="feed-item__comment-item-img"
        src={props.comment.userAvatar}
        alt="commenting user"
      />
      <div className="feed-item__comment-item-info">
        <p className="feed-item__comment-item-displayname">
          {props.comment.displayName}
        </p>
        <p className="feed-item__comment-item-comment-text">
          {props.comment.commentText}
        </p>
      </div>
    </div>
  );
}
