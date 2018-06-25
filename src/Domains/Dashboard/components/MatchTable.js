import React from "react";
import { Table } from "react-bootstrap";


export default ({ match }) => (
    <Table striped hover>
        <tbody>
            <tr>
                <td>{match.home_team.country}</td>
                <td>vs</td>
                <td>{match.away_team.country}</td>
            </tr>
            <tr>
                <td colSpan={3}>{match.location}</td>
            </tr>
            {/* <tr>
                <td>{match.home_team_statistics.attempts_on_goal}</td>
                <td>Goal attempts</td>
                <td>{match.away_team_statistics.attempts_on_goal}</td>
            </tr>
            <tr>
                <td>0</td>
                <td>Corners</td>
                <td>0</td>
            </tr>
            <tr>
                <td>0</td>
                <td>Offsides</td>
                <td>0</td>
            </tr>
            <tr>
                <td>0</td>
                <td>Ball possession</td>
                <td>0</td>
            </tr>
            <tr>
                <td>0</td>
                <td>Pass accuracy</td>
                <td>0</td>
            </tr>
            <tr>
                <td>0</td>
                <td>Num. passes</td>
                <td>0</td>
            </tr>
            <tr>
                <td>0</td>
                <td>Fouls committed</td>
                <td>0</td>
            </tr>
            <tr>
                <td>0</td>
                <td>Yellow cards</td>
                <td>0</td>
            </tr>
            <tr>
                <td>0</td>
                <td>Red cards</td>
                <td>0</td>
            </tr> */}
        </tbody>
    </Table>
);