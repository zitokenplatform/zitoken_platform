import React, { Component } from "react";

// REDUX
import { connect } from "react-redux";
import { bindActionCreators } from "redux"; 

import App from "./site/index";

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
        try {
          
            return this.changeContent(<App />, "site");         
        
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