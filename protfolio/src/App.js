import React, { Component } from "react";
import "./App.css";
import Projects from "../src/projects";
import SocialProfilesA from "../src/socialProfilesA";

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
    return (
      <div>
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
        <SocialProfilesA/>
      </div>
    );
  }
}

export default App;
