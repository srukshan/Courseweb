import React, { Component } from "react";
import Axios from "axios";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      role: "student",
      fname: "",
      lname: "",
      password: ""
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const obj = {
      username: this.state.username,
      fname: this.state.fname,
      lname: this.state.lname,
      password: this.state.password,
      role: "studuent"
    };
    console.log(JSON.stringify(obj));

    Axios.post("/api/users/", obj)
      .then(data => {
        console.log("Success", data.data);
      })
      .catch(err => {
        console.log("Success" + err);
      });

    this.setState({
      username: "",
      fname: "",
      role: "student",
      lname: "",
      password: ""
    });
  }

  handleInputChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h2>Student</h2>
          <div className="form-group">
            <label>Username:</label>
            <input
              type="text"
              class="form-control"
              placeholder="Enter username"
              onChange={this.handleInputChange}
              value={this.state.username}
              name="username"
            />
          </div>

          <div className="form-group">
            <label>First Name:</label>
            <input
              type="text"
              class="form-control"
              placeholder="Enter first name"
              onChange={this.handleInputChange}
              value={this.state.fname}
              name="fname"
            />
          </div>
          <div className="form-group">
            <label>Last Name:</label>
            <input
              type="text"
              class="form-control"
              placeholder="Enter last name"
              onChange={this.handleInputChange}
              value={this.state.lname}
              name="lname"
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              class="form-control"
              placeholder="Enter password"
              onChange={this.handleInputChange}
              value={this.state.password}
              name="password"
            />
          </div>
          <div className="form-group">
            <input type="submit" value="submit" />
          </div>
        </form>
      </div>
    );
  }
}

export default Register;
