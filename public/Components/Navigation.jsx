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

        <Link to={"/studentreg"}>
          <li class="list-group-item ">Register</li>
        </Link>

        <Link to={"/adduser"}>
          <li class="list-group-item ">Add Admin/Instructor</li>
        </Link>

        <Link to={"/addCourse"}>
          <li class="list-group-item ">Add Course</li>
        </Link>
      </ul>
    );
  }
}

export default Navigation;
