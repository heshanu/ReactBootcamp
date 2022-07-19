import React, { Component } from "react";

class Jokes extends Component {
  constructor(props) {
    super(props);
    this.onJokes = this.onJokes.bind(this);
  }
  state = { joke: {}, jokes: [] };

  componentDidMount() {
    //get api
    fetch("https://swapi.dev/api/people/1")
      .then((response) => response.json())
      /*.then(response=>console.log(response))*/
      .then((json) => this.setState({ joke: json }));
  }

  onJokes = () => {
    fetch("https://swapi.dev/api/people")
      .then((response) => response.json())
      .then((json) => this.setState({ jokes: json }));
  };

  render() {
    //json response setstate
    const { gender, hair_color } = this.state.joke;

    return (
      <div>
        <h2>Highlighted Jokes</h2>
        <p>
          <em>{gender}</em>--{hair_color}
        </p>
        <hr />

        <button onClick={this.onJokes}>more jokes</button>

        {
        this.state.jokes.map((joke) => {
          const { id, gender, hair_color } = joke;
          return (
            <p key={id}>
              {gender}
              {hair_color}
            </p>
          );
        })}
      </div>
    );
  }
}

export default Jokes;
