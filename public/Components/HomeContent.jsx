import React, { Component } from "react";
import logo  from "../Images/HomeImg.png"
const divStyle = {
    
  };

class HomeContent extends Component {
    
    
  render() {
    return (
      <div className="container" >
          <img src={logo} alt="Trulli" width="500" height="500"></img>
      </div>
    );
  }
}

export default HomeContent;
