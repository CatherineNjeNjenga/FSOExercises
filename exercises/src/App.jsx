// import React from 'react'
import { useState } from 'react';
import './App.css'

const Display = ({ counter }) => <div>{counter}</div>;

const Button = ({ onClick, text }) => {
  return (
    <button onClick={onClick} >
    {text}
  </button>
  )
};

const App = () => {
  const [ left, setLeft ] = useState(0);
  const [ right, setRight ] = useState(0);
  const [ allClicks, setAll ] = useState([]);
  const [ total, setTotal ] = useState(0);

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'));
    console.log('left before', left);
    const updatedLeft = left + 1;
    setLeft(updatedLeft);
    console.log('left after', updatedLeft);
    setTotal(updatedLeft + right);
  };

  const handleRightClick = () => {
    setAll(allClicks.concat('R'));
    const updatedRight = right + 1;
    setRight(updatedRight);
    setTotal(left + updatedRight);
  };

  return (
    <div>
      {left}
      <button onClick={handleLeftClick}>left</button>
      <button onClick={handleRightClick}>right</button>
      {right}
      <p>{allClicks.join(' ')}</p>
      <p>total {total}</p>
    </div>
  )
}

export default App
