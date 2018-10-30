import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Main from "../router3/Main";
import About from "../router1/About";
import Topic from "../router1/Topic";
import Home from "../router3/Home";

export default class IRouter extends React.Component {
  render() {
    return (
      <Router>
        <Home>
          <Route
            path="/main"
            render={() => (
              <Main>
                <Route path="/main/a" component={About}></Route>
              </Main>
            )}
          />
          <Route path="/about" component={About} />
          <Route path="/topics" component={Topic} />
        </Home>
      </Router>
    );
  }
}
