import React from 'react';

// Component to map spies to the page
// List of spies will come in from props, no need for state here!

const Jerks = (props) => {
  return(
    <main>
      {
        props.shitheads.length === 0
        ? <p>Good news, this bunch are all nice folks!</p>
        : props.shitheads.map( (fuckhead) => {
            return(
              <h3 key={fuckhead._id}>{fuckhead.name}</h3>
            )
          })
      }
    </main>
  )
}

export default Jerks;