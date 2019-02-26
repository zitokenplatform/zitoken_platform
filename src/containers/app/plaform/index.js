
import React, { Component } from "react";
import PropTypes from 'prop-types';
import StatusBar from '../../../components/statusBar';

import game from '../../game/index';

import errorNotFound from '../../errosPages/errorNotFound';
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import AlertToast from '../../../components/alertToast/index';
// REDUX
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

class Platform extends Component {
    
    render() {
        const {messenger} = this.props;
        return (
            <Router>
                <div>
                    <StatusBar menuLogin />
                    {messenger.active?<AlertToast  type={messenger.type} messenger={messenger.messenger}/>:null}
                    <Switch>
                        {/* INSIDE ROUTES */}
                        <Route path="/" exact={true} component={game} />                    

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

Platform.propTypes = {
    messenger :PropTypes.object,

};

const mapSateToProps = store => ({
    messenger: store.plaform.msn,

});

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
        },
        dispatch
    );

export default connect(
    mapSateToProps,
    mapDispatchToProps
)(Platform);