import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { render } from "react-dom";

import Button from "./Button";

class App extends Component {
  state = {
    counter: 0
  };

  componentDidMount() {}

  shouldComponentUpdate(nextProps, nextState) {}

  componentDidUpdate(prevProps, prevState) {}

  componentWillUnmount() {}

  handleClick = () => {
    this.setState({
      counter: this.state.counter + 1
    });
  };

  render() {
    return (
      <Fragment>
        <h1>Hello world</h1>
        <h2>{this.state.counter}</h2>
        <Button onClick={this.handleClick}>Enviar</Button>
      </Fragment>
    );
  }
}

render(<App />, document.getElementById("app"));
