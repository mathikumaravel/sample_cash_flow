import React, { useState } from "react";
import { Table, Button,Row,Col } from "react-bootstrap";

const Academicfees = () => {
    //table status edit
    const [updateTableStatus, setUpdateTableStatus] = useState(false);
    return (
        <div>
            <div className="row mt-4">
                <div className="col-lg-11">
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h4 className="m-0 text-danger text-center">
                                <a>
                                    <i className="far fa-clone"></i> Student Academic Fees
                                </a>{" "}
                            </h4>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th>Fee Type Name</th>
                                            <th>Actual fees</th>
                                            <th>Discount</th>
                                            <th>Fee Discount Type</th>
                                            <th>Updated Fees</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>Mark</td>
                                            <td>Otto</td>
                                            <td>@mdo</td>
                                            <td></td>
                                            <td>
                                                {!updateTableStatus ? (
                                                    <Button onClick={() => setUpdateTableStatus(true)}>Edit</Button>
                                                ) : (
                                                    <Row>
                                                        <Col md={5}>
                                                            <i
                                                                className="fa fa-save btn"
                                                                onClick={() => setUpdateTableStatus(false)}
                                                                style={{
                                                                    fontSize: "25px",
                                                                    color: "red",
                                                                    cursor: "pointer",
                                                                }}
                                                            ></i>
                                                        </Col>
                                                        <Col md={5} style={{ display: "flex", alignItems: "center" }}>
                                                            <i
                                                                className="fa fa-times"
                                                                aria-hidden="true"
                                                                onClick={() => setUpdateTableStatus(false)}
                                                                style={{
                                                                    fontSize: "25px",
                                                                    color: "red",
                                                                    cursor: "pointer",
                                                                }}
                                                            ></i>
                                                        </Col>
                                                    </Row>
                                                )}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>1</td>
                                            <td>Mark</td>
                                            <td>Otto</td>
                                            <td>@mdo</td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Academicfees;
