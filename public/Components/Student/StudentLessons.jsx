import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

export default class StudentLessons extends Component {
  render() {
    return (
      <div class="container">
        <div class="d-flex justify-content-between mb-3">
          <div class="p-2">
            <h2>Subjects</h2>
          </div>
          <div class="p-2" />
          <div class="p-2">
            <span class="badge badge-light">
              <Link to={"/asgList"}>
                <h5>Assingments</h5>
              </Link>
            </span>
          </div>
        </div>

        <p>Under the specified Course</p>
        <table class="table table-hover">
          <thead>
            <tr>
              <th>Lesson Name </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Lesson 01</td>
            </tr>
            <tr>
              <td>Lesson 02</td>
            </tr>
            <tr>
              <td>Lesson 03</td>
            </tr>
            <tr>
              <td>Lesson 04</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
