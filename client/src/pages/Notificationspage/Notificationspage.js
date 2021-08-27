import React from "react";
import { Link, Switch, Route, BrowserRouter, NavLink } from "react-router-dom";

import AllNotifications from "./components/AllNotifications";
import Interactions from "./components/Interactions";
import Liked from "./components/Liked";
import Promotions from "./components/Promotions";
import Subscribed from "./components/Subscribed";
import Tipped from "./components/Tipped";
export default function Notificationspage() {
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
  let ourNotifications = [
    {
      id: 1,
      type: "liked",
      displayName: user1.displayName,
      userHandler: user1.userHandler,
      textContent: `${user1.displayName} liked your [POST]`,
      userImg: user1.userImg,
    },
    {
      id: 2,
      type: "tipped",
      displayName: user2.displayName,
      userHandler: user2.userHandler,
      textContent: `${user2.displayName} tipped you`,
      userImg: user2.userImg,
    },
    {
      id: 3,
      type: "interraction",
      displayName: user3.displayName,
      userHandler: user3.userHandler,
      textContent: `${user3.displayName} commented on your [POST]`,
      userImg: user3.userImg,
    },
    {
      id: 4,
      type: "liked",
      displayName: user3.displayName,
      userHandler: user3.userHandler,
      textContent: `${user3.displayName} liked your [POST]`,
      userImg: user3.userImg,
    },
  ];
  return (
    <div className="notification-page">
      <div className="notification-page__header">
        <h1 className="notification-page__title">Notifications</h1>
      </div>
      <div className="notification-page__content">
        <ul className="notification-page__links">
          <li className="notification-page__link-item">
            <NavLink
              activeClassName="active"
              to="/my/notification/all"
              style={{ color: "black" }}
            >
              <i class="fas fa-layer-group"></i> <h4>All</h4>
            </NavLink>
          </li>
          <li className="notification-page__link-item">
            <NavLink
              activeClassName="active"
              to="/my/notification/interactions"
              style={{ color: "black" }}
            >
              <i class="far fa-comment"></i> <h4>Interactions</h4>
            </NavLink>
          </li>
          <li className="notification-page__link-item">
            <NavLink to="/my/notification/liked" style={{ color: "black" }}>
              <i class="far fa-heart"></i> <h4>Liked</h4>
            </NavLink>
          </li>
          <li className="notification-page__link-item">
            <NavLink
              activeClassName="active"
              to="/my/notification/subscribed"
              style={{ color: "black" }}
            >
              <i class="fas fa-users"></i> <h4>Subscribed</h4>
            </NavLink>
          </li>
          <li className="notification-page__link-item">
            <NavLink
              activeClassName="active"
              to="/my/notification/tipped"
              style={{ color: "black" }}
            >
              <i class="fas fa-hand-holding-usd"></i> <h4>Tipped</h4>
            </NavLink>
          </li>
          <li className="notification-page__link-item">
            <NavLink
              activeClassName="active"
              to="/my/notification/promotions"
              style={{ color: "black" }}
            >
              <i class="fas fa-level-up-alt"></i> <h4>Promotions</h4>
            </NavLink>
          </li>
        </ul>

        <Switch>
          <Route path="/my/notification/" exact>
            <AllNotifications ourNotifications={ourNotifications} />
          </Route>
          <Route path="/my/notification/all">
            <AllNotifications ourNotifications={ourNotifications} />
          </Route>
          <Route path="/my/notification/interactions">
            <Interactions ourNotifications={ourNotifications} />
          </Route>
          <Route path="/my/notification/liked">
            <Liked ourNotifications={ourNotifications} />
          </Route>
          <Route path="/my/notification/subscribed">
            <Subscribed ourNotifications={ourNotifications} />
          </Route>
          <Route path="/my/notification/tipped">
            <Tipped ourNotifications={ourNotifications} />
          </Route>
          <Route path="/my/notification/promotions">
            <Promotions ourNotifications={ourNotifications} />
          </Route>
        </Switch>
      </div>
    </div>
  );
}
