import React, { Component } from "react";

export default class Stud_Notification extends Component {
  constructor() {
    super();
    this.state = {
      notifications: []
    };
  }
  componentDidMount() {
    Axios.get("/api/notification").then(data => {
      this.setState({
        notifications: data.data
      });
    });
  }

  render() {
    return (
      <div>
        {this.state.notifications.map(notifications => {
          return (
            <div class="card">
              <div class="card-body">
                <h4 class="card-title">
                  Notification Title : {notifications.title}
                </h4>
                <h5>Notification Content</h5>
                <p class="card-text">{notifications.content}</p>
                <p class="card-text">{notifications.timeStamp}</p>
                <a href="#" class="btn btn-info">
                  Enroll Course
                </a>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
