import React from 'react';
import './winScreen.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export function WinScreen({onPlayAgain, numMoves}){
    return (
        <div className = "win-screen">
            <h1>Congratulations, You Won!</h1>
            <p>Number of Moves Used: {numMoves}</p>
            <button className = "btn btn-main" onClick = {onPlayAgain}>Play Again!</button>
        </div>
    )
}