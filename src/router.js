import React from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import App from "./App";
import Admin from "./admin";
import Common from "./common";
import Login from "./pages/login";
import Home from "./pages/home";
import Button from "./pages/ui/button";
import Modal from "./pages/ui/modals";
import Loading from "./pages/ui/loadings";
import Notice from "./pages/ui/notice";
import Message from "./pages/ui/messages";
import Tab from "./pages/ui/tabs";
import Gallery from "./pages/ui/gallery";
import Carousel from "./pages/ui/carousel";
import FormLogin from "./pages/form/login";
import FormRegister from "./pages/form/register";
import BasicTable from "./pages/table/basicTable";
import HighTable from "./pages/table/highTable";
import City from "./pages/city";
import Order from "./pages/order";
import OrderDetail from "./pages/order/detail";
import User from "./pages/user";
import BikeMap from "./pages/map/bikeMap";
import Bar from "./pages/echarts/bar";
import Pie from "./pages/echarts/pie";
import Line from "./pages/echarts/line";
import Rich from "./pages/rich";
import Permission from "./pages/permission";
import NoMatch from "./pages/nomatch/NoMatch";

export default class IRouter extends React.Component {
  render() {
    return (
      <HashRouter>
        <App>
          <Switch>
            <Route path="/login" component={Login} />
            <Route
              path="/common"
              render={() => (
                <Common>
                  <Route
                    path="/common/order/detail/:orderId"
                    component={OrderDetail}
                  />
                </Common>
              )}
            />
            <Route
              path="/"
              render={() => (
                <Admin>
                  <Switch>
                    <Route path="/home" component={Home} />
                    <Route path="/ui/buttons" component={Button} />
                    <Route path="/ui/modals" component={Modal} />
                    <Route path="/ui/loadings" component={Loading} />
                    <Route path="/ui/notification" component={Notice} />
                    <Route path="/ui/messages" component={Message} />
                    <Route path="/ui/tabs" component={Tab} />
                    <Route path="/ui/gallery" component={Gallery} />
                    <Route path="/ui/carousel" component={Carousel} />
                    <Route path="/form/login" component={FormLogin} />
                    <Route path="/form/reg" component={FormRegister} />
                    <Route path="/table/basic" component={BasicTable} />
                    <Route path="/table/high" component={HighTable} />
                    <Route path="/city" component={City} />
                    <Route path="/order" component={Order} />
                    <Route path="/user" component={User} />
                    <Route path="/bikeMap" component={BikeMap} />
                    <Route path="/charts/bar" component={Bar} />
                    <Route path="/charts/pie" component={Pie} />
                    <Route path="/charts/line" component={Line} />
                    <Route path="/rich" component={Rich} />
                    <Route path="/permission" component={Permission} />
                    <Redirect to="/home"/>
                    <Route component={NoMatch} />
                  </Switch>
                </Admin>
              )}
            />
          </Switch>
        </App>
      </HashRouter>
    );
  }
}
