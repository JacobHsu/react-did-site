import React from "react";
import { Route, Switch } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import App from "../components/AppContainer";

import history from "../utils/history";
import { registration } from "../constants/config";
import Home from "../components/Home";
import Registration from "../components/Registration";

// const publicPath = process.env.NODE_ENV === 'production' ? '/react-did-site' : '/'
const publicPath = '/react-did-site' // development & production

export default () => (
    <ConnectedRouter history={history}>
        <Switch>
            <Route path={publicPath} exact render={() =>
                <App>
                    <Home />
                </App>} />
            <Route path={registration.path} render={() =>
                <App serviceId={registration.serviceId}>
                    <Registration />
                </App>} />
        </Switch>
    </ConnectedRouter>
)