import React, { Component } from "react";

const TITILES = ["a software engineer", "a music lover"];

class Title extends Component {
  state = { titleIndex: 0, fadeIn: true };

  //lifecycle
  componentDidMount() {
   this.timeout=setTimeout(() => this.setState({ fadeIn: false }), 2000);
    this.animatedTitles();
  }

  componentWillUnmount() {

    clearInterval(this.titleInterval);
    clearTimeout(this,this.timeout);
  }

  animatedTitles = () => {
    this.titleInterval = setInterval(() => {
      const titleIndex = (this.state.titleIndex + 1) % TITILES.length;
      this.setState({ titleIndex, fadeIn: true });
      setTimeout(() => this.setState({ fadeIn: false }), 2000);
    }, 4000);
  };

  render() {
    const { fadeIn, titleIndex } = this.state;
    const title = TITILES[this.state.titleIndex];

    return (
      <p className={fadeIn ? "title-fade-in" : "title-fade-out"}>I'm {title}</p>
    );
  }
}

export default Title;
