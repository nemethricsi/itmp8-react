import React, { Fragment } from "react";
import "./styles.css";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import LegitarsasagokOldal from "./pages/LegitarsasagokOldal";
import LegitarsasagOldal from "./pages/LegitarsasagOldal";
import IndexOldal from "./pages/IndexOldal";
import RepterekOldal from "./pages/RepterekOldal";
import KesesekOldal from "./pages/KesesekOldal";

export default function App() {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route exact path="/">
            <IndexOldal />
          </Route>
          <Route exact path="/repterek">
            <RepterekOldal />
          </Route>
          <Route exact path="/kesesek">
            <KesesekOldal />
          </Route>
          <Route exact path="/legitarsasagok">
            <LegitarsasagokOldal />
          </Route>
          <Route path="/:legitarsasagUrl">
            <LegitarsasagOldal />
          </Route>
        </Switch>
      </Router>
    </Fragment>
  );
}
