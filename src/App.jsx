import React, { Component } from "react";

import Hero from "./components/Hero";
import Card from "./components/Card";
import TodoAdd from "./components/TodoAdd";
import IF from "./components/IF";
import TodoList from "./components/TodoList";
import TodoItem from "./components/TodoItem";
import Navbar from "./components/Navbar";

import store from "./store/storeObj";

export default class App extends Component {
  constructor() {
    super();

    store.todoStore.onUpdate = () => {
      store.todoStore.save();
      this.forceUpdate();
    };
  }

  componentDidMount() {
    //store.todoStore.setTodos(this.loadTodos());
    store.todoStore.setTodos(store.todoStore.load());
  }

  render() {
    return (
      <>
        <Navbar />
        <div className="container">
          <Hero className="mt-4">
            <h1>Todos</h1>
            <img src="/favorite.svg" />
          </Hero>

          <TodoAdd></TodoAdd>

          <IF
            condition={store.todoStore.activeTodos.length !== 0}
            THEN={
              <Card header="Nicht erledigte Todos">
                <TodoList>
                  {store.todoStore.activeTodos.map((todo) => {
                    return <TodoItem key={todo.id} todo={todo} />;
                  })}
                </TodoList>
              </Card>
            }
          />

          <IF
            condition={store.todoStore.doneTodos.length !== 0}
            THEN={
              <Card header="Erledigte Todos">
                <TodoList>
                  {store.todoStore.doneTodos.map((todo) => {
                    return <TodoItem key={todo.id} todo={todo} />;
                  })}
                </TodoList>
              </Card>
            }
          />
        </div>
      </>
    );
  }
}
