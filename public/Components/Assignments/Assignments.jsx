import React, { Component } from "react";
import Axios from "axios";

export default class Assignments extends Component {
  constructor() {
    super();
    this.state = {
      assesments: []
    };
  }

  componentDidMount() {
    Axios.get("/api/assignment").then(data => {
      this.setState({
        assesments: data.data
      });
    });
  }

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
            {this.state.assesments.map(asses => {
              return (
                <tr key={asses._id}>
                  <td>{asses.name}</td>
                  <td>{asses.dueDate}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
