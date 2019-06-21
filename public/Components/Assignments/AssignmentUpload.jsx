import React, { Component } from "react";

export default class AssignmentUpload extends Component {
  render() {
    return (
      <div class="container">
        <h2>Uploaded Assignments</h2>
        <p>All the assigments uploaded in the particular subject are displayed below</p>
        <h3>Assignment Name</h3>
        <table class="table table-hover">
          <thead>
            <tr>
              <th>IT number  </th>
              <th>Submitted Time</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>IT17010122</td>
              <td>2019 - 12 - 21 12:12:00 </td>
            </tr>
            <tr>
              <td>IT17010122</td>
              <td>2019 - 12 - 23 13:00:00 </td>
            </tr>
            <tr>
              <td>IT17010122</td>
              <td>2019 - 12 - 21 23:54:00 </td>
            </tr>
           
          </tbody>
        </table>
      </div>
    );
  }
}
