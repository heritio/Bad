import React from "react";

export default function FeedSuggestion(props) {
  return (
    <div
      className="feed-suggestion"
      style={{ backgroundImage: `url(${props.suggestion.userBanner})` }}
    >
      <img
        className="feed-suggestion__avatar"
        src={props.suggestion.userAvatar}
        alt={props.suggestion.userAvatar + "description of"}
      />
      <div className="feed-suggestion__avatar-info">
        <p className="feed-suggestion__display-name">
          {props.suggestion.displayName}
        </p>
        <p className="feed-suggestion__display-handler">
          {props.suggestion.userHandler}
        </p>
      </div>
    </div>
  );
}
