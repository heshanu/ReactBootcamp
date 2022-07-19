import React, { Component } from "react";
import PROJECTS from "./data/projects";

class Project extends Component {
  render() {
    const { image, title, describe, link } = this.props.project;
    var projectStyleImg = {
      width: 100,
      height: 50,
    };

    var projectStyle = {
      width: 300,
      height: 300,
      border:10
    };

    return (
      <div style={projectStyle} className="l">
          <br />
          {title}
          <br />
          <img src={image} alt="profile" style={projectStyleImg} />
          <p>{describe}</p>
          <br />
          <a href={link}>{link}</a>
          <hr/>
      </div>
    );
  }
}

class Projects extends Component {
  render() {
    return (
      <div>
        <h2>Highlighted Projects!</h2>
        <div>
          {PROJECTS.map((PROJECT) => {
            return (
              <Project key={PROJECT.id} project={PROJECT} img={PROJECT.link} />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Projects;
