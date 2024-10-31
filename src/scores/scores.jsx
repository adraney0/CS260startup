import React from 'react';

import "./score.css";

export function Scores() {
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
                <tbody className = "table-primary">
                    <tr>
                        <td>1</td>
                        <td>John Smith</td>
                        <td>1</td>
                        <td>14</td>
                        <td>9.26.24</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Sally Smith</td>
                        <td>2</td>
                        <td>15</td>
                        <td>9.25.24</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Bob Smith</td>
                        <td>2</td>
                        <td>16</td>
                        <td>9.27.24</td>
                    </tr>
                </tbody>
            </table>
        <hr />
    </main>
  );
}