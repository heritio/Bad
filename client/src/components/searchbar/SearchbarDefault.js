import React from "react";

export default function SearchbarDefault() {
  return (
    <div className="search-default">
      <div className="search-default__container">
        <input
          className="search-default__input"
          type="text"
          placeholder="search person or post"
        />
        <ul className="search-default__list">
          <li className="search-default__item">Item</li>
          <li className="search-default__item">Item</li>
          <li className="search-default__item">Item</li>
          <li className="search-default__item">Item</li>
        </ul>
      </div>

      <i class="fas fa-search search-default__icon"></i>
    </div>
  );
}
