import React, { Component } from "react";
import "./indes.css";
import { Jumbotron, Col, Row } from "reactstrap";
import bgimg from "../assets/images/bg1.jpg";

export default class HeroPage extends Component {
    render() {
        return (
            <>
                <div className="justify-content-center" >
                    <Jumbotron className="vh-100 justify-content-center " style={{backgroundImage:`url(${bgimg})`, backgroundSize:"100% 100%", backgroundRepeat:"no-repeat"}}>
                        <Row className="bg-danger justify-content-center">
                            <Col lg="12" md="12" sm="12">
                                <h1>wait!!!!</h1>
                            </Col>
                        </Row>
                   </Jumbotron>
                </div>
            </>
        );
    }
}