import React from "react";


export default ({ team }) => (
    <tr>
        <td>{team.country}</td>
        <td>{team.points}</td>
        <td>{team.wins}</td>
        <td>{team.draws}</td>
        <td>{team.losses}</td>
        <td>{team.games_played}</td>
        <td>{team.goals_for}</td>
        <td>{team.goals_against}</td>
        <td>{team.goal_differential}</td>
    </tr>
);