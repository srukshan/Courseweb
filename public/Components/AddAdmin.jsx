import React, { Component } from "react";

export default class AddAdmin extends Component {
  render() {
    return (
      <div>
        <form>
          <h2>Create A User</h2>
          <div className="form-group">
            <label>Name:</label>
            <input
              type="email"
              class="form-control"
              id="name"
              placeholder="Enter name"
              name="name"
            />
          </div>

          <label>User Type:</label>
          <div className="dropdown">
            <button
              type="button"
              className="btn dropdown-toggle"
              data-toggle="dropdown"
            >
              Select User Type
            </button>
            <div className="dropdown-menu">
              <a className="dropdown-item" href="#">
                Admin
              </a>
              <a className="dropdown-item" href="#">
                Instructor
              </a>
            </div>
          </div>

          <div className="form-group">
            <label>Username:</label>
            <input
              type="email"
              class="form-control"
              id="username"
              placeholder="Enter username"
              name="username"
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              type="email"
              class="form-control"
              id="password"
              placeholder="Enter password"
              name="password"
            />
          </div>
          <button type="submit" class="btn btn-primary">
            Create User
          </button>
        </form>
      </div>
    );
  }
}
