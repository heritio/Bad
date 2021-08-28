import React from "react";

export default function InputBox() {
  return (
    <div className="message-page__input-container">
      <textarea
        className="message-page__input-box"
        name=""
        id=""
        cols="30"
        rows="10"
      ></textarea>
      <button className="message-page__input-button">SEND</button>
    </div>
  );
}
