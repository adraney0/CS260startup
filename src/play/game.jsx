import React, { useState } from 'react';

import {Peg} from './peg';
import './play.css';

export function Game(props) {
    const userName = props.userName;
    const [board,setBoard] = useState([
        [''],  // Row 1 (1 peg)
        ['X', 'X'],  // Row 2 (2 pegs)
        ['X', 'X', 'X' ],  // Row 3 (3 pegs)
        ['X', 'X', 'X', 'X'],  // Row 4 (4 pegs)
        ['X', 'X', 'X', 'X', 'X'],  // Row 5 (5 pegs)
        ['X', 'X', 'X', 'X', 'X', 'X'],  // Row 6 (6 pegs)
    ]);
    
     // Function to handle peg click events
    const handleClick = (row, col) => {
        const newBoard = [...board];
        // Toggle the peg status when clicked (this can be expanded for more complex game logic)
        if (newBoard[row][col] === '') {
            return
        }
        if (newBoard[row][col] === 'X') {
            newBoard[row][col] = ' ';
        }
        setBoard(newBoard);
    };
    return (
        <div className = "game" >
            <table>
                <tbody>
                    {board.map((row, rowIndex) => (
                        <tr key = {rowIndex}>
                            {row.map((status, colIndex) => (
                                <td key = {colIndex} >
                                    <Peg 
                                        status = {status === 'X' ? 'active' :'empty'}
                                        onClick = {() => handleClick (rowIndex, colIndex)}
                                    />
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}