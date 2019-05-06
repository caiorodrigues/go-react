import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { render } from "react-dom";

class Button extends Component {
  static defaultProps = {
    children: "Salvar"
  };

  static propTypes = {
    onClick: PropTypes.func.isRequired,
    children: PropTypes.string
  };

  render() {
    return (
      <a onClick={this.props.onClick} style={{ background: "#F00" }}>
        {this.props.children}
      </a>
    );
  }
}

class App extends Component {
  handleClick() {
    alert("Botao clicado");
  }
  render() {
    return (
      <Fragment>
        <h1>Hello world</h1>
        <Button
          onClick={() => {
            alert("Button 1");
          }}
        />
        <Button onClick={this.handleClick}>Enviar</Button>
      </Fragment>
    );
  }
}

render(<App />, document.getElementById("app"));
