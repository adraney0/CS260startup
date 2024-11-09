import React from 'react';
import './Peg.css';

export const Peg = ({ row, col, status, isHighlighted, onClick }) => {
    const pegClass = `peg ${status} ${isHighlighted ? 'valid-move' : ''}`;
    return (
        <div>
            <button className = {pegClass} onClick = {() => onClick(row,col)}></button>
        </div>
    )
}