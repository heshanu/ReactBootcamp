import React, { Component } from "react";
import SocailProfiles from "./data/socailProfile";

class SocialProfile extends Component {
  render() {
    const { name, media } = this.props.profile;
    var socialStyle = {
      width: 35,
      height: 35,
    };

    return (
      <span>
        <a>
        <img src={media} alt="profile" style={socialStyle} />
      </a>
      </span>
    );
  }
}

class SocialProfilesA extends Component {
  render() {
    return (
      <div>
        <h1>Follow Us</h1>
        {SocailProfiles.map((socailProfile) => {
          return (
            <SocialProfile key={socailProfile.id} profile={socailProfile} />
          );
        })}
      </div>
    );
  }
}

export default SocialProfilesA;
