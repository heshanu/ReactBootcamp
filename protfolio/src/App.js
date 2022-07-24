import React, { Component } from "react";
import "./App.css";
import Projects from "../src/projects";
import SocialProfilesA from "../src/socialProfilesA";
import Profile from "./assets/profile.png";
import Title from "./Title";

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
    var imgS = {
      width: 200,
      height: 200,
      borderRadius: 100,
    };
    return (
      <div>
        <img alt="" src={Profile} style={imgS} />
        <p>React</p>

        <p>My name is Heshan</p>
        <Title />
        <br />
        {this.state.displayBio ? (
          <div>
            <p>FUCK u</p>
            <button onClick={this.toggleDisplayBio}>Read More</button>
          </div>
        ) : (
          <div>
            <button onClick={this.toggleDisplayBio}>Read Less</button>
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
