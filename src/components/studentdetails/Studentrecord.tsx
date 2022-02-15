import React, { useState, ChangeEvent, useEffect } from "react";
import Sidebar from "../Layouts/Sidebar";
import Navbar from "../Layouts/Navbar";
import Feesdetails from "./Feesdetails";
import Academicfees from "./Academicfees";
import {
  Row,
  Col,
  Form,
  Button,
  Container,
  Table,
  Card,
  ListGroup,
} from "react-bootstrap";
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
  const [Autosearch, setAutoSearch] = useState<any>([]);
  const [suggest, setSuggest] = useState<any>([]);
  const [suggestions, setsuggestions] = useState<any>([]);
  const [acdyear, setAcdYear] = useState<any>([]);
  const [Grdsec, setGrdsec] = useState<any>([]);
  const [academicYear, setAcademicYear] = useState<any>("");
  const [gradeSectionList, setGradeSectionList] = useState<any>([]);
  const [gradeBasedOnYearFinal, setGradeBasedOnYearFinal] = useState<any>([]);
  const [addGrade, setAddGrade] = useState("");
  const [filterParticularYear, setFilterParticularYear] = useState<any>([]);
  const [academicYearFinal, setAcademicYearFinal] = useState<any>([]);
  const [sectionBasedOnGrade, SetsectionBasedOnGrade] = useState<any>([]);
  const [addSection, setAddSection] = useState<any>("");
  const [section, setsection] = useState<any>("");
  const [acas, setacas] = useState<any>("");
  const [mainsearchh, setMainSearch] = useState<any>([]);

  const [gradea, setGradea] = useState<any>("");

  //manage state  Autosearch
  //manage state  academicYear
  //manage state  gradea
  //manage state  section
  console.log(mainsearchh);

  useEffect(() => {
    if (gradeSectionList && gradeSectionList.length) {
      let mySet1 = new Set();
      gradeSectionList.forEach((element: any) => {
        mySet1.add(element.academic_year);
      });
      setAcademicYearFinal([...mySet1]);
      handleSearch(gradeSectionList, gradeSectionList[0].academic_year);
    }
  }, [gradeSectionList]);

  useEffect(() => {
    if (filterParticularYear && filterParticularYear.length) {
      let mySet1 = new Set();
      filterParticularYear.forEach((element: any) => {
        mySet1.add(element.grade);
      });
      setGradeBasedOnYearFinal([...mySet1]);
      handlesection(filterParticularYear, filterParticularYear[0].grade);
    }
  }, [filterParticularYear]);

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
        });
    }
  };

  const mainsearch = () => {
    getAccessToken();
    axios
      .get(
        `${baseUrl}student_admissions_search/search_student?academic_year=${acas}&grade_id=${gradea}&section=${section}`
      )
      .then((response: AxiosResponse) => {
        setMainSearch(response.data);
        console.log(response.data);
      });
  };

  useEffect(() => {
    getAccessToken();
    axios
      .get(`${baseUrl}grade_section/show_all`)
      .then((res: any) => {
        setGradeSectionList(res.data.grade_sections);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    Autosearch && Autosearch.length > 0 ? Searchauto() : setSuggest("");
  }, [Autosearch]);

  const onClear = () => {
    setStatusStudentSearch("");
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setStatusStudentDetails({ ...statusStudentDetails, [name]: value });
  };

  const handleSearch = (gradeSectionList: any, searchInput: any) => {
    setAddGrade("");
    setAcademicYear(searchInput);
    let mySet1 = new Set();
    let resultData = gradeSectionList.filter((obj: any) =>
      Object.values(obj)
        .flat()
        .some((v) =>
          `${v}`.toLowerCase().includes(`${searchInput}`.toLowerCase())
        )
    );
    let selectedYearArr: any = [];
    resultData.forEach((element: any) => {
      selectedYearArr.push(element);
      mySet1.add(element.grade);
    });
    setGradeBasedOnYearFinal([...mySet1]);
    setFilterParticularYear(selectedYearArr);
    setAddGrade(resultData[0].grade);
  };

  const handlesection = (sectionList: any, searchInput: any) => {
    setAddGrade("");
    setAcademicYear(searchInput);
    let mySet1 = new Set();
    let resultData = gradeSectionList.filter((obj: any) =>
      Object.values(obj)
        .flat()
        .some((v) =>
          `${v}`.toLowerCase().includes(`${searchInput}`.toLowerCase())
        )
    );
    let selectedYearArr: any = [];
    resultData.forEach((element: any) => {
      selectedYearArr.push(element);
      mySet1.add(element.section);
    });
    SetsectionBasedOnGrade([...mySet1]);

    setAddSection(resultData[0].section);
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
                      <Col md={5}>
                        <Form.Control
                          type="search"
                          className="form-control bg-light border-20 small"
                          placeholder="Search for Name,ID,PhoneNo..."
                          value={
                            Autosearch && Autosearch.text
                              ? `${Autosearch.text}**${Autosearch.GradeId}**${Autosearch.PhoneNumber}**${Autosearch.studentid}`
                              : Autosearch
                          }
                          onChange={(e: any) =>
                            setAutoSearch(e.target.value.trim())
                          }
                        />
                        <Card
                          style={{
                            cursor: "pointer",
                            background: "Black",
                            color: "white",
                          }}
                        >
                          <ListGroup
                            variant="flush"
                            style={{ marginLeft: "10px" }}
                          >
                            {suggest.length > 0 && isComponentVisible && (
                              <div>
                                {suggest.map((item: any, i: any) => (
                                  <div
                                    key={i}
                                    onClick={() => onSuggesthandler(item)}
                                  >
                                    {item.student_name}***
                                    {item.grade_id}***
                                    {item.phone_number}***
                                    {item.student_id}
                                  </div>
                                ))}
                              </div>
                            )}
                          </ListGroup>
                        </Card>
                      </Col>

                      <Col md={2}>
                        <Form.Select
                          aria-label="Default select example"
                          onChange={(e) => {
                            setAcademicYear(e.target.value);
                            handleSearch(gradeSectionList, e.target.value);
                            setacas(e.target.value);
                          }}
                        >
                          <option value="">Academic Year</option>
                          {academicYearFinal &&
                            academicYearFinal.length &&
                            academicYearFinal.map((academic: any) => {
                              // console.log(academicYear)
                              return <option>{academic}</option>;
                            })}
                        </Form.Select>
                      </Col>
                      <Col md={2}>
                        <Form.Select
                          aria-label="Default select example"
                          onChange={(e) => {
                            setGradea(e.target.value);
                            handlesection(filterParticularYear, e.target.value);
                          }}
                        >
                          <option value="">Grade</option>
                          {gradeBasedOnYearFinal &&
                            gradeBasedOnYearFinal.length &&
                            gradeBasedOnYearFinal.map((grade: any) => {
                              // console.log(academicYear)
                              return <option>{grade}</option>;
                            })}
                        </Form.Select>
                      </Col>
                      <Col md={2}>
                        <Form.Select
                          aria-label="Default select example"
                          onChange={(e) => setsection(e.target.value)}
                        >
                          <option value="">Section</option>
                          {sectionBasedOnGrade &&
                            sectionBasedOnGrade.length &&
                            sectionBasedOnGrade.map((value: any, i: any) => {
                              return <option>{value}</option>;
                            })}
                        </Form.Select>
                      </Col>
                      <Col md={1}>
                        <div className="input-group-append">
                          <Button
                            className="btn btn-danger"
                            type="button"
                            onClick={() => {
                              mainsearch();
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
                  {statusStudentSearch ? (
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
                          {mainsearchh && mainsearchh.length > 0? (
                            mainsearchh.map((values: any, index: any) => {
                              return (
                                <tr key={index}>
                                  <td>
                                    {" "}
                                    <Link to="/StudentprofileSearch">
                                      No Name
                                    </Link>
                                  </td>
                                  <td>{values.student_id}</td>
                                  <td>{values.phone_number}</td>
                                  <td>{values.grade_id}</td>
                                  <td>{values.section}</td>
                                  <td>
                                    {" "}
                                    <p style={{ color: "green" }}>paid </p>
                                  </td>
                                </tr>
                              );
                            })
                          ) : (
                            <tr>
                              <td colSpan={6} className="text-center">
                                No Data Found
                              </td>
                            </tr>
                          )}
                        </tbody>
                      </Table>
                    </div>
                  ) : null}
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
