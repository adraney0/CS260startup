import React from 'react';
import './winScreen.css';

export function WinScreen({onPlayAgain, numMoves}){
    return (
        <div className = "win-screen">
            <h1>Congratulations, You Won!</h1>
            <p>Number of Moves Used: {numMoves}</p>
            <button onClick = {onPlayAgain}>Play Again!</button>
        </div>
    )
}