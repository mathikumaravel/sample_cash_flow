import React, { useState } from "react";
import Sidebar from "../Layouts/Sidebar";
import Navbar from "../Layouts/Navbar";
import Feesdetails from "./Feesdetails";
import Academicfees from "./Academicfees";
import { Row, Col, Form } from "react-bootstrap";

const Student = () => {
  //To Make Edit
  const [statusStudentEdit, setStatusStudentEdit] = useState(false);

  return (
    <div id="page-top">
      <div id="wrapper">
        <Sidebar></Sidebar>
        <div id="content-wrapper" className="d-flex flex-column">
          <div className="student-profile py-2">
            <div id="content">
              <Navbar></Navbar>
              <div className="container" style={{ marginLeft: "3%" }}>
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                  <div className="col-xl-12 col-md-2 mb-5 text-center">
                    <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-10 my-md-0 mw-100">
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control bg-light border-0 small"
                          placeholder="Search for..."
                          aria-label="Search"
                          aria-describedby="basic-addon2"
                          style={{ width: "480px" }}
                        />
                        <div className="input-group-append">
                          <button className="btn btn-danger" type="button">
                            <i className="fas fa-search fa-sm"></i>
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>

               
                  
                  <Form>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="card shadow mb-5">
                          <div className="card-body bg-transparent">
                            
                              <div style={{ marginLeft: "80%" }}>
                                {!statusStudentEdit ? (
                                  <i
                                    className="fa fa-edit profile_btn-edit btn"
                                    onClick={() => setStatusStudentEdit(true)}
                                    style={{
                                      fontSize: "25px",
                                      color: "red",
                                      cursor: "pointer",
                                    }}
                                  ></i>
                                ) : (
                                  <Row>
                                    <Col md={5}>
                                      <i
                                        className="fa fa-save btn"
                                        onClick={() =>
                                          setStatusStudentEdit(false)
                                        }
                                        style={{
                                          fontSize: "25px",
                                          color: "red",
                                          cursor: "pointer",
                                        }}
                                      ></i>
                                    </Col>
                                    <Col
                                      md={5}
                                      style={{
                                        display: "flex",
                                        alignItems: "center",
                                      }}
                                    >
                                      <i
                                        className="fa fa-times"
                                        aria-hidden="true"
                                        onClick={() =>
                                          setStatusStudentEdit(false)
                                        }
                                        style={{
                                          fontSize: "25px",
                                          color: "red",
                                          cursor: "pointer",
                                        }}
                                      ></i>
                                    </Col>
                                  </Row>
                                )}
                              </div>
                              <Form.Group as={Row}>
                                <Form.Label column sm="4">
                                  <strong>Student Name</strong>
                                </Form.Label>
                                <Col sm="8">
                                  {!statusStudentEdit ? (
                                    <div
                                      className="col-md-6 text-black"
                                      id="stud_name"
                                    >
                                      asainkk
                                    </div>
                                  ) : (
                                    <Form.Control
                                      type="text"
                                      defaultValue="asainkk"
                                      size="sm"
                                    />
                                  )}
                                </Col>
                              </Form.Group>
                              <Form.Group as={Row}>
                                <Form.Label column sm="4">
                                  <strong>Grade</strong>
                                </Form.Label>
                                <Col sm="8">
                                  {!statusStudentEdit ? (
                                    <div
                                      className="col-md-6 text-black"
                                      id="stud_name"
                                    >
                                      I
                                    </div>
                                  ) : (
                                    <Form.Select size="sm">
                                      <option>I</option>
                                      <option>II</option>
                                    </Form.Select>
                                  )}
                                </Col>
                              </Form.Group>
                              <Form.Group as={Row}>
                                <Form.Label column sm="4">
                                  <strong>Section</strong>
                                </Form.Label>
                                <Col sm="8">
                                  {!statusStudentEdit ? (
                                    <div
                                      className="col-md-6 text-black"
                                      id="stud_name"
                                    >
                                      A
                                    </div>
                                  ) : (
                                    <Form.Select size="sm">
                                      <option>A</option>
                                      <option>B</option>
                                    </Form.Select>
                                  )}
                                </Col>
                              </Form.Group>
                              <Form.Group as={Row}>
                                <Form.Label column sm="4">
                                  <strong>Admission ID</strong>
                                </Form.Label>
                                <Col sm="8">
                                  <div
                                    className="col-md-6 text-black"
                                    id="stud_name"
                                  >
                                    MVM100065
                                  </div>
                                </Col>
                              </Form.Group>
                              <Form.Group as={Row}>
                                <Form.Label column sm="4">
                                  <strong>Admission No</strong>
                                </Form.Label>
                                <Col sm="8">
                                  {!statusStudentEdit ? (
                                    <div
                                      className="col-md-6 text-black"
                                      id="stud_name"
                                    >
                                      6343
                                    </div>
                                  ) : (
                                    <Form.Control
                                      type="text"
                                      defaultValue="6343"
                                      size="sm"
                                    />
                                  )}
                                </Col>
                              </Form.Group>

                               </div>
                               </div>
                               </div>
                              
                    <div className="col-lg-5">
                        <div className="card shadow mb-5">
                          <div className="card-body bg-transparent">
                          <Form.Group as={Row}>
                                <Form.Label column sm="4">
                                  <strong>Father Name</strong>
                                </Form.Label>
                                <Col sm="8">
                                  {!statusStudentEdit ? (
                                    <div
                                      className="col-md-12 text-black"
                                      id="stud_name"
                                    >
                                      dqwd
                                    </div>
                                  ) : (
                                    <Form.Control
                                      type="text"
                                      defaultValue="dqwd"
                                      size="sm"
                                    />
                                  )}
                                </Col>
                              </Form.Group>
                            

                              <Form.Group as={Row}>
                                <Form.Label column sm="4">
                                  <strong>Phone No</strong>
                                </Form.Label>
                                <Col sm="8">
                                  {!statusStudentEdit ? (
                                    <div
                                      className="col-md-12 text-black"
                                      id="stud_name"
                                    >
                                       9876543212
                                    </div>
                                  ) : (
                                    <Form.Control
                                      type="text"
                                      defaultValue=" 9876543212"
                                      size="sm"
                                    />
                                  )}
                                </Col>
                              </Form.Group>

                              <Form.Group as={Row}>
                                <Form.Label column sm="4">
                                  <strong>Alt. Phone No</strong>
                                </Form.Label>
                                <Col sm="8">
                                  {!statusStudentEdit ? (
                                    <div
                                      className="col-md-12 text-black"
                                      id="stud_name"
                                    >
                                       9876543212
                                    </div>
                                  ) : (
                                    <Form.Control
                                      type="text"
                                      defaultValue=" 9876543212"
                                      size="sm"
                                    />
                                  )}
                                </Col>
                              </Form.Group>

                              <Form.Group as={Row}>
                                <Form.Label column sm="4">
                                  <strong>Address</strong>
                                </Form.Label>
                                <Col sm="8">
                                  {!statusStudentEdit ? (
                                    <div
                                      className="col-md-12 text-black"
                                      id="stud_name"
                                    >
                                      kavari street namakkal
                                    </div>
                                  ) : (
                                    <Form.Control
                                      type="text"
                                      defaultValue=" kavari street namakkal"
                                      size="sm"
                                    />
                                  )}
                                </Col>
                              </Form.Group>

                              <Form.Group as={Row}>
                                <Form.Label column sm="4">
                                  <strong>Email</strong>
                                </Form.Label>
                                <Col sm="8">
                                  {!statusStudentEdit ? (
                                    <div
                                      className="col-md-12 text-black"
                                      id="stud_name"
                                    >
                                      akila@gmail.com
                                    </div>
                                  ) : (
                                    <Form.Control
                                      type="text"
                                      defaultValue="akila@gmail.com"
                                      size="sm"
                                    />
                                  )}
                                </Col>
                              </Form.Group>
                              <Form.Group as={Row}>
                                <Form.Label column sm="4">
                                  <strong>Status</strong>
                                </Form.Label>
                                <Col sm="8">
                                  {!statusStudentEdit ? (
                                    <div
                                      className="col-md-12 text-black"
                                      id="stud_name"
                                    >
                                     Active
                                    </div>
                                  ) : (
                                    <Form.Check type="radio" aria-label="radio 1" label="Active"/>
                                    
                                  )}
                                </Col>
                              </Form.Group>

                              <Form.Group as={Row}>
                                <Form.Label>
                                  {' '}
                                </Form.Label>
                              </Form.Group>

                              <Form.Group as={Row}>
                                <Form.Label>
                                  {' '}
                                </Form.Label>
                              </Form.Group>

                          </div>
                        </div>
                      </div>
                      </div>
                            </Form>
                          
                        
                     

                     
                <Feesdetails></Feesdetails>
                <Academicfees></Academicfees>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Student;
