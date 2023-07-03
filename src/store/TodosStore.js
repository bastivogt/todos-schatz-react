import { Store } from "./Store";

export class TodoStore extends Store {
  constructor() {
    super();
    this.__todos = [];
  }

  get todos() {
    return this.__todos;
  }

  setTodos(value) {
    this.__todos = value;
    this.__fireUpdate();
  }

  get activeTodos() {
    return this.__todos.filter((item) => !item.done);
  }

  get doneTodos() {
    return this.__todos.filter((item) => item.done);
  }

  // getTodoByID
  getTodoByID(id) {
    const index = this.__todos.findIndex((item) => item.id === id);
    return this.__todos[index];
  }

  // addTodo
  addTodo(title) {
    let maxID = 1;
    this.__todos.map((item) => {
      if (maxID <= item.id) {
        maxID = item.id + 1;
      }
    });
    this.__todos.unshift({ id: maxID, title: title, done: false });
    this.__fireUpdate();
  }

  // removeTodo
  removeTodo(id) {
    const index = this.__todos.findIndex((item) => item.id === id);
    this.__todos.splice(index, 1);
    this.__fireUpdate();
  }

  // changeDone
  changeDone(id, done) {
    const index = this.__todos.findIndex((item) => item.id === id);
    this.__todos[index].done = done;
    this.__fireUpdate();
  }

  save() {
    window.localStorage.setItem("TODOS", JSON.stringify(this.__todos));
  }

  load() {
    const todos = JSON.parse(window.localStorage.getItem("TODOS"));
    return todos;
  }
}
