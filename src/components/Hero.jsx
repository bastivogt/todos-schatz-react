import React, { Component } from "react";

export default class Hero extends Component {
  render() {
    return (
      <>
        <div
          className={"h-100 p-5 border rounded-3 mb-4 mt-4 text-white bg-dark"}
        >
          <div className="d-flex flex-row justify-content-center align-items-center">
            {this.props.children}
          </div>
        </div>
      </>
    );
  }
}
