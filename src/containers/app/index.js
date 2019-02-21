import React, { Component } from "react";
import { Provider } from "react-redux";
import Store from "./redux/store";

// COMPONENTS
import Content from "./content";


class Routes extends Component {
  render() {

    return (
        <Provider store={Store}>
          <Content />
        </Provider>
    );
  }
}

export default Routes;