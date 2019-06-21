import React, { Component } from "react";

const divStyle = {
  border: "5px solid black"
};

class Header extends Component {
  render() {
    return (
      <div className="container">
        <div class="d-flex justify-content-center" style={divStyle}>
            <h1>My Courses</h1>
        </div>
      </div>
    );
  }
}

export default Header;
