import React, { Component } from "react";

export default class Card extends Component {
  render() {
    return (
      <div className="card mb-4">
        <h5 className="card-header">{this.props.header}</h5>
        <div className="card-body">{this.props.children}</div>
      </div>
    );
  }
}

Card.defaultProps = {
  header: "Header",
  children: null,
};
