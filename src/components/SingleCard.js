import React from 'react'
import './SingleCard.css'

export default function Card({card,handleChoise,flipped,disabled}) {
  const handleClick=()=>{
    if(!disabled){
       handleChoise(card)
    }
  }

  return (
    <div className="card">
            <div className={flipped ? "flipped":""}>
              <img src={card.src} alt="card front" className="front" />
              <img src="/img/cover.png" alt="card back" onClick={handleClick} className="back" />
            </div>
          </div>
  )
}
