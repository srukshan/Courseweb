import React, { Component } from "react";

import Navigation from "./Navigation";
import Header from "./Header";

import Stud_Notification from "./Student/Stud_Notification";
import HomeContent from "./HomeContent";

import Course from "./Courses/Courses";
import myCourse from "./Student/StudentCourses";


import courseLes from "./Student/StudentLessons";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Header /> <br/>
          <div className="row">
            <div className="col-2">
              <Navigation />
            </div>
            <div className="col">
              <Switch>
                <Route path="/home" exact component={HomeContent} />
                <Route path="/" exact component={HomeContent} />
                <Route path="/courses" exact component={Course} />
                <Route path="/notify" exact  component={Stud_Notification} />
                <Route path="/mycourses" exact  component={myCourse} /> 
                <Route path="/stcourse" exact  component={courseLes} />  
              
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}
