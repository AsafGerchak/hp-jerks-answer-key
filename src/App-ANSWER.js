import React, { Component } from 'react';
import axios from 'axios';
import WhoItGonnaBe from './WhoItGonnaBe-ANSWER';
import Jerks from './Jerks-ANSWER'
import './App.css';

// API call to hp API to get API info (ist of all wizards) and save to state
// Use form to choose wizard group
// Filter through character list to select wizards from that group and save to a new array
// Filter through THAT array and find spies. Save that new array to state.
// Print list of spies to the page with a .map()

class App extends Component {
  constructor() {
    super();
    this.state = {
      allzards: [],
      shitheads: []
    }
  }

  componentDidMount() {
    axios({
      url: ` https://www.potterapi.com/v1/characters`,
      method: `GET`,
      dataResponse: `json`,
      params: {
        key: `$2a$10$QTTp9tiCR8CNBsj3iA5IR.jJhfdT2FKcAnZsP2gYYGaI27KsGEVwy`
      }
    })
    .then( (res) => {
      console.log(res.data);
      this.setState({
        allzards: res.data
      });
    });
  }

  // Function which will receive user selection from WhoItsGonnaBe component
  getCauldron = (e, cauldronName) => {
    e.preventDefault();
    this.narrowItDown(cauldronName);
  }

  // Pass our chosen cauldron to a function which will narrow our allzards array down to an array of just the wizards in the chosen group.
  // Narrow THAT array down to those who are confirmed Death Eaters
  // Save the new array to state (which will be used to render to the page)
  narrowItDown = (cauldronName) => {
    const copyOfAllzards = [...this.state.allzards];

    const cauldron = copyOfAllzards.filter( (wizerd) => {
      return wizerd[cauldronName] === true;
    });

    const assholes = cauldron.filter( (wyzurd) => {
      return wyzurd.deathEater === true;
    });

    this.setState({
      shitheads: assholes
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Let's GET these motherfuckers</h1>

        <WhoItGonnaBe getCauldron={this.getCauldron} />

        <Jerks shitheads={this.state.shitheads} />
      </div>
    );
  }
}

export default App;
