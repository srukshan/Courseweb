import React, { Component } from "react";

export default class AssignmentSubmission extends Component {
  render() {
    return (
      <div class="container">
        <h2>Assignment Submissions</h2>
        <p>All the submitted assignments are shown below</p>
        <table class="table table-hover">
          <thead>
            <tr>
              <th>IT Number </th>
              <th colspan="3">Date Submitted</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>I17010122</td>
              <td>2019 / 06/ 23  </td>
              <td><button type="button" class="btn btn-info">Download</button>  </td>
              <td><button type="button" class="btn btn-dark">Add Marks</button>  </td>
            </tr>
            <tr>
              <td>I17010122</td>
              <td>2019 / 06/ 23  </td>
              <td><button type="button" class="btn btn-info">Download</button>  </td>
              <td><button type="button" class="btn btn-dark">Add Marks</button>  </td>
            </tr>
            <tr>
              <td>I17010122</td>
              <td>2019 / 06/ 23  </td>
              <td><button type="button" class="btn btn-info">Download</button>  </td>
              <td><button type="button" class="btn btn-dark">Add Marks</button>  </td>
            </tr>
            <tr>
              <td>I17010122</td>
              <td>2019 / 06/ 23  </td>
              <td><button type="button" class="btn btn-info">Download</button>  </td>
              <td><button type="button" class="btn btn-dark">Add Marks</button>  </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
