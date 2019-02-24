// REDUX
import React, { Component } from "react";
import PropTypes from 'prop-types';
import StatusBar from '../../../components/statusBar';

import site from '../../site/index';
import register from '../../register/index';
import login from '../../login/index';
import errorNotFound from '../../errosPages/errorNotFound';
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import AlertToast from '../../../components/alertToast/index';
// REDUX
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { clearAlert } from "./redux/appAction";

class App extends Component {
    
    render() {
        const {messenger} = this.props;
        return (
            <Router>
                <div>
                    <StatusBar />
                    {messenger.active?<AlertToast  type={messenger.type} messenger={messenger.messenger}/>:null}
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

App.propTypes = {
    messenger :PropTypes.object,

};

const mapSateToProps = store => ({
    messenger: store.site.msn,

});

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            clearAlert
        },
        dispatch
    );

export default connect(
    mapSateToProps,
    mapDispatchToProps
)(App);