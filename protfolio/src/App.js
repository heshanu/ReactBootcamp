import React, { Component } from "react";
import "./App.css";
import Projects from "../src/projects";
import SocialProfilesA from "../src/socialProfilesA";
import Profile from "./assets/profile.png";

class App extends Component {
  state = { displayBio: false };
  // constructor() {
  //   super();
  //   this.state = { displayBio: false };
  //   this.toggleDisplayBio = this.toggleDisplayBio.bind(this);
  // }

  toggleDisplayBio = () => {
    this.setState({ displayBio: !this.state.displayBio });
  };

  render() {
    var imgS={
        width:200,height:200,borderRadius:100
    }
    return (
      <div>
        <img alt="" src={Profile} style={imgS}/>
        <p>React</p>

        {this.state.displayBio ? (
          <div>
            <p>FUCK u</p>
            <button onClick={this.toggleDisplayBio}>Read More</button>
          </div>
        ) : (
          <div>
            <button onClick={this.toggleDisplayBio}>Read More</button>
          </div>
        )}

        <hr />
        <Projects />
        <hr />
        <SocialProfilesA />
      </div>
    );
  }
}

export default App;
