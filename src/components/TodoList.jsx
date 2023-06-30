import React, { Component } from "react";

export default class TodoList extends Component {
  render() {
    return <ul className="list-group">{this.props.children}</ul>;
  }
}

TodoList.defaultProps = {
  children: null,
};
