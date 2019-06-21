import React, { Component } from "react";

export default class Assignments extends Component {
  render() {
    return (
      <div class="container">
        <h2>Assignments</h2>
        <p>All the assigments are displayed below</p>
        <table class="table table-hover">
          <thead>
            <tr>
              <th>Assignment Name </th>
              <th>Due Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Assignment 01</td>
              <td>2019 - 12 - 21 00:00:00 </td>
            </tr>
            <tr>
              <td>Assignment 02</td>
              <td>2019 - 12 - 21 00:00:00 </td>
            </tr>
            <tr>
              <td>Assignment 03</td>
              <td>2019 - 12 - 21 00:00:00 </td>
            </tr>
            <tr>
              <td>Assignment 04</td>
              <td>2019 - 12 - 21 00:00:00 </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
