import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

export default function App() {
    return (
        <div className='body bg-main text-dark'>
        <header className = "container fluid">
            <nav className = "navbar fixed-top navbar-dark">
                <a className = "navbar-brand" href = "#">Triangular Peg Solitaire</a>
                <menu class = "navbar-nav">
                    <li className = "nav-item"><a className = "nav-link active"href = "index.html">Login</a></li>
                    <li className = "nav-item"><a className = "nav-link" href = "play.html">Play</a></li>
                    <li className = "nav-item"><a className = "nav-link" href = "scores.html">High Scores</a></li>
                    <li className = "nav-item"><a className = "nav-link" href = "about.html">About</a></li>
                </menu>
            </nav>
        </header>
  
        <main>App components go here</main>

        <footer class = "bg-main text-white">
            <div class = "container-fluid">
                <span>Belle Draney</span>
                <a href = "https://github.com/adraney0/CS260startup/tree/main" class = "custom-link">GitHub</a>
            </div>
            
        </footer>

      </div>
    );
  }