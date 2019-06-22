import React, { Component } from "react";
import Axios from "axios";

class AddMarks extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      marks: ""
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
      role: this.state.role
    };
     console.log(JSON.stringify(obj));

    Axios.post("/api/marks/", obj)
      .then(data => {
        console.log("Success", data.data);
      })
      .catch(err => {
        console.log("fail" + err);
      });

    this.setState({
      username: "",
      marks: ""
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
          <h2>Marks</h2>
          <table>
            <tr>
              <td>ITnumber</td>
              <td>Marks</td>
            </tr>
            <tr>
              <td>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter username"
                    onChange={this.handleInputChange}
                    value={this.state.username}
                    name="username"
                  />
                </div>
              </td>
              <td>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter username"
                    onChange={this.handleInputChange}
                    value={this.state.marks}
                    name="marks"
                  />
                </div>
              </td>
            </tr>
          </table>
        </form>
      </div>
    );
  }
}

export default AddMarks;
