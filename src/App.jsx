import './App.css';
import { useState } from 'react';

const App = () => {
const [team, setTeam] = useState([]);

const [money, setMoney] = useState(100);

const [zombieFighters, setZombieFighters] = useState([
    {
      id: 1,
      name: 'Survivor',
      price: 12,
      strength: 6,
      agility: 4,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/0c2d6b.png',
    },
    {
      id: 2,
      name: 'Scavenger',
      price: 10,
      strength: 5,
      agility: 5,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/033a16.png',
    },
    {
      id: 3,
      name: 'Shadow',
      price: 18,
      strength: 7,
      agility: 8,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/262c36.png',
    },
    {
      id: 4,
      name: 'Tracker',
      price: 14,
      strength: 7,
      agility: 6,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/3c1e70.png',
    },
    {
      id: 5,
      name: 'Sharpshooter',
      price: 20,
      strength: 6,
      agility: 8,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/4b2900.png',
    },
    {
      id: 6,
      name: 'Medic',
      price: 15,
      strength: 5,
      agility: 7,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5a1e02.png',
    },
    {
      id: 7,
      name: 'Engineer',
      price: 16,
      strength: 6,
      agility: 5,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5e103e.png',
    },
    {
      id: 8,
      name: 'Brawler',
      price: 11,
      strength: 8,
      agility: 3,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/67060c.png',
    },
    {
      id: 9,
      name: 'Infiltrator',
      price: 17,
      strength: 5,
      agility: 9,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/ac3220.png',
    },
    {
      id: 10,
      name: 'Leader',
      price: 22,
      strength: 7,
      agility: 6,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/e41f26.png',
    },
  ]
);

const handleMoney = (price) => {
  console.log('price:', price);
  const currentMoney = money - price;
  setMoney(currentMoney);
  console.log('money', money);
}

const handleZombieFighters = (zombieFighterToRemove) => {
  console.log('zombieFighterToRemove id:', zombieFighterToRemove);
  const newZombieFighters = zombieFighters.filter((zombieFighter) => {
    return zombieFighter.id !== zombieFighterToRemove;
  });
  console.log(newZombieFighters);
  setZombieFighters(newZombieFighters);
}

const handleAddFighter = (zombieFighterToAdd) => {
  if (money - zombieFighterToAdd.price < 0) {
    console.log('Not enough money, your money in now:', money);
    return;
  }
  console.log(zombieFighterToAdd);
  setTeam([...team, zombieFighterToAdd]);
  handleZombieFighters(zombieFighterToAdd.id);
  handleMoney(zombieFighterToAdd.price);
}

const newTeam = (fighterToRemove) => {
  console.log('zombieFighterToRemove id:', fighterToRemove);
  const currentTeam = team.filter((teamMember) => {
    return teamMember.id !== fighterToRemove;
  });
  return currentTeam;
}

const handleRemoveFighter = (fighter) => {
  const currntTeam = newTeam(fighter.id);
  setTeam(currntTeam);
  setZombieFighters([...zombieFighters, fighter]);
  const currentMoney = money + fighter.price;
  setMoney(currentMoney);
}

const totalStrength = team.reduce((total, currentFighter) => {
  total += currentFighter.strength;
  return total;
}, 0);

const totalAgility = team.reduce((total, currentFighter) => {
  total += currentFighter.agility;
  return total;
}, 0);

  return (
    <>
      <h1>Zombie Fighters</h1>
      <h2>Money: {money}</h2>
      <h2>Team Strength: {totalStrength}</h2>
      <h2>Team Agility: {totalAgility}</h2>
      <div>
        <h2>Team</h2>
        {team.length === 0 ? <p>Pick some team members!</p> : 
          team.map((zombieFighter) => (
            <div>
              <ul>
                <li><img src={zombieFighter.img} alt='image of zombieFighter' /></li>
                <li>{zombieFighter.name}</li>
                <li>Price: {zombieFighter.price}</li>
                <li>Strength: {zombieFighter.strength}</li>
                <li>Agility: {zombieFighter.agility}</li>
              </ul>
              <button onClick={() => handleRemoveFighter(zombieFighter)}>Remove</button>
            </div>
      ))}
      </div>
      <h2>Fighters</h2>
      {zombieFighters.map((zombieFighter) => (
        <div>
          <ul>
            <li><img src={zombieFighter.img} alt='image of zombieFighter' /></li>
            <li>{zombieFighter.name}</li>
            <li>Price: {zombieFighter.price}</li>
            <li>Strength: {zombieFighter.strength}</li>
            <li>Agility: {zombieFighter.agility}</li>

          </ul>
          <button onClick={() => handleAddFighter(zombieFighter)}>Add</button>
        </div>
      ))}
      
    </>
  );
}

export default App
