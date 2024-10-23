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


  const handleLeftClick = () => {
    setAll(allClicks.concat('L'));
    setClicks(left + 1);
  };

  const handleRightClick = () => {
    setAll(allClicks.concat('R'));
    setClicks(right + 1);
  };

  return (
    <div>
      {left}
      <button onClick={handleLeftClick}>left</button>
      <button onClick={handleRightClick}>right</button>
      {right}
      <p>{allClicks.join(' ')}</p>
    </div>
  )
}

export default App
