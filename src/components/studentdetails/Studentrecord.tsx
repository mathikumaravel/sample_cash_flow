import React, { useState, ChangeEvent, useEffect } from "react";
import Sidebar from "../Layouts/Sidebar";
import Navbar from "../Layouts/Navbar";
import Feesdetails from "./Feesdetails";
import Academicfees from "./Academicfees";
import { Row, Col, Form, Button, Container, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios, { AxiosResponse } from "axios";
import { baseUrl } from "../../index";
import { getAccessToken } from "../../config/getAccessToken";

const Studentrecord = () => {
  //To Make Edit
  const [search, setSearch] = useState<any>({
    text: "",
    studentid: "",
    PhoneNumber: "",
    GradeId: "",
  });
  const [statusStudentEdit, setStatusStudentEdit] = useState(false);
  const [isComponentVisible, setIsComponentVisible] = useState(true);

  const [statusStudentDetailsEdit, setStatusStudentDetailsEdit] = useState<any>(
    {}
  );
  const [statusStudentSearch, setStatusStudentSearch] = useState<any>({});
  const [statusStudentDetails, setStatusStudentDetails] = useState<any>({});
  const [Autosearch, setAutoSearch] = useState<any>("");
  const [suggest, setSuggest] = useState<any>([]);
  const [suggestions, setsuggestions] = useState<any>([]);

  console.log(statusStudentDetails);

  const onSuggesthandler = (value: any) => {
    setIsComponentVisible(false);

    setAutoSearch({
      text: value.student_name,
      studentid: value.student_id,
      PhoneNumber: value.phone_number,
      GradeId: value.grade_id,
    });
  };

  const Searchauto = () => {
    if (Autosearch.length > 0) {
      getAccessToken();
      axios
        .get(
          `${baseUrl}student_admissions_search/student_search?q=${Autosearch}`
        )
        .then((response: AxiosResponse) => {
          setSuggest(response.data);
          setIsComponentVisible(true);
          console.log(suggest);
        });
    }
  };

  useEffect(() => {
    Searchauto();
  }, [Autosearch]);

  const onClear = () => {
    setStatusStudentSearch("");
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setStatusStudentDetails({ ...statusStudentDetails, [name]: value });
  };

  // console.log(statusStudentDetails)

  return (
    <div id="page-top">
      <div id="wrapper">
        <Sidebar data={"studentrecord"}></Sidebar>
        <div id="content-wrapper" className="d-flex flex-column">
          <div className="student-profile py-2">
            <div id="content">
              <Navbar></Navbar>
              <div className="container" style={{ marginLeft: "3%" }}>
                <div className="d-sm-flex align-items-center justify-content-between mb-5">
                  <Container>
                    <Row>
                      <Col md={6}>
                        <Form.Control
                          type="search"
                          className="form-control bg-light border-20 small"
                          placeholder="Search for Name,ID,PhoneNo..."
                          value={
                            Autosearch && Autosearch.text
                              ? `${Autosearch.text}${Autosearch.studentid}${Autosearch.PhoneNumber}${Autosearch.GradeId}`
                              : Autosearch
                          }
                          onChange={(e: any) => setAutoSearch(e.target.value)}
                        />
                        {suggest.length > 0 && isComponentVisible && (
                          <div>
                            {suggest.map((item: any, i: any) => (
                              <div
                                key={i}
                                onClick={() => onSuggesthandler(item)}
                              >
                                {item.student_name}***
                                {item.student_id}***
                                {item.phone_number}***
                                {item.grade_id}
                              </div>
                            ))}
                          </div>
                        )}
                      </Col>

                      <Col md={2}>
                        <Form.Select aria-label="Default select example">
                          <option>2021-2022</option>
                          <option>2023-2024</option>
                          <option>2025-2026</option>
                        </Form.Select>
                      </Col>
                      <Col md={1}>
                        <Form.Select aria-label="Default select example">
                          <option>I</option>
                          <option>II</option>
                          <option>III</option>
                        </Form.Select>
                      </Col>
                      <Col md={1}>
                        <Form.Select aria-label="Default select example">
                          <option>A</option>
                          <option>B</option>
                          <option>C</option>
                        </Form.Select>
                      </Col>
                      <Col md={1}>
                        <div className="input-group-append">
                          <Button
                            className="btn btn-danger"
                            type="button"
                            onClick={() => {
                              onClear();
                            }}
                          >
                            <i className="fas fa-search fa-sm"></i>
                          </Button>
                        </div>
                      </Col>
                    </Row>
                  </Container>
                </div>
                <div className="col-xl-11 text-center">
                  {!statusStudentSearch ? (
                    <div>
                      <Table striped bordered hover>
                        <thead>
                          <tr>
                            <th>Name</th>
                            <th>Admission ID</th>
                            <th>PhoneNumber</th>
                            <th>Grade</th>
                            <th>Section</th>
                            <th>Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              {" "}
                              <Link to="/StudentprofileSearch">ASAIN</Link>
                            </td>
                            <td>1001</td>
                            <td>9788888909</td>
                            <td>I</td>
                            <td>A</td>
                            <td>
                              {" "}
                              <p style={{ color: "green" }}>paid </p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <Link to="/Student">Mohan</Link>
                            </td>
                            <td>1002</td>
                            <td>9788888909</td>
                            <td>II</td>
                            <td>B</td>
                            <td>
                              {" "}
                              <Link to="/Stu_pay" style={{ color: " red " }}>
                                UnPaid
                              </Link>
                            </td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>
                  ) : (
                    <div style={{ textAlign: "center" }}>No Data found</div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Studentrecord;
