// REDUX
import React, { Component } from "react";
import { connect } from "react-redux";
import StatusBar from '../../../components/statusBar';

import site from '../../site/index';
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
                  
                    {/* ERRORS PAGE */}
                    <Route path="/404" component={site} />
                    <Route path="/500" component={site} />
                    <Route path={"**"} component={site} />
                </Switch>
                </div>
            </Router>
            );
    }
}

  
const mapSateToProps = store => ({
});
export default connect(mapSateToProps)(App);