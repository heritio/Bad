import React from "react";
import NotificationItem from "./NotificationItem";
export default function AllNotifications(props) {
  return (
    <div>
      {props.ourNotifications.map((notification) => {
        return <NotificationItem item={notification} />;
      })}
    </div>
  );
}
