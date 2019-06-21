import React, { Component } from "react";

export default class Notification extends Component {
  render() {
    return (
      <div>
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Course Name : Application Framework</h5>
            <p class="card-text">
              You have being assigned to Course Application Frameworks. To
              accept the click the following button
            </p>
            <a href="#" class="btn btn-primary">
              Accept Course
            </a>
          </div>
        </div>
        <br></br>
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Course Name : Software Architecture</h5>
            <p class="card-text">
              You have being assigned to Course     Software Architecture. To
              accept the click the following button
            </p>
            <a href="#" class="btn btn-primary">
              Accept Course
            </a>
          </div>
        </div>
      </div>
    );
  }
}
