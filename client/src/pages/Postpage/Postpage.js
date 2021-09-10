import React from "react";

export default function Postpage() {
  return (
    <div className="post-page">
      <div className="post-page__header">
        <h1 className="post-page__title">POST</h1>
        <button className="post-page__btn">POST</button>
      </div>
      <textarea
        className="post-page__textarea"
        placeholder="write your message here.."
      />
      <div className="post-page__uploads"></div>
      <ul className="post-page__actions">
        <li className="post-page__action">
          <p>icon</p>
        </li>
        <li className="post-page__action">
          <p>icon</p>
        </li>
      </ul>
    </div>
  );
}
