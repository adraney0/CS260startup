import React, { useState} from 'react';

import {Game} from './game';
import {Players} from './players';
import './play.css'

export function Play(props) {
  const [gameOver, setGameOver] = useState(false);

  const handleGameOver = (status) => {
    setGameOver(status);
  }

  return (
    <main className = "bg-second"> 
         {!gameOver && <Players userName={props.userName} />}
        <Game userName = {props.userName} onGameOver = {handleGameOver}/>
    </main>
  );
}