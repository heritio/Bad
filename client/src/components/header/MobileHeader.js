import React from "react";

export default function MobileHeader() {
  return (
    <div className="mobile-header">
      <ul className="mobile-header__menu">
        <li className="mobile-header__menu-item">
          <a href="/" className="mobile-header__link">
            <i class="fas fa-home"></i>
          </a>
        </li>
        <li className="mobile-header__menu-item">
          <a href="/my/notification" className="mobile-header__link">
            <i class="far fa-bell"></i>
          </a>
        </li>
        <li className="mobile-header__menu-item">
          <a href="/new" className="mobile-header__link">
            <i class="fas fa-plus-square"></i>
          </a>
        </li>
        <li className="mobile-header__menu-item">
          <a href="/my/messages" className="mobile-header__link">
            <i class="far fa-comment-alt"></i>
          </a>
        </li>
      </ul>
    </div>
  );
}
