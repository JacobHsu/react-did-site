import React from "react";
import { Route, Switch } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import App from "../components/AppContainer";

import history from "../utils/history";

export default () => (
    <ConnectedRouter history={history}>
        <Switch>
            <Route path="/" exact render={() =>
            <App>
                
            </App>} />
        </Switch>
    </ConnectedRouter>
)