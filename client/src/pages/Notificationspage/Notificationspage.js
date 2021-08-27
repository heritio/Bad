import React from "react";
import { Link, Switch, Route, BrowserRouter, NavLink } from "react-router-dom";

import AllNotifications from "./components/AllNotifications";
import Interactions from "./components/Interactions";
import Liked from "./components/Liked";
import Promotions from "./components/Promotions";
import Subscribed from "./components/Subscribed";
import Tipped from "./components/Tipped";
export default function Notificationspage() {
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
          <Route path="/my/notification/" component={AllNotifications} exact />
          <Route path="/my/notification/all" component={AllNotifications} />
          <Route
            path="/my/notification/interactions"
            component={Interactions}
          />
          <Route path="/my/notification/liked" component={Liked} />
          <Route path="/my/notification/subscribed" component={Subscribed} />
          <Route path="/my/notification/tipped" component={Tipped} />
          <Route path="/my/notification/promotions" component={Promotions} />
        </Switch>
      </div>
    </div>
  );
}
