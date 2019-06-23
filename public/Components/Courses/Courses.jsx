import React, { Component } from "react";
import Axios from "axios";

export default class Courses extends Component {
  constructor() {
    super();
    this.state = {
      courses: []
    };
  }

  componentDidMount() {
    Axios.get("/api/courses").then(data => {
      this.setState({
        courses: data.data
      });
    });
  }

  render() {
    return (
      <div class="container">
        <h2>Courses</h2>
        <p>All the courses are displayed below</p>
        <table class="table table-hover">
          <thead>
            <tr>
              <th>Course Name </th>
            </tr>
          </thead>
          <tbody>
            {this.state.courses.map(cous => {
              return (
                <tr key={cous._id}>
                  <td>{cous.name}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
