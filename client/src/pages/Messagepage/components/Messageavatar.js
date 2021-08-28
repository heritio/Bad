import React from "react";

export default function Messageavatar(props) {
  return (
    <div className="message-page__avatar">
      <img
        className="message-page__avatar-img"
        src={props.user.userImg}
        alt="avatar-og-recipient"
      />
      <div className="message-page__avatar-info">
        <h4 className="message-page__avatar-display">
          {props.user.displayName}
        </h4>
        <p className="message-page__avatar-handle">{props.user.userHandler}</p>
      </div>
    </div>
  );
}
