// REDUX
import React, { Component } from "react";
import { connect } from "react-redux";
import StatusBar from '../../../components/statusBar';

import site from '../../site/index';
import register from '../../register/index';
import login from '../../login/index';
import errorNotFound from '../../errosPages/errorNotFound';
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

class App extends Component {

    render() {
        return (
            <Router>
                <div>
                    <StatusBar />
                    <Switch>
                        {/* INSIDE ROUTES */}
                        <Route path="/" exact={true} component={site} />
                        <Route path="/register" exact={true} component={register} />
                        <Route path="/login" exact={true} component={login} />

                        {/* ERRORS PAGE */}
                        <Route path="/404" component={errorNotFound} />
                        <Route path="/500" component={errorNotFound} />
                        <Route path={"**"} component={errorNotFound} />
                    </Switch>
                </div>
            </Router>
        );
    }
}


const mapSateToProps = store => ({
});
export default connect(mapSateToProps)(App);