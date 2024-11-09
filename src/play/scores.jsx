import React from 'react';

export function Score({numMoves }) {
    return (
        <div className="score">
            <span>Moves: </span>
            <span className = "score-holder">{numMoves}</span> 
        </div>
    );
}
