import React, { Component ,useEffect} from "react";
import "./App.css";
const API_ADDRESS='https://api.spotify.com';
const TOKEN='c6fe68460d694ff9915b0045b9607dfb';

class App extends Component {
  state = {
    artistQuery: "",
  };

  constructor(props) {
    super(props);
    this.updateArtistListQuery = this.updateArtistListQuery.bind(this);
    this.searchArtist = this.searchArtist.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  //user type input and chnage
  updateArtistListQuery = (event) => {
    this.setState({ artistQuery: event.target.value });
  };

  searchArtist = () => {
    this.state;
    console.log("this.state", this.state);

    /*
    fetch(`${API_ADDRESS}/artist/${this.state.artistQuery}`)
    .then(response=>response.json())
    .then(json=>{console.log('json',json)});
    */

      getData('token').then(res => {
        const res_token = res;
        console.log('token response: ', res_token);
        setToken(res_token);
      });
    };
  

      fetch(`${API_ADDRESS}/artist/${this.state.artistQuery}`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization':TOKEN,
        },
      })
        .then(response => response.json())
        .then(json => {
          console.log('token auth: ' + TOKEN);
          setData(json);
          
        })
        .catch(error => console.error(error));
    }

  handleKeyPress = (event) => {
    if (event.key === "Enter") {
      this.searchArtist();
    }
  };

  render() {
    var AppStyle = {
      borderRadius: 20,
    };
    return (
      <div>
        <h1>Music Master</h1>
        <input
          onKeyPress={this.handleKeyPress}
          onChange={this.updateArtistListQuery}
          placeholder="Search artist"
        />
        <button style={AppStyle} onClick={this.searchArtist}>
          Search
        </button>
        <button></button>
      </div>
    );
  }
}

export default App;
