import React from "react";
import { Link } from "react-router-dom";
export default function DesktopHeader() {
  return (
    <div className="desktop-header">
      <ul className="desktop-header__menu">
        <li className="desktop-header__menu-item">
          <i class="fas fa-portrait"></i>
        </li>
        <li className="desktop-header__menu-item">
          <a href="/" className="desktop-header__link">
            <i class="fas fa-home"></i>
            <h4>Home</h4>
          </a>
        </li>
        <li className="desktop-header__menu-item">
          <a href="/my/notification" className="desktop-header__link">
            {" "}
            <i class="far fa-bell"></i>
            <h4>Notification</h4>
          </a>
        </li>
        <li className="desktop-header__menu-item">
          <a href="/messages" className="desktop-header__link">
            {" "}
            <i class="far fa-comment-alt"></i>
            <h4>Messages</h4>
          </a>
        </li>
        <li className="desktop-header__menu-item desktop-header__menu-item-circle">
          <a href="/new" className="desktop-header__link">
            <i class="fas fa-plus-circle"></i>
            <h4>New Post</h4>
          </a>
        </li>
      </ul>
    </div>
  );
}
