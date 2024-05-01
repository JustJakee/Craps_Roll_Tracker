import React, { useState } from 'react';
import roll2 from './constants/roll2.png';
import roll3 from './constants/roll3.png';
import roll4 from './constants/roll4.png';
import rollH4 from './constants/rollH4.png';
import roll5a from './constants/roll5a.png';
import roll5b from './constants/roll5b.png';
import roll6a from './constants/roll6a.png';
import roll6b from './constants/roll6b.png';
import rollH6 from './constants/rollH6.png';
import roll7a from './constants/roll7a.png';
import roll7b from './constants/roll7b.png';
import roll7c from './constants/roll7c.png';
import roll8a from './constants/roll7a.png';
import roll8b from './constants/roll7a.png';
import rollH8 from './constants/roll7a.png';
import roll9a from './constants/roll7a.png';
import roll9b from './constants/roll7a.png';
import roll10 from './constants/roll10.png';
import rollH10 from './constants/rollH10.png';
import roll11 from './constants/roll11.png';
import roll12 from './constants/roll12.png';


const DiceRollApp = () => {
  const [rolls, setRolls] = useState([]);

  const handleRollClick = (roll) => {
    setRolls([...rolls, roll]);
  };

  const handleClearClick = () => {
    setRolls([]);
  };

  return (
    <div>
      <DiceCombinations onRollClick={handleRollClick} />
      <RollsList rolls={rolls} />
      <button onClick={handleClearClick}>Clear Rolls</button>
    </div>
  );
};

const DiceCombinations = ({ onRollClick }) => {
  const combinations = [
    {
      id: 1,
      imageSrc: roll2,
      diceNotation: 'Two'
    },
    {
      id: 2,
      imageSrc: roll3,
      diceNotation: 'Three'
    },
    {
      id: 3,
      imageSrc: roll4,
      diceNotation: 'Four'
    },
    {
      id: 4,
      imageSrc: rollH4,
      diceNotation: 'Hard Four'
    },
    {
      id: 5,
      imageSrc: roll5a,
      diceNotation: 'Four'
    },
    {
      id: 6,
      imageSrc: roll5b,
      diceNotation: 'Five'
    },
    {
      id: 7,
      imageSrc: roll6a,
      diceNotation: 'Six'
    },
    {
      id: 8,
      imageSrc: roll6b,
      diceNotation: 'Six'
    },
    {
      id: 9,
      imageSrc: rollH6,
      diceNotation: 'Hard Six'
    },
    {
      id: 10,
      imageSrc: roll7a,
      diceNotation: 'Seven'
    },
    {
      id: 11,
      imageSrc: roll7b,
      diceNotation: 'Seven'
    },
    {
      id: 12,
      imageSrc: roll7c,
      diceNotation: 'Seven'
    },
    {
      id: 13,
      imageSrc: roll8a,
      diceNotation: 'Eight'
    },
    {
      id: 14,
      imageSrc: roll8b,
      diceNotation: 'Eight'
    },
    {
      id: 15,
      imageSrc: rollH8,
      diceNotation: 'Hard Eight'
    },
    {
      id: 16,
      imageSrc: roll9a,
      diceNotation: 'Nine'
    },
    {
      id: 17,
      imageSrc: roll9b,
      diceNotation: 'Nine'
    },
    {
      id: 18,
      imageSrc: roll10,
      diceNotation: 'Ten'
    },
    {
      id: 19,
      imageSrc: rollH10,
      diceNotation: 'Hard 10'
    },
    {
      id: 20,
      imageSrc: roll11,
      diceNotation: 'Eleven'
    },
    {
      id: 21,
      imageSrc: roll12,
      diceNotation: 'Twelve'
    },
    // Add more combinations as needed
  ];

    return (
      <div>
        {combinations.map(combination => (
          <img
            key={combination.id}
            src={combination.imageSrc}
            alt={combination.diceNotation}
            onClick={() => onRollClick(combination.diceNotation)}
          />
        ))}
      </div>
  );
};

const RollsList = ({ rolls }) => {
  return (
    <div>
      <h2>Previous Rolls:</h2>
      <ul>
        {rolls.map((roll, index) => (
          <li key={index}>{roll}</li>
        ))}
      </ul>
    </div>
  );
};

export default DiceRollApp;
