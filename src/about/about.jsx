import React from 'react';
import './about.css';

export function About() {
  return (
    <main className = "container-fluid bg-second text-center text-dark">
        <div id="picture" className="picture-box"><img width="400px" src="placeholder.jpg" alt="random" /></div>
        <h2>About</h2>
        <p>
            Triangular Peg Solitaire is a strategy game where the player attempts 
            to jump pegs over each other in order to end with just a single peg remaining.
        </p>
        <p>
            The first known reference to this game was in 1687, since then it has become even 
            more popular. This ever entertaining game is now at your fingertips!
        </p>
        <h2>How To Play</h2>
        <p>
            The game starts with an empty hole at the top of the board. Jump pegs over each other
            one at a time into an empty spot. The peg that was jumped over is then removed.
            In order to win the game, one must end with one peg remaining. The
            less number of moves used, the better.
        </p>
        <hr />
    </main>
  );
}