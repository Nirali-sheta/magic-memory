import { useEffect, useState } from 'react';
import './App.css';

const cardImages=[
  {"src":"/img/helmet-1.png"},
  {"src":"/img/potion-1.png"},
  {"src":"/img/ring-1.png"},
  {"src":"/img/scroll-1.png"},
  {"src":"/img/shield-1.png"},
  {"src":"/img/sword-1.png"},
]

function App() {
  const[cards,setCards]=useState([])
  const[turns,setTurns]=useState(0)
  
  //shuffle card
  const shufflecard=()=>{
    const shuffledcard=[...cardImages,...cardImages]
    .sort(()=>Math.random()-0.5)
    .map((card)=>({...card,id:Math.random()}))

    setCards(shuffledcard)
    setTurns(0)
  }
  
  useEffect(()=>{
    console.log("Mounted");
  },[]);

  return (
    <div className="App">
      <h1>Magic Match</h1>
      <button onClick={shufflecard}>New Game</button>
    </div>
  );
}

export default App;
