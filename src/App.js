import React, { Component } from 'react';
import axios from 'axios';
import WhoItGonnaBe from './WhoItGonnaBe';
import Jerks from './Jerks';
import './App.css';

// Make axios call to Harry Potter API, save list of all characters to state
// Create form to choose wizard affiliation
// Filter through API results to pick wizards in that group, save
// Filter through that group to find the spies, save that array to state
// Map over the array of spies to put them on the page

class App extends Component {
  constructor(){
    super();
    this.state = {
      allzards: [],
      shitheads: []
    }
  }

  componentDidMount(){
    axios({
      url: `https://www.potterapi.com/v1/characters`,
      method: `GET`,
      dataResponse: `json`,
      params: {
        key: `$2a$10$QTTp9tiCR8CNBsj3iA5IR.jJhfdT2FKcAnZsP2gYYGaI27KsGEVwy`
      }
    })
    .then( (response) => {
      this.setState({
        allzards: response.data
      })
    })
  }

  //  - Create a function to get the chosen cauldron from the component
  
  getCauldron = (e, cauldronName, cauldronStatus) => {
    e.preventDefault();
    if (cauldronName === ``) {
      alert(`Pick a REAL one tho`);
    } else {
      this.narrowItDown(cauldronName, cauldronStatus);
    }
  }

  //  - Pass the info to a function which will filter a copy of the original array of all wizards (allzards) down to the chosen cauldron
  //  - Filter THAT new array down to get the death eaters
  //  - Save the new array of death eaters to state (which will be used to render a component)

  narrowItDown = (cauldronName, cauldronStatus) => {
    const copyOfAllzards = [...this.state.allzards];

    const cauldron = copyOfAllzards.filter( (wizurd) => {
      return wizurd[cauldronName] === cauldronStatus;
    })
    const assholes = cauldron.filter( (wizerd) => {
      return wizerd.deathEater === true;
    })

    this.setState({
      shitheads: assholes
    })
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
