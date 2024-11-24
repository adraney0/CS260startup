import React from 'react';

import "./score.css";

export function Scores() {
const [scores, setScores] = React.useState([]);

    React.useEffect(() => {
        fetch('/api/scores')
        .then((response) => response.json())
        .then((scores) => {
            setScores(scores);
        })
        .catch((error) => {
            console.error("Error fetching scores from API:", error);
        });
    }, []);

    console.log(scores);

    const scoreRows = [];
    if(scores.length) {
        for (const [i, score] of scores.entries()) {
            scoreRows.push(
                <tr key = {i}>
                    <td className = "special">{i + 1}</td>
                    <td className = "special">{score.name.split('@')[0]}</td>
                    <td className = "special">{score.pegsRemaining}</td>
                    <td className = "special">{score.numMoves + 1}</td>
                    <td className = "special"> {score.date}</td>
                </tr>
            );
        }
    } else {
        scoreRows.push(
            <tr key = '0'>
                <td colSpan = '5'>Be the first to score</td>
            </tr>
        )
    }

    return (
        <main className = "container-fluid bg-scores text-center table-holder">
                <table className = " table table-cstm table-warning">
                    <thead className = "table-dark">
                        <tr>
                            <th className = "table-main">#</th>
                            <th className = "table-main">Name</th>
                            <th className = "table-main">Pegs Left</th>
                            <th className = "table-main">Moves</th>
                            <th className = "table-main">Date</th>
                        </tr>
                    </thead>
                    <tbody className = 'table-primary'>{scoreRows}</tbody>
                </table>
            
        </main>
    );
}