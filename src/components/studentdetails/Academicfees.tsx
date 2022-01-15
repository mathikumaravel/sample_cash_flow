import React, { useState } from "react";
import { Table, Button, Row, Col, Form } from "react-bootstrap";

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
                      <td>Admission Fees</td>
                      <td>333</td>
                      <td>
                        {!updateTableStatus ? (
                          <div>2000</div>
                        ) : (
                          <input className="form-control" style={{"width":"60%"}} />
                        )}
                      </td>
                      <td>
                        {!updateTableStatus ? (
                          <div>Staff Children</div>
                        ) : (
                          <Form.Select aria-label="Default select example">
                            <option>--Select--</option>
                            <option value="1">Staff Children</option>
                            <option value="2">Correspondent</option>
                            <option value="3">Trust</option>
                            <option value="3">TC</option>
                          </Form.Select>
                        )}
                      </td>
                      <td>283</td>
                      <td>
                        {!updateTableStatus ? (
                          <Button
                            className="fa fa-edit profile_btn-edit btn"
                            onClick={() => setUpdateTableStatus(true)}
                          ></Button>
                        ) : (
                          <Row>
                            <Col md={5}>
                              <i
                                className="fa fa-save btn"
                                onClick={() => setUpdateTableStatus(false)}
                                style={{
                                  fontSize: "25px",
                                  color: "blue",
                                  cursor: "pointer",
                                }}
                              ></i>
                            </Col>
                            <Col
                              md={5}
                              style={{ display: "flex", alignItems: "center" }}
                            >
                              <i
                                className="fa fa-times"
                                aria-hidden="true"
                                onClick={() => setUpdateTableStatus(false)}
                                style={{
                                  fontSize: "25px",
                                  color: "blue",
                                  cursor: "pointer",
                                }}
                              ></i>
                            </Col>
                          </Row>
                        )}
                      </td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <th>Total</th>
                      <th>333</th>
                      <th>50</th>
                      <th></th>
                      <th>283</th>
                    </tr>
                  </tfoot>
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
