// REDUX
import React, { Component } from "react";
import { connect } from "react-redux";
import StatusBar from '../../../components/statusBar';
import PropTypes from 'prop-types';
import site from '../../site/index';
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import AlertToast from '../../../components/alertToast/index';

class App extends Component {
    
    render() {
        const {messenger} = this.props;
        return (
            <Router>
                <div>
                <StatusBar />
                {messenger.active?<AlertToast type={messenger.type} messenger={messenger.messenger}/>:null}
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
App.propTypes = {
    messenger :PropTypes.object,

};
  
const mapSateToProps = store => ({
    messenger: store.site.msn,
});
export default connect(mapSateToProps)(App);