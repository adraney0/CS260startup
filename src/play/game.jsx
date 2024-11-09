import React, { useState} from 'react';

import {Peg} from './peg';
import {Score} from './scores';
import './play.css';

export function Game(props) {
    const userName = props.userName;

    const [board,setBoard] = useState([
        [' '],  // Row 1 (1 peg)
        ['X', 'X'],  // Row 2 (2 pegs)
        ['X', 'X', 'X' ],  // Row 3 (3 pegs)
        ['X', 'X', 'X', 'X'],  // Row 4 (4 pegs)
        ['X', 'X', 'X', 'X', 'X'],  // Row 5 (5 pegs)
        ['X', 'X', 'X', 'X', 'X', 'X'],  // Row 6 (6 pegs)
    ]);
    const [selectedPeg, setSelectedPeg] = useState(null); 
    const [possibleMoves, setPossibleMoves] = useState([]);
    const [numMoves, setNumMoves] = useState(0);
    

   
    
    // Check if a move is valid (over an adjacent peg to an empty space)
    const isValidMove = (fromRow, fromCol, toRow, toCol) => {
        const rowDiff = Math.abs(fromRow - toRow);
        const colDiff = Math.abs(fromCol - toCol);

        // Ensure the move is exactly 2 spaces away
        if (rowDiff === 2 && colDiff === 2) { // Diagonal moves
            const middleRow = Math.floor((fromRow + toRow) / 2);
            const middleCol = Math.floor((fromCol + toCol) / 2);
            
            return board[toRow][toCol] === ' ' && board[middleRow][middleCol] === 'X';  // Destination must be empty and middle must be a peg
        }
        
        // Horizontal moves (left/right)
        if (rowDiff === 0 && colDiff === 2) {
            const middleCol = Math.floor((fromCol + toCol) / 2);

            return board[toRow][toCol] === ' ' && board[fromRow][middleCol] === 'X';  // Destination must be empty and middle must be a peg
        }

        // Check if move is a valid vertical move (rowDiff === 2 and colDiff === 0)
        if (colDiff === 0 && rowDiff === 2) {
            const middleRow = Math.floor((fromRow + toRow) / 2);

            const value = board[toRow][toCol] === ' ' && board[middleRow][fromCol] === 'X';
            return value; // Valid if middle has peg and destination is empty
        }

        
    };


    // Function to handle peg click events
    const handleClick = (row, col) => {
        const newBoard = [...board];
        if (selectedPeg) {
            // If the same peg is clicked again, deselect it
            if (selectedPeg[0] === row && selectedPeg[1] === col) {
                setSelectedPeg(null);
                setPossibleMoves([]); // Clear possible moves when deselecting
            } else {
                // If a peg is selected, check if destination is valid
                const [fromRow, fromCol] = selectedPeg;
                if (isValidMove(fromRow, fromCol, row, col)) {

                    // Make the move: jump the peg
                    newBoard[row][col] = 'X';
                    newBoard[fromRow][fromCol] = ' ';
                    // Remove the jumped peg
                    const middleRow = (fromRow + row) / 2;
                    const middleCol = (fromCol + col) / 2;
                    newBoard[middleRow][middleCol] = ' ';
                    setBoard(newBoard);
                    
                    setSelectedPeg(null);
                    setPossibleMoves([]);

                    setNumMoves(prevMoves => prevMoves + 1);
                }
            }
        } else {
            // Select the peg
            if (board[row][col] === 'X') {
                setSelectedPeg([row, col]);
                setPossibleMoves(getPossibleMoves(row, col));
            }
        }
    };

    const getPossibleMoves = (row, col) => {
        const directions = [
            { rowChange: 2, colChange: 0 }, // Up
            { rowChange: -2, colChange: 0 },  // Down
            { rowChange: 0, colChange: -2 }, // Left
            { rowChange: 0, colChange: 2 },  // Right
            { rowChange: -2, colChange: -2 }, // Up-left (diagonal)
            { rowChange: -2, colChange: 2 }, // Up-right (diagonal)
            { rowChange: 2, colChange: -2 },  // Down-left (diagonal)
            { rowChange: 2, colChange: 2 },  // Down-right (diagonal)
        ];
        const moves = [];
        directions.forEach(({ rowChange, colChange }) => {
            const newRow = row + rowChange;
            const newCol = col + colChange;

            console.log(`Checking move: rowChange=${rowChange}, colChange=${colChange}, newRow=${newRow}, newCol=${newCol}`);

            // Check if the new row and column are within bounds of the board
            if (newRow >= 0 && newRow < board.length && newCol >= 0 && newCol < board[newRow].length) {
                console.log("inside for loop")
                // Check if this move is valid
                if (isValidMove(row, col, newRow, newCol)) {
                    moves.push([newRow, newCol]);
                }
            }
        });

        return moves;
    };
    
    return (
        <div className = "game" >
            <table>
                <tbody>
                    {board.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {row.map((status, colIndex) => {
                            // Check if this peg is selected
                            const isSelected = selectedPeg && selectedPeg[0] === rowIndex && selectedPeg[1] === colIndex;
                            const isPossibleMove = possibleMoves.some(([r, c]) => r === rowIndex && c === colIndex);
            
                            return (
                                <td key={colIndex}>
                                <Peg
                                    status={status === 'X' ? 'active' : 'empty'}
                                    isSelected={isSelected}
                                    isPossibleMove={isPossibleMove}
                                    onClick={() => handleClick(rowIndex, colIndex)}
                                />
                                </td>
                            );
                            })}
                      </tr>
                    ))}
                </tbody>
            </table>
            <Score numMoves = {numMoves} />
        </div>
    );
}