import React from 'react';

const Greeting = ({ greeting, fontSize}) => {
  return (
    <h1 className="greeting" style={{ fontSize: `${fontSize}px`}}>
      { greeting }
    </h1>
  )
}

export default Greeting