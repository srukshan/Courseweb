import React, { Component } from "react";

export default class Lessons extends Component {
  render() {
    return (
      <div class="container">
        <h2>Subjects</h2>
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
