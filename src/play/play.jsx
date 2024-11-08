import React from 'react';
import './play.css'

export function Play() {
  return (
    <main className = "bg-second"> 
    <div className="players text-dark">
        Player:
        <span className="player-name">ILoveTriangularPeg123</span>
        <div className="player-messages">
            <div className="event"><span className="player-event">Bob</span> scored 377</div>
            <div className="event"><span className="player-event">Amanda</span> started a new game</div>
            
        </div>
    </div>    
    <div className = "game">
        <table>
            <tbody>
            <tr>
                <td><button className = "btn-start game-button "></button></td>
            </tr>
            <tr>
                <td><button className = "game-button"></button></td>
                <td><button className = "game-button"></button></td>
            </tr>
            <tr>
                <td><button className = "game-button"></button></td>
                <td><button className = "game-button"></button></td>
                <td><button className = "game-button"></button></td>
            </tr>
            <tr>
                <td><button className = "game-button"></button></td>
                <td><button className = "game-button"></button></td>
                <td><button className = "game-button"></button></td>
                <td><button className = "game-button"></button></td>
            </tr>
            <tr>
                <td><button className = "game-button"></button></td>
                <td><button className = "game-button"></button></td>
                <td><button className = "game-button"></button></td>
                <td><button className = "game-button"></button></td>
                <td><button className = "game-button"></button></td>
            </tr>
            <tr>
                <td><button className = "game-button"></button></td>
                <td><button className = "game-button"></button></td>
                <td><button className = "game-button"></button></td>
                <td><button className = "game-button"></button></td>
                <td><button className = "game-button"></button></td>
                <td><button className = "game-button"></button></td>
            </tr>
            </tbody>
        </table>
        </div>
        <div className = "scores text-dark">
            <span>Current Score:</span>
            <span className = "score-holder">--</span>
            <span>High Score:</span>
            <span className = "score-holder">--</span>
        </div>
        <div>
            <button className = "btn btn-main control-buttons">Undo</button>
            <button className = "btn btn-main control-buttons">Restart</button>
        </div>
        <hr />
    </main>
  );
}