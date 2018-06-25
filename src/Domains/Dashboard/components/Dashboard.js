import React from "react";
import { Row, Col } from "react-bootstrap";
import MatchTable from "./MatchTable";


export default ({ todayMatches }) => (
    <Row>
        <Col xs={12} sm={12} md={12} lg={12}>
            
            <Row>
                {todayMatches.map((match, key) => (
                    <Col key={`dashboard-match-${key}`} xs={12} sm={4} className="text-center">
                        <MatchTable match={match} />
                    </Col>
                ))}    
            </Row>

        </Col>
    </Row>
);