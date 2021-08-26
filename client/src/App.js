import React from "react";
import "./style/app.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DesktopHeader from "./components/header/DesktopHeader";
import MobileHeader from "./components/header/MobileHeader";

import HomepageContainer from "./pages/Homepage/HomepageContainer";
import Notificationspage from "./pages/Notificationspage/Notificationspage";
export default function App() {
  return (
    <div className="App">
      <div className="navbar">
        <DesktopHeader />
        <MobileHeader />
      </div>

      <Router className="main">
        <Route exact path="/">
          <HomepageContainer />
        </Route>
        <Route exact path="/notification">
          <Notificationspage />
        </Route>
      </Router>
    </div>
  );
}
