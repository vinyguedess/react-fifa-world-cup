import React from "react";
import { Row, Col, Table } from "react-bootstrap";
import GroupListTeam from "./GroupListTeam";

export default ({ isFetching, groups }) => (
    <Row>
        {
            isFetching ?
                <Col xs={12} sm={12} md={12} className="text-center">
                    Loading...
                </Col>
            :
                groups.map((group, key) => (
                    <Col xs={12} sm={6} md={3} key={`table-groups-${key}`}>
                        <Table striped hover>
                            <thead>
                                <tr>
                                    <th>
                                        Group {group.name}
                                    </th>
                                </tr>
                                <tr>
                                    <th>Team</th>
                                    <th>P</th>
                                    <th>W</th>
                                    <th>D</th>
                                    <th>L</th>
                                    <th>GP</th>
                                    <th>GF</th>
                                    <th>GA</th>
                                    <th>GR</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    group.teams.map((team, rowKey) =>  
                                        <GroupListTeam team={team} key={`table-groups-${key}-row-${rowKey}`} />)
                                }
                            </tbody>
                        </Table>
                    </Col>
                ))
        }
    </Row>
);