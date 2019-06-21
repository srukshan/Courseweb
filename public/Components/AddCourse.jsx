import React, { Component } from "react";

export default class AddCourse extends Component {
  render() {
    return (
      <div>
        <form>
          <h2>Add New Course</h2>
          <div className="form-group">
            <label>Course Name:</label>
            <input
              type="courseName"
              class="form-control"
              id="name"
              placeholder="Enter course name"
              name="courseName"
            />
          </div>
          <div className="form-group">
            <label>Course ID:</label>
            <input
              type="courseID"
              class="form-control"
              id="name"
              placeholder="Enter course ID"
              name="courseID"
            />
          </div>

          <label>Instructors: </label>
          <div className="dropdown">
            <button
              type="button"
              className="btn dropdown-toggle"
              data-toggle="dropdown"
            >
              Instructor Name: 
            </button>
            <div className="dropdown-menu">
              <a className="dropdown-item" href="#">
                Instructor 01
              </a>
              <a className="dropdown-item" href="#">
                Instructor 02 
              </a>
            </div>
          </div>

          <button type="submit" class="btn btn-primary">
            Add New Course
          </button>
        </form>
      </div>
    );
  }
}
