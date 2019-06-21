import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

class Navigation extends Component {
  render() {
    return (
      // <Router>
        <ul class="list-group">

          <Link to={"/home"}>
            <li class="list-group-item">Home</li>
          </Link>

          <Link to={"/notify"}>
            <li class="list-group-item ">Notification</li>
          </Link>

          <Link to={"/courses"}>
            <li class="list-group-item ">Courses</li>
          </Link>

          <Link to={"/mycourses"}>
            <li class="list-group-item ">My Courses</li>
          </Link>

          <li class="list-group-item">Second item</li>
          <li class="list-group-item">Third item</li>
          <li class="list-group-item">Active item</li>
          <li class="list-group-item">Second item</li>
          <li class="list-group-item">My Profile</li>
        </ul>
        
    );
  }
}

export default Navigation;
