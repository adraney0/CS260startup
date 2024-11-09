import React from 'react';

export function GameOverScreen({ numMoves, onPlayAgain}) {
    return (
        <div className = "game-over-screen">
            <div className = "game-over-message">
                <h2>Game Over!</h2>
                <p>No more possible moves.</p>
            </div>
            <div className = "score">
                <p>Moves : {numMoves}</p>
            </div>
            <button onClick = {onPlayAgain} className = "play-again-btn">Play Again</button>
        </div>
    );
}