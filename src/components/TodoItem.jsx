import React, { Component } from "react";
import store from "../store/storeObj";

export default class TodoItem extends Component {
  constructor() {
    super();
    this.deleteTodoHandler = this.deleteTodoHandler.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
  }

  generateID() {
    return `${this.props.todo.id}-${this.props.todo.title}`;
  }

  getDone() {
    return store.todoStore.getTodoByID(this.props.todo.id).done;
  }

  deleteTodoHandler() {
    console.log("TodoItem - deleteTodoHandler");
    if (
      window.confirm(
        `Willst du wirklich [Todo ID: ${this.props.todo.id}] löschen?`
      )
    ) {
      store.todoStore.removeTodo(this.props.todo.id);
      if (typeof this.props.onDelete === "function")
        this.props.onDelete({ id: this.props.todo.id });
    }
  }

  changeHandler(evt) {
    console.log("TodoItem - ChangeHandler", evt);
    store.todoStore.changeDone(this.props.todo.id, evt.target.checked);
    if (typeof this.props.onChangeDone === "function")
      this.props.onChangeDone({
        id: this.props.todo.id,
        done: evt.target.checked,
      });
  }
  render() {
    return (
      <div className="todo-item">
        <li className="list-group-item d-flex align-items-center">
          <div className="w-100 d-flex align-items-center">
            <div>
              <input
                className="form-check-input me-1"
                type="checkbox"
                checked={this.props.todo.done}
                onChange={this.changeHandler}
                id={this.generateID()}
              />
            </div>
            <label
              className="form-check-label w-auto"
              htmlFor={this.generateID()}
              style={{
                textDecoration: this.getDone() ? "line-through" : "none",
                cursor: "pointer",
              }}
            >
              {this.props.todo.title}
            </label>
          </div>
          <div className="flex-shrink-1">
            <button
              className="btn btn-sm btn-close"
              onClick={this.deleteTodoHandler}
            ></button>
          </div>
        </li>
      </div>
    );
  }
}

/**
 * props
 * todo
 */

TodoItem.defaultProps = {
  todo: null,
  onDelete: null,
  onChangeDone: null,
};
