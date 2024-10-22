import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [display, setDisplay] = useState('10 Things That Require Zero Talent');
  const [nameDisplay, setNameDisplay] = useState('');

  const items = [
    "Being On Time",
    "Making An Effort",
    "Being High Energy",
    "Having A Positive Attitude",
    "Being Passionate",
    "Using Good Body Language",
    "Being Coachable",
    "Doing A Little Extra",
    "Being Prepared",
    "Having A Strong Work Ethic"
  ];

  const handleKeyPress = (key) => {
    if (key === 'RESET') {
      setDisplay('10 Things That Require Zero Talent');
      setNameDisplay('');
    } else if (key === 'NAME') {
      setNameDisplay('MILAGROS DARLENE MAE M. BULAON');
    } else {
      const index = parseInt(key);
      // Adjust the index check for items (1-10 maps to 0-9)
      if (index >= 1 && index <= items.length) {
        setDisplay(`${index} - ${items[index - 1]}`); // Subtract 1 for zero-based index
      }
    }
  };

  return (
    <div className="App">
      <h1>MILAGROS DARLENE MAE M. BULAON - IT3A</h1>
      <h2>{display}</h2>
      <div className="buttons">
        {['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'RESET', 'NAME'].map((key) => (
          <button key={key} onClick={() => handleKeyPress(key)}>
            {key}
          </button>
        ))}
      </div>
      {nameDisplay && <h2>{nameDisplay}</h2>}
    </div>
  );
};

export default App;
