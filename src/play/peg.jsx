import React from 'react';
import './Peg.css';

export function Peg ({status, isSelected, isPossibleMove, onClick }) {
    const pegClass = `peg ${status} ${isSelected ? 'selected' : ''} ${isPossibleMove ? 'possible-move' : ''}`;
    
    return (
        <div>
            <button className = {pegClass} onClick = {onClick}></button>
        </div>
    );
}