import React from 'react';

// Component to map the spies onto the page
// Spies will come in from props, this component needs no state!

const Jerks = (props) => {
  return(
    <main>
      {props.shitheads.length === 0
        ? <p>Good news, this bunch are all nice folks!</p>
        : props.shitheads.map( (bastard) => {
            return(
              <h3 key={bastard._id}>{bastard.name}</h3>
            )
        })
      }
    </main>
  )
}

export default Jerks;