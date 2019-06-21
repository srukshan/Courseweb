import React, { Component } from "react";

export default class Courses extends Component {
  render() {
    return (
      <div class="container">
        <h2>Courses</h2>
        <p>All the courses are displayed below</p>
        <table class="table table-hover">
          <thead>
            <tr>
              <th>Course Name </th>
              <th>Instructor Name</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Application Frameworks</td>
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
