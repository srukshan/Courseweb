import React, { Component } from "react";
import Axios from "axios";

export default class Courses extends Component {
  constructor() {
    super();
    this.state = {
      courses: []
    };
  }
<<<<<<< HEAD
  componentDidMount() {
    Axios.get("/api/course").then(data => {
=======

  componentDidMount() {
    Axios.get("/api/courses").then(data => {
>>>>>>> e22c63c7fe414749f1c2204bd7b20b008f20658e
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
<<<<<<< HEAD
            {this.state.courses.map(cour => {
              return (
                <tr >
                  <td>{cour.name}</td>
=======
            {this.state.courses.map(cous => {
              return (
                <tr key={cous._id}>
                  <td>{cous.name}</td>
>>>>>>> e22c63c7fe414749f1c2204bd7b20b008f20658e
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
