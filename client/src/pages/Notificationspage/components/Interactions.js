import React from "react";
import NotificationItem from "./NotificationItem";
export default function Interactions(props) {
  return (
    <div>
      {props.ourNotifications.map((notification) => {
        if (notification.type === "interraction") {
          return <NotificationItem item={notification} />;
        } else {
          return null;
        }
      })}
    </div>
  );
}
