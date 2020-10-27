import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import { TVMazeProvider } from "./contexts";
import { LandingPage } from "./pages";

import "./styles/index.scss";

export const App = () => (
  <Router basename="/">
    <TVMazeProvider>
      <Switch>
        <Route component={LandingPage} exact path="/" />
        <Route render={() => <Redirect to="/" />} />
      </Switch>
    </TVMazeProvider>
  </Router>
);
