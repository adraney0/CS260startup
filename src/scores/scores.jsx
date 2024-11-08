import React from 'react';

import "./score.css";

export function Scores() {
const [scores, setScores] = React.useState([]);

    React.useEffect(() => {
        const scoresText = localStorage.getItem('scores');
        if (scoresText) {
            setScores(JSON.parse(scoresText));
        }
    }, []);

    const scoreRows = [];
    if(scores.length) {
        for (const [i, score] of scores.entries()) {
            scoreRows.push(
                <tr key = {i}>
                    <td>{i}</td>
                    <td>{score.name.split('@')[0]}</td>
                    <td>{score.pegsRemaining}</td>
                    <td>{score.numMoves}</td>
                    <td>{score.date}</td>
                </tr>
            );
        }
    } else {
        scoreRows.push(
            <tr key = '0'>
                <td colSpan = '4'>Be the first to score</td>
            </tr>
        )
    }

    return (
        <main className = "container-fluid bg-second text-center">
            <table className = "table table-warning">
                <thead className = "table-dark">
                    <tr>
                        <th className = "btn-main">#</th>
                        <th className = "btn-main">Name</th>
                        <th className = "btn-main">Pegs Remaining</th>
                        <th className = "btn-main">Moves</th>
                        <th className = "btn-main">Date</th>
                    </tr>
                </thead>
                <tbody className = 'table-primary' id = 'scores'>{scoreRows}</tbody>
            </table>
        </main>
    );
}