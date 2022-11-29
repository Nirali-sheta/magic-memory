import { useEffect, useState } from 'react';
import './App.css';
import SingleCard from './components/SingleCard';

const cardImages=[
  {"src":"/img/helmet-1.png",matched:false},
  {"src":"/img/potion-1.png",matched:false},
  {"src":"/img/ring-1.png",matched:false},
  {"src":"/img/scroll-1.png",matched:false},
  {"src":"/img/shield-1.png",matched:false},
  {"src":"/img/sword-1.png",matched:false},
]

function App() {
  const[cards,setCards]=useState([])
  const[turns,setTurns]=useState(0)
  const[choiseOne,setChoiseOne]=useState(null)
  const[choisetwo,setChoiseTwo]=useState(null)
  const[disabled,setDisabled]=useState(false)
  
  //shuffle card
  const shufflecard=()=>{
    const shuffledcard=[...cardImages,...cardImages]
    .sort(()=>Math.random()-0.5)
    .map((card)=>({...card,id:Math.random()}))


    setCards(shuffledcard)
    setTurns(0)
  }
  
  const handleChoise=(card)=>{
      choiseOne ? setChoiseTwo(card):setChoiseOne(card)
  }

  useEffect(()=>{
      if(choiseOne && choisetwo){
          setDisabled(true)
         if(choiseOne.src==choisetwo.src){
          setCards(preCards=>{
            return preCards.map(card=>{
              if(card.src==choiseOne.src){
                return{...card,matched:true}
              }
              else{
                return card
              }
            })
          }) 
          resetTurns()
         }
         else{
             setTimeout(()=>resetTurns(),1000)
         }
      }
  },[choiseOne,choisetwo])

  useEffect(()=>{
      shufflecard()
  },[])
   

  const resetTurns=()=>{
      setChoiseOne(null)
      setChoiseTwo(null)
      setTurns(previous=>previous+1)
      setDisabled(false)
}

  return (
    <div className="App">
      <h1>Nirali's Magic Match</h1>
      <button onClick={shufflecard}>New Game</button>
      <div className="card-grid">
      {cards.map(card=>(
          <SingleCard key={card.id}
            card={card}
            handleChoise={handleChoise}
            flipped={card==choiseOne||card==choisetwo|| card.matched}
            disabled={disabled}
          />
       ))}
      </div>
      <p>turns:{turns}</p>
    </div>
  );
}

export default App;
