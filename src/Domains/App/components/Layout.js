import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import logo from './../../../assets/images/logo.svg';
import './../../../assets/css/style.css';
import Dashboard from "../../Dashboard/container";
import Groups from "./../../Groups/container";


export default () => (
    <div className="App">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">FIFA World Cup 2018</h1>
        </header>
        
        <Row>
            <Col xs={12} sm={12} md={12} lg={12}>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={Dashboard} />
                        <Route path="/groups" component={Groups} />
                    </Switch>
                </BrowserRouter>
            </Col>
        </Row>
    </div>
);