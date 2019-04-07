import React, { Component } from "react";

// REDUX
import { connect } from "react-redux";
import { bindActionCreators } from "redux"; 

import App from "./site/index";

import Platform from "./plaform/index";

import PropTypes from "prop-types";

class Content extends Component {
    constructor() {
      super();
      this.state = {
        content: undefined,
        type: undefined
      };
    }
    changeContent = (content, type) => {
        this.setState({ content, type });
    }
    renderContent = () => {
        const { user } = this.props;

        try {
            if(user.token !== undefined)
              return this.changeContent(<App />, "site");      
            else
              return this.changeContent(<Platform />, "platform");  
        
        } catch (error) {
        }
      };
    componentDidMount = ()=> {    
        this.renderContent();
    }
    render() {
        let { content } = this.state;        
        return <div>{content}</div>;;
    }
    
}  
Content.propTypes = {
  user : PropTypes.object,
};
const mapSateToProps = store => ({
  user: store.plaform.user
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
)(Content);