import React, { Component } from "react";

const Joke = ({joke}) => {
  const { userId,title } = joke;
  var JokeStyle={margin:20};
  return (
    <p style={JokeStyle}>
      <em>{userId}</em>--{title}
    </p>
  );
};
class Jokes extends Component {
  constructor(props) {
    super(props);
    this.onJokes = this.onJokes.bind(this);
  }
  state = { joke: {}, jokes: [] };

  componentDidMount() {
    //get api
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      /*.then(response=>console.log(response))*/
      .then((json) => this.setState({ joke: json }));
  }

  onJokes = () => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => this.setState({ jokes: json }));
  };

  render() {
    //json response setstate
   // const { userId, title } = this.state.joke;
    //const { userId, title } = this.state.joke1;

    return (
      <div>
        <h2>Highlighted Jokes</h2>
        <Joke joke={this.state.joke}/>
        <hr />
        <button onClick={this.onJokes}>more jokes</button>
        {
        this.state.jokes.map(joke=> {
          return <Joke key={joke.id} joke={joke}/>
        })
        }
      </div>
    );
  }
}

export default Jokes;
