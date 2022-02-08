import React, { useState, ChangeEvent, useEffect } from "react";
import Sidebar from "../Layouts/Sidebar";
import Navbar from "../Layouts/Navbar";
import Feesdetails from "./Feesdetails";
import Academicfees from "./Academicfees";
import { Row, Col, Form, Button, Container,Table } from "react-bootstrap";
import {Link } from 'react-router-dom'
import axios, { AxiosResponse } from "axios";




const Studentrecord = () => {
  //To Make Edit
  const [search, setSearch] = useState<any>({
    text: "",
    suggestions: [],
  });
  const [statusStudentEdit, setStatusStudentEdit] = useState(false);
  const [isComponentVisible, setIsComponentVisible] = useState(true);

  const [statusStudentDetailsEdit, setStatusStudentDetailsEdit] = useState<any>(
    {}
  );
  const [statusStudentSearch, setStatusStudentSearch] = useState<any>({});
  const [statusStudentDetails, setStatusStudentDetails] = useState<any>({});

  console.log(statusStudentDetails)

  const onTextChanged = (e: any) => {
    const value = e.target.value;
    setStatusStudentSearch(value);
    let suggestions: any = {};
    if (value.length > 0) {
      const regex = new RegExp(`^${value}`, "i");
      suggestions = statusStudentDetails.sort().filter((v: any) => regex.test(v.student_admissions_id));
    }
    setIsComponentVisible(true);
    setSearch({ suggestions, text: value });
  };


  const suggestionSelected = (value: any) => {
    setIsComponentVisible(false);

    setSearch({
      text: value.student_admissions_id,
      suggestions: [],
    });
  };

  const { suggestions } = search;



  const searchData = () => {
    axios
      .get(
        `https://61ea85bfc9d96b0017700bb9.mockapi.io/search/${statusStudentSearch}`
      )
      .then((response: AxiosResponse) => {
        setStatusStudentDetails(response.data);
      });
  };

  const searchedit = () => {
    axios
      .put(
        `https://61ea85bfc9d96b0017700bb9.mockapi.io/search/${statusStudentDetails.student_admissions_id}`,
        {
          student_name: statusStudentDetails.student_name,
          grade_id: statusStudentDetails.grade_id,
          section: statusStudentDetails.section,
          father_name: statusStudentDetails.father_name,
          student_id: statusStudentDetails.student_id,
          phone_number: statusStudentDetails.phone_number,
          alt_phone_number: statusStudentDetails.alt_phone_number,
          address: statusStudentDetails.address,
          email: statusStudentDetails.email,
          status: statusStudentDetails.status,
        }
      )
      .then((response: AxiosResponse) => {
        setStatusStudentDetails(response.data);
      })
      .catch((error) => {
        alert(error);
      });
  };

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
        <Sidebar></Sidebar>
        <div id="content-wrapper" className="d-flex flex-column">
          <div className="student-profile py-2">
            <div id="content">
              <Navbar></Navbar>
              <div className="container" style={{ marginLeft: "3%" }}>
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                  <Container>
                    <Row>
                      <Col>
                        <div>
                          <div className="input-group">
                            <Form.Control
                              type="search"
                              className="form-control bg-light border-20 small"
                              placeholder="Search for Name,ID,PhoneNo..."

                              // value={search.text}
                              onChange={onTextChanged}
                            />

                            {/* {suggestions.length > 0 && isComponentVisible && (
                          <div>
                            {suggestions.map((item: any) => (
                              <div key={statusStudentDetails.student_admissions_id}>
                                <div
                                  key={item.student_admissions_id}
                                  onClick={() => suggestionSelected(item)}
                                >
                                  {item.student_admissions_id}
                                  {item.student_name}
                                </div>
                              </div>
                            ))}
                          </div>
                        )} */}
                            <Col md={2}>
                              <Form.Select aria-label="Default select example">
                                <option>--AcademicYear--</option>
                                <option>2021-2022</option>
                                <option>2023-2024</option>
                                <option>2025-2026</option>
                              </Form.Select>
                            </Col>
                            <Col md={2}>
                              <Form.Select aria-label="Default select example">
                                <option>--Grade--</option>
                                <option>I</option>

                              </Form.Select>
                            </Col>
                            <Col md={2}>
                              <Form.Select aria-label="Default select example">
                                <option>--Section--</option>
                                <option>A</option>
                                <option>B</option>
                                <option>C</option>
                              </Form.Select>
                            </Col>
                            <Col md={2}>
                              <div className="input-group-append">
                                <Button
                                  className="btn btn-danger"
                                  type="button"
                                  onClick={() => {
                                    searchData();
                                    onClear();
                                  }}
                                >
                                  <i className="fas fa-search fa-sm"></i>
                                </Button>
                              </div></Col>

                          </div>

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
                         <td> <Link to="/Student">ASAIN</Link></td>
                          <td>1001</td>
                          <td>9788888909</td>
                          <td>I</td>
                          <td>A</td>
                          <td> <a href="/Stu_pay" style={{ color:'#008000'}} >Paid</a></td>
                        </tr>
                        <tr>
                        <td><Link to="/Student" >Mohan</Link></td>
                          <td>1002</td>
                          <td>9788888909</td>
                          <td>II</td>
                          <td>B</td>
                          <td> <a style={{ color:'#FF0000'}} >Unpaid</a></td>
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
