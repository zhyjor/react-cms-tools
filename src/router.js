import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import Admin from "./admin";
import Login from "./pages/login";
import Button from "./pages/ui/button";
import NoMatch from "./pages/nomatch/NoMatch";

export default class IRouter extends React.Component {
  render() {
    return (
      <HashRouter>
        <App>
          <Switch>
            <Route path="/login" component={Login} />
            <Route
              path="/"
              render={() => (
                <Admin>
                  <Route path="/ui/buttons" component={Button} />
                  <Route component={NoMatch} />
                </Admin>
              )}
            />
          </Switch>
        </App>
      </HashRouter>
    );
  }
}
