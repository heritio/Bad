import React from "react";
import NotificationItem from "./NotificationItem";
export default function Tipped(props) {
  return (
    <div>
      {props.ourNotifications.map((notification) => {
        if (notification.type === "tipped") {
          return <NotificationItem item={notification} />;
        } else {
          return null;
        }
      })}
    </div>
  );
}
