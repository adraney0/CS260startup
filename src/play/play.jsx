import React from 'react';

import {Game} from './game';
import {Players} from './players';
import './play.css'

export function Play(props) {
  return (
    <main className = "bg-second"> 
        <Players userName = {props.userName} />
        <Game userName = {props.userName} />
    </main>
  );
}