import React, { Component } from "react";
import "./indes.css";
import { Row, Col, Table } from "reactstrap";

export default class Price extends Component {
    render() {
        return (
            <>
                <div className="vh-100 justify-content-center align-content-center" id="price">
                    <Row className="justify-content-center">
                        <Col sm="12" md="6" lg="6" className="justify-content-center">
                            <Row className="justify-content-center">
                                <Col sm="6" md="6" lg="6" className="justify-content-center">
                                    <Row className="justify-content-center">
                                        <Col sm="6" md="6" lg="6" className="justify-content-center">
                                            <h2>Prices</h2>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row className="justify-content-center">
                        <Col sm="12" md="6" lg="6" className="justify-content-center">
                            <Table responsive hover stripped borderless>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>Username</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>Larry</td>
                                        <td>the Bird</td>
                                        <td>@twitter</td>
                                    </tr>
                                </tbody>
                           </Table>
                        </Col>
                    </Row>
                </div>
            </>
        );
    }
}