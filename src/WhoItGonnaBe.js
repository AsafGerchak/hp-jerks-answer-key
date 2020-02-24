import React, { Component } from 'react';

// Create a form to choose wizard affiliation
// Logical flow:
//    - User chooses a group of wizards (a "cauldron", in zoology terms)
//    - User choice is saved in state
//    - On form submit, user choice is passed from state to a function that lives in the App.js component, where the original list of all wizards ("allzards") can be filtered for the chosen cauldron

// Things we need:
//    - Form with values to capture and a submit button
//    - State
//    - Function from props

class WhoItGonnaBe extends Component {
  constructor() {
    super();
    this.state = {
      cauldronName: ``,
      cauldronStatus: true
    }
  }

  getCauldronName = (e) => {
    let status = true;
    if (e.target.value === `school`) {
      status = `Hogwarts School of Witchcraft and Wizardry`;
    }
    this.setState({
      cauldronName: e.target.value,
      cauldronStatus: status
    })
  }

  render() {
    return(
      <form action="submit">
        <select onChange={this.getCauldronName} name="whichCauldron" id="whichCauldron">
          <option value="">PICK ONE FFS</option>
          <option value="ministryOfMagic">Ministry of Magic</option>
          <option value="dumbledoresArmy">Dumbledore's Army</option>
          <option value="orderOfThePhoenix">Order of the Phoenix</option>
          <option value="school">Hogwarts students and staff</option>
        </select>

        <button onClick={ (e) => this.props.getCauldron(e, this.state.cauldronName, this.state.cauldronStatus)}>Run counter-intelligence operation</button>
      </form>
    )
  }
}

export default WhoItGonnaBe;