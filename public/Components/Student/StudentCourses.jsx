import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";


export default class StudentCourses extends Component {
  render() {
    return (
      <div class="container">
        <h2>Enrolled Courses</h2>
        <p>All the enrolled courses are displayed below</p>
        <table class="table table-hover">
          <thead>
            <tr>
              <th>Course Name </th>
              <th>Instructor Name</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <Link to={"/stcourse"}>
                <td>Application Frameworks</td>
              </Link>
              
              <td>Kushira </td>
            </tr>
            <tr>
              <td>Software Architecture</td>
              <td>Chathura</td>
            </tr>
            <tr>
              <td>Software Quality Management</td>
              <td>Samantha</td>
            </tr>
            <tr>
              <td>Distributed System</td>
              <td>Darshana</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
