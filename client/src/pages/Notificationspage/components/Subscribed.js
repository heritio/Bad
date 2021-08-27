import React from "react";
import NotificationItem from "./NotificationItem";
export default function Subscribed(props) {
  return (
    <div>
      {props.ourNotifications.map((notification) => {
        if (notification.type === "subscribed") {
          return <NotificationItem item={notification} />;
        } else {
          return null;
        }
      })}
    </div>
  );
}
