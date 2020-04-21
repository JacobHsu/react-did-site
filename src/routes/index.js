import React from "react";
import { Route, Switch } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import App from "../components/AppContainer";

import history from "../utils/history";
import Home from "../components/Home";

// const publicPath = process.env.NODE_ENV === 'production' ? '/react-did-site' : '/'
const publicPath = '/react-did-site' // development & production

export default () => (
    <ConnectedRouter history={history}>
        <Switch>
            <Route path={publicPath} exact render={() =>
            <App>
                <Home />
            </App>} />
        </Switch>
    </ConnectedRouter>
)