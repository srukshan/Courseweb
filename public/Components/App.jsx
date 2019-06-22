import React, { Component } from "react";

import Navigation from "./Navigation";
import Header from "./Header";

import Stud_notify from "./Student/Stud_Notification";
import HomeContent from "./HomeContent";

import Course from "./Courses/Courses";
import myCourse from "./Student/StudentCourses";

import courseLes from "./Student/StudentLessons";
import asmList from "./Assignments/Assignments";

import addStd from "./Student/Register";
import adduser from "./AddAdmin";

import Login from "./Login";


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
                <Route path="/notify" exact  component={Stud_notify} />
                <Route path="/mycourses" exact  component={myCourse} /> 
                <Route path="/stcourse" exact  component={courseLes} />  
                <Route path="/asgList" exact  component={asmList} />  
                <Route path="/studentreg" exact  component={addStd} />  
                <Route path="/adduser" exact  component={adduser} />  
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}
