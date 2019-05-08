import React, { Component } from "react";
import PropTypes from "prop-types";

const Button = props => (
  <button onClick={props.onClick}>{this.props.children}</button>
);

Button.defaultProps = {
  children: "Salvar"
};

Button.PropTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.string
};

export default Button;
