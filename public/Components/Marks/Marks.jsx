import React, { Component } from "react";

export default class Marks extends Component {
  render() {
    return (
      <div class="container">
        <h2>Marks for a Particular Assignment</h2>
        <p>All the Marks will be displayed below</p>
        <table class="table table-hover">
          <thead>
            <tr>
              <th>IT number </th>
              <th>Marks</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>IT17010122</td>
              <td>85% </td>
            </tr>
            <tr>
              <td>IT17010122</td>
              <td>85% </td>
            </tr>
            <tr>
              <td>IT17010122</td>
              <td>85% </td>
            </tr>
            <tr>
              <td>IT17010122</td>
              <td>85% </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
