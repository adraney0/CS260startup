import React from 'react';

export function Score({numMoves }) {
    return (
        <div className="score">
            <p><strong>Moves: </strong>{numMoves}</p>
        </div>
    );
}
