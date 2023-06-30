import React, { Component } from "react";

export default class IF extends Component {
  render() {
    return <>{this.props.condition ? this.props.THEN : this.props.ELSE}</>;
  }
}

IF.defaultProps = {
  condition: true,
  THEN: null,
  ELSE: null,
};
