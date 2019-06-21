import React, { Component } from "react";

const divStyle = {
  border: "5px solid black"
};

class Header extends Component {
  render() {
    return (
      <div className="container">
        <div class="d-flex justify-content-between  mb-3">
          <div class="p-2" />
          <div class="p-2">
            <h1>Course Island</h1>
          </div>
          <div class="p-2 ">
            <span class="badge badge-dark">
              <h6>LogIn</h6>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
