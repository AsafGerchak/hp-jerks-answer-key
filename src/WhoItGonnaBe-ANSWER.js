import React, { Component } from 'react';

// Form to get user selection of wizard group and pass up to App.js
// LOGICAL FLOW
    // - User selects option from drop-down
    // - User selection is saved to state
    // - On form submit, button calls a function which passes the user choice back up to App.js, where it is used to filter through the allzards array.

// What we need
// - Form with drop-down and submit button
// - State
// - Function from props

class WhoItsGonnaBe extends Component {
  constructor() {
    super();
    this.state = {
      userChoice: ""
    }
  }

  getCauldronName = (e) => {
    this.setState({
      userChoice: e.target.value
    });
  }

  render() {
    return(
      <form action="">
        <select onChange={this.getCauldronName} name="whichCauldron" id="whichCauldron">
          <option value="">PICK ONE FFS</option>
          <option value="ministryOfMagic">Ministry of Magic</option>
          <option value="dumbledoresArmy">Dumbledore's Army</option>
          <option value="orderOfThePhoenix">Order of the Phoenix</option>
        </select>

        <button
          onClick={ (e) => this.props.getCauldron( e, this.state.userChoice ) }
          type="submit"
        >
            Run counter-intelligence operation
        </button>
      </form>
    )
  }
}

export default WhoItsGonnaBe;