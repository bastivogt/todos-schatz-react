import React, { Component } from "react";
import Card from "./Card";

import store from "../store/storeObj";

export default class TodoAdd extends Component {
  state = {
    title: "",
  };
  constructor() {
    super();
    this.addTodoHandler = this.addTodoHandler.bind(this);
    this.inputChangeHandler = this.inputChangeHandler.bind(this);
    this.inputKeyUpHandler = this.inputKeyUpHandler.bind(this);
  }

  addTodoHandler() {
    if (this.state.title !== "") {
      store.todoStore.addTodo(this.state.title);
      if (typeof this.props.onAddTodo === "function")
        this.props.onAddTodo({ title: this.state.title });
      this.setState({
        title: "",
      });
    }
  }

  inputChangeHandler(evt) {
    this.setState({
      title: evt.target.value,
    });
  }

  inputKeyUpHandler(evt) {
    if (evt.key === "Enter") {
      this.addTodoHandler();
    }
  }

  render() {
    return (
      <Card header={this.props.title}>
        <div className="input-group">
          <input
            type="text"
            placeholder={this.props.placeholder}
            className="form-control"
            value={this.state.title}
            onChange={this.inputChangeHandler}
            onKeyUp={this.inputKeyUpHandler}
          />
          <button className="btn btn-primary" onClick={this.addTodoHandler}>
            {this.props.label}
          </button>
        </div>
      </Card>
    );
  }
}

TodoAdd.defaultProps = {
  title: "Todo hinzufügen",
  label: "Todo hinzufügen",
  placeholder: "Todo",
  onAddTodo: null,
};
