import React, { Component } from "react";

export default class StudentLessons extends Component {
  render() {
    return (
      <div class="container">
        <h2>Subjects</h2>
        <p>Under the specified Course</p>
          <div class="col-md-12 text-right">
         
    		    <button type="button" class="btn btn-warning custom-button-width .navbar-right">View Assignmnets</button>
           
    	    </div>
          <br></br>
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
