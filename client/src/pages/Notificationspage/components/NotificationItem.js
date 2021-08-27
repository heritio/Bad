import React from "react";

export default function NotificationItem(props) {
  return (
    <div className="notification-page__item">
      <img
        className="notification-page__item-img"
        src={props.item.userImg}
        alt="notification-msg"
      />
      <div className="notification-page__item-info">
        <div className="notification-page__item-user-info">
          {" "}
          <h4 className="notification-page__item-display-name">
            {props.item.displayName}
          </h4>{" "}
          <p className="notification-page__item-user-handler">
            {props.item.userHandler}
          </p>{" "}
        </div>
        <p className="notification-page__item-text-content">
          {props.item.textContent}
        </p>
      </div>
    </div>
  );
}
