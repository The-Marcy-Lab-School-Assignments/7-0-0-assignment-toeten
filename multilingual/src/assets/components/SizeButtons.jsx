import React from 'react';

const SizeButtons = ({ onIncrease, onDecrease }) => {
  return (
    <div>
      <button onClick={onIncrease}>+</button>
      <button onClick={onDecrease}>-</button>
    </div>
  )
}

export default SizeButtons
