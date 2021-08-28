import React from "react";
import InputBox from "./components/InputBox";
import Messageavatar from "./components/Messageavatar";
import OwnMessage from "./components/OwnMessage";
import RecipientMessage from "./components/RecipientMessage";
export default function Messagepage() {
  let user1 = {
    displayName: "TigerFist",
    userHandler: "@tigerfist",
    userImg:
      "https://images.pexels.com/photos/3155588/pexels-photo-3155588.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  };
  let user2 = {
    displayName: "TigerFist2",
    userHandler: "@tigerfist2",
    userImg:
      "https://images.pexels.com/photos/3155588/pexels-photo-3155588.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  };
  let user3 = {
    displayName: "TigerFist3",
    userHandler: "@tigerfist3",
    userImg:
      "https://images.pexels.com/photos/3155588/pexels-photo-3155588.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  };
  return (
    <div className="message-page">
      <div className="message-page__header">
        <h1 className="message-page__title">Messages</h1>
      </div>
      <div className="message-page__content">
        <div className="message-page__messages">
          <Messageavatar user={user1} />
          <Messageavatar user={user1} />
        </div>
        <div className="message-page__chatt-box">
          <div>
            <OwnMessage />
            <RecipientMessage />
            <RecipientMessage />
          </div>
          <InputBox />
        </div>
      </div>
    </div>
  );
}
