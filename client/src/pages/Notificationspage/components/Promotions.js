import React from "react";
import NotificationItem from "./NotificationItem";
export default function Promotions(props) {
  return (
    <div>
      {props.ourNotifications.map((notification) => {
        if (notification.type === "promotion") {
          return <NotificationItem item={notification} />;
        } else {
          return null;
        }
      })}
    </div>
  );
}
