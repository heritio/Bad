import React from "react";
import NotificationItem from "./NotificationItem";
export default function Liked(props) {
  return (
    <div>
      {props.ourNotifications.map((notification) => {
        if (notification.type === "liked") {
          return <NotificationItem item={notification} />;
        } else {
          return null;
        }
      })}
    </div>
  );
}
