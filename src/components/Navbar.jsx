import React, { Component } from "react";
import store from "../store/storeObj";

export default class Navbar extends Component {
  constructor() {
    super();
    this.resetHandler = this.resetHandler.bind(this);
    this.infoHandler = this.infoHandler.bind(this);
  }

  resetHandler() {
    if (window.confirm("Willst du wirklich alle Todos resetten?")) {
      store.todoStore.setTodos([]);
    }
  }

  infoHandler() {
    alert("Ich liebe Dich. <3");
  }

  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarToggler"
              aria-controls="navbarToggler"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <a
              className="navbar-brand"
              href="#"
              onClick={(evt) => evt.preventDefault()}
            >
              <img src="/done.svg" />
            </a>
            <div className="collapse navbar-collapse" id="navbarToggler">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link" href="#" onClick={this.resetHandler}>
                    Reset Todos
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#" onClick={this.infoHandler}>
                    Info
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
  }
}
