import React, { Component } from "react";

export default class Stud_Notification extends Component {
  render() {
    return (
      <div>
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Course Name : Application Framework</h4>
            <p class="card-text">
              This Course contain 10 lectures. If you wish to enrol click on the button given
            </p>
            <a href="#" class="btn btn-info">
              Enroll Course
            </a>
          </div>
        </div>
        <br></br>
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Course Name : Application Framework</h4>
            <p class="card-text">
              This Course contain 10 lectures. If you wish to enrol click on the button given
            </p>
            <a href="#" class="btn btn-info">
              Enroll Course
            </a> 
            <a href="#" class="btn btn-danger">
              Cancel
            </a>
          </div>
        </div>
      </div>
    );
  }
}
