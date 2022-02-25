import React, { useState, useEffect } from "react";
import Navbar from "../Layouts/Navbar";
import Sidebar from "../Layouts/Sidebar";
import "../../App.css";
import { Form, Button, InputGroup } from "react-bootstrap";
import Feedback from "react-bootstrap/Feedback";
import Axios from "axios";
import { baseUrl } from "../../index";
import { getAccessToken } from "../../config/getAccessToken";
import moment from "moment";

const Studentadd = () => {
    const [validated, setValidated] = useState(false);
    const [year, setYear] = useState<any>("");
    const [getYear, setacedamic] = useState<any>("");
    const [admissionNo, setAdmissionno] = useState<any>("");
    const [studentName, setStudentname] = useState<any>("");
    const [fromGrade, setFromgrade] = useState<any>("");
    const [dateofBirth, setDateofbirth] = useState<any>("");
    const [gender, setGender] = useState<any>("");
    const [email, setEmail] = useState<any>("");
    const [academicYear, setAcademicYear] = useState<any>("");
    const [toGrade, setToGrade] = useState<any>("");
    const [admissionDate, setAdmissiondate] = useState<any>(new Date());
    const [toSection, setToSection] = useState<any>("");
    const [previousSchoolInfo, setPreviousSchoolInfo] = useState<any>("");
    const [fatherName, setFatherName] = useState<any>("");
    const [fatherOccupation, setFatherOccupation] = useState<any>("");
    const [address, setAddress] = useState<any>("");
    const [phoneNo, setPhoneno] = useState<any>("");
    const [alterPhoneno, setAlterPhoneno] = useState<any>("");
    const [addGrade, setAddGrade] = useState<any>("");
    const [gradeBasedOnYearFinal, setGradeBasedOnYearFinal] = useState<any>([]);
    const [gradeSectionList, setGradeSectionList] = useState<any>([]);
    const [academicYearFinal, setAcademicYearFinal] = useState<any>([]);
    const [sectionList, setSectionList] = useState<any>([]);
    const [sectionBasedOnGrade, SetsectionBasedOnGrade] = useState<any>([]);
    const [addSection, setAddSection] = useState<any>("");
    const [filterParticularYear, setFilterParticularYear] = useState<any>([]);
    const [searchGradeId, setSearchGradeId] = useState<any>("");

    const [actualGrade, setActualGrade] = useState<any>([])

    console.log(toSection);
    // useEffect(() => {
    //     if (gradeSectionList && gradeSectionList.length) {
    //         let mySet1 = new Set();
    //         gradeSectionList.forEach((element: any) => {
    //             mySet1.add(element.academic_year);
    //         });
    //         console.log(mySet1);
    //         setAcademicYearFinal([...mySet1]);
    //         handleSearch(gradeSectionList, gradeSectionList[0].academic_year);
    //     }
    // }, [gradeSectionList]);

    // useEffect(() => {
    //     if (filterParticularYear && filterParticularYear.length) {
    //         let mySet1 = new Set();
    //         filterParticularYear.forEach((element: any) => {
    //             mySet1.add(element.grade);
    //         });
    //         setGradeBasedOnYearFinal([...mySet1]);
    //         handleSectionSearch(filterParticularYear, filterParticularYear[0].grade);
    //     }
    // }, [filterParticularYear]);

    const handleSubmit = (e: any) => {
        const form = e.currentTarget;
        getAccessToken();
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        }
        setValidated(true);
          // student_name: studentName,
            // DOB: dateofBirth,
            // gender: gender,
            // email: email,
            // admission_date: moment(admissionDate).format("L"),
            // grade_id:45,
            // previous_school_info: previousSchoolInfo,
            // father_name: fatherName,
            // father_occupation: fatherOccupation,
            // address: address,
            // phone_number: phoneNo,
            // alt_phone_number: alterPhoneno,
            // admission_no: admissionNo,
            // from_grade_id: fromGrade,
            // student_type: "DaysScholer",
        Axios.post(`${baseUrl}newAdmission`, {
    "student_name":"mohan",
    "DOB":"2021-11-30",
    "gender":"male",
    "email":"asain@gmail.com",
    "admission_date":"2021-9-24",
    "grade_id":1,
    "previous_school_info":"KKH",
    "father_name":"Mohan",
    "father_occupation":"daily wages",
    "address":"kamachi street",
    "phone_number":"7856706078",
    "alt_phone_number":"7856706078",
    "admission_no":24,
    "from_grade_id":"IV",
    "student_type":"Hostal"
        })
            .then((response: any) => {
                console.log(response);
                return response;
            })
            .catch((error) => {
                return error;
            });
    };
    // const handleChangeMobile = (e: any) => {
    //     const re = /^[0-9\b]+$/; //rules
    //     if (e.target.value === "" || re.test(e.target.value)) {
    //         setPhoneno(e.target.value);
    //     }
    // };
    // const handleChangeMobileAlter = (e: any) => {
    //     const re = /^[0-9\b]+$/; //rules
    //     if (e.target.value === "" || re.test(e.target.value)) {
    //         setAlterPhoneno(e.target.value);
    //     }
    // };
  
    useEffect(() => {
        getAccessToken();
        Axios.get(`${baseUrl}gradeSection`)
            .then((res: any) => {
                console.log(res.data.data);
                setGradeSectionList(res.data.data);
            })
            .catch((error) => console.log(error));
    }, []);

    useEffect(() => {
        getAccessToken();
        Axios.get(`${baseUrl}year`)
            .then((res: any) => {
                setAcademicYearFinal(res.data.data);
            })
            .catch((error) => console.log(error));
    }, []);

    const handleGradeFilter = (gradeSectionList: any, searchInput: any) => {
        console.log(gradeSectionList, searchInput);
        setSearchGradeId("");
        setAcademicYear(searchInput);
        let resultData:any = [];
        gradeSectionList.forEach((element: any) => {
          if(searchInput == element.academic_year_id){
            resultData.push(element);
          }
        })
        console.log(resultData,"grade")
        const ids = resultData.map((data: any) => data.grade);
        const filtered = resultData.filter(({ grade }: any, index: any) => !ids.includes(grade, index + 1));
        setAddGrade(filtered);
        setSearchGradeId(filtered[0].grade_section_id);
        handleSectionSearch(resultData,filtered[0].grade)
        setActualGrade(resultData)
    };

    console.log(gradeSectionList)
    const handleSectionSearch = (gradeSectionList: any, searchInput: any) => {
        console.log(gradeSectionList, "++", searchInput);
        setAddSection("");
        setAcademicYear(searchInput);
        let resultData = gradeSectionList.filter((obj: any) =>
            Object.values(obj)
                .flat()
                .some((v) => `${v}`.toLowerCase().includes(`${searchInput}`.toLowerCase()))
        );
        let tempArr:any[] = [];
        
        resultData.forEach((element: any) => {
         // console.log(element.grade);
          if(searchInput == element.grade)
          {
            tempArr.push(element);
          }
        })
        // const ids = resultData.map((data: any) => data.section);
        // const filtered = resultData.filter(({ section }: any, index: any) => !ids.includes(section, index + 1));
        // console.log(filtered);
        console.log(tempArr)
        SetsectionBasedOnGrade(tempArr);
        //setAddSection(tempArr[0].section);
    };

    console.log(addGrade);

    // const handleSearch = (gradeSectionList: any, searchInput: any) => {
    //     console.log(gradeSectionList, "++", searchInput);
    //     setAddGrade("");
    //     setAcademicYear(searchInput);
    //     let mySet1 = new Set();
    //     let resultData = gradeSectionList.filter((obj: any) =>
    //         Object.values(obj)
    //             .flat()
    //             .some((v) => `${v}`.toLowerCase().includes(`${searchInput}`.toLowerCase()))
    //     );

    //     let selectedYearArr: any = [];
    //     resultData.forEach((element: any) => {
    //         selectedYearArr.push(element);
    //         mySet1.add(element.grade);
    //     });
    //     setGradeBasedOnYearFinal([...mySet1]);
    //     setFilterParticularYear(selectedYearArr);
    //     setAddGrade(resultData[0].grade);
    // };

    var date = new Date();
    var formatedDate = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;

    // console.log(academicYear);
    console.log(academicYearFinal);

    return (
        <div>
            <div id="page-top">
                <div id="wrapper">
                    <Sidebar></Sidebar>
                    <div id="content-wrapper" className="d-flex flex-column">
                        <div id="content">
                            <Navbar></Navbar>
                            <div className="container-fluid">
                                <div className="col-xl-11 m-auto">
                                    <div className="card-header">
                                        <h4 className="card-title font-weight text-center" style={{ color: "red" }}>
                                            New Admission
                                        </h4>
                                    </div>
                                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="card-body">
                                                    <Form.Group className="form-group row" controlId="validationCustom01">
                                                        <Form.Label className="col-md-5 col-form-label text-md-right">
                                                            Admission No
                                                            <span className="text-danger"> * </span>
                                                        </Form.Label>
                                                        <div className="col-md-6">
                                                            <InputGroup hasValidation>
                                                                <Form.Control
                                                                    required
                                                                    type="text"
                                                                    placeholder="Admission No"
                                                                    onChange={(e) => setAdmissionno(e.target.value)}
                                                                />
                                                                <Form.Control.Feedback type="invalid">Please Enter Admission No</Form.Control.Feedback>
                                                            </InputGroup>
                                                        </div>
                                                    </Form.Group>
                                                    <Form.Group className="form-group row" controlId="validationCustom01">
                                                        <Form.Label className="col-md-5 col-form-label text-md-right">
                                                            Student Name
                                                            <span className="text-danger"> * </span>
                                                        </Form.Label>
                                                        <div className="col-md-6">
                                                            <InputGroup hasValidation>
                                                                <Form.Control
                                                                    required
                                                                    type="name"
                                                                    placeholder="Student Name"
                                                                    onChange={(e) => setStudentname(e.target.value)}
                                                                />
                                                                <Form.Control.Feedback type="invalid">Please Enter Student Name</Form.Control.Feedback>
                                                            </InputGroup>
                                                        </div>
                                                    </Form.Group>
                                                    <Form.Group className="form-group row" controlId="validationgrade">
                                                        <Form.Label className="col-md-5 col-form-label text-md-right">
                                                            From Grade<span className="text-danger"> </span>
                                                        </Form.Label>
                                                        <div className="col-md-6">
                                                            <InputGroup hasValidation>
                                                                <Form.Select onChange={(e) => setFromgrade(e.target.value)} required>
                                                                    <option>I</option>
                                                                    <option>II</option>
                                                                    <option>III</option>
                                                                    <option>IV</option>
                                                                    <option>V</option>
                                                                    <option>VI</option>
                                                                    <option>VII</option>
                                                                    <option>VIII</option>
                                                                    <option>IX</option>
                                                                    <option>X</option>
                                                                    <option>XI</option>
                                                                    <option>XII</option>
                                                                </Form.Select>
                                                                <Form.Control.Feedback type="invalid">Please Enter Grede</Form.Control.Feedback>
                                                            </InputGroup>
                                                        </div>
                                                    </Form.Group>
                                                    <Form.Group className="form-group row" controlId="validationDate">
                                                        <Form.Label className="col-md-5 col-form-label text-md-right">
                                                            DOB
                                                            <span className="text-danger"> * </span>
                                                        </Form.Label>
                                                        <div className="col-md-6">
                                                            <InputGroup hasValidation>
                                                                <Form.Control type="date" onChange={(e) => setDateofbirth(e.target.value)} required />
                                                                <Form.Control.Feedback type="invalid">Please Enter DateofBirth</Form.Control.Feedback>
                                                            </InputGroup>
                                                        </div>
                                                    </Form.Group>
                                                    <Form.Group className="form-group row">
                                                        <Form.Label className="col-md-5 col-form-label text-md-right">
                                                            Gender
                                                            <span className="text-danger"> * </span>
                                                        </Form.Label>
                                                        <div className="col-md-6">
                                                            <div key={`inline-radio`} className="mb-3">
                                                                <Form.Check
                                                                    inline
                                                                    required
                                                                    label="Male"
                                                                    name="group1"
                                                                    value="Male"
                                                                    onChange={(e) => setGender(e.target.value)}
                                                                    type="radio"
                                                                    id={`inline-radio-1`}
                                                                />
                                                                <Form.Check
                                                                    inline
                                                                    label="Female"
                                                                    name="group1"
                                                                    type="radio"
                                                                    value="Female"
                                                                    onChange={(e) => setGender(e.target.value)}
                                                                    id={`inline-radio-2`}
                                                                />
                                                            </div>
                                                        </div>
                                                    </Form.Group>
                                                    <Form.Group className="form-group row" controlId="formBasicEmail">
                                                        <Form.Label className="col-md-5 col-form-label text-md-right">
                                                            Email
                                                            <span className="text-danger"> * </span>
                                                        </Form.Label>
                                                        <div className="col-md-6">
                                                            <InputGroup hasValidation>
                                                                <Form.Control
                                                                    type="email"
                                                                    onChange={(e) => setEmail(e.target.value)}
                                                                    placeholder="Email"
                                                                    required
                                                                />
                                                                <Form.Control.Feedback type="invalid">Please Enter Email</Form.Control.Feedback>
                                                            </InputGroup>
                                                        </div>
                                                    </Form.Group>
                                                    <Form.Group className="form-group row" controlId="Admission Date">
                                                        <Form.Label className="col-md-5 col-form-label text-md-right">
                                                            Admission Date
                                                            <span className="text-danger"> * </span>
                                                        </Form.Label>
                                                        <div className="col-md-6">
                                                            <InputGroup hasValidation>
                                                                <Form.Control
                                                                    type="date"
                                                                    value={moment(admissionDate).format("YYYY-MM-DD")}
                                                                    onChange={(e) => setAdmissiondate(e.target.value)}
                                                                />
                                                                {/* <Form.Control type="date" value="{formatedDate}"onChange={(e) => setAdmissiondate(e.target.value)} required/> */}
                                                                <Form.Control.Feedback type="invalid">Please Enter Admission Date</Form.Control.Feedback>
                                                            </InputGroup>
                                                        </div>
                                                    </Form.Group>
                                                    <Form.Group className="form-group row" controlId="formBasicEmail">
                                                        <Form.Label className="col-md-5 col-form-label text-md-right">
                                                            Academic Year
                                                            <span className="text-danger"> * </span>
                                                        </Form.Label>
                                                        <div className="col-md-6">
                                                            <InputGroup hasValidation>
                                                                <Form.Select
                                                                    onChange={(e: any) => {
                                                                        handleGradeFilter(gradeSectionList, e.target.value);
                                                                    }}
                                                                    required
                                                                >
                                                                    <option hidden>--Academic Year--</option>
                                                                    {academicYearFinal &&
                                                                        academicYearFinal.length &&
                                                                        academicYearFinal.map((values: any) => {
                                                                            return <option value={values.year_id}>{values.academic_year}</option>;
                                                                        })}
                                                                </Form.Select>
                                                                <Form.Control.Feedback type="invalid">Please Enter Academic Year</Form.Control.Feedback>
                                                            </InputGroup>
                                                        </div>
                                                    </Form.Group>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="card-body">
                                                    <Form.Group className="form-group row" controlId="formBasicEmail">
                                                        <Form.Label className="col-md-5 col-form-label text-md-right">
                                                            To Grade
                                                            <span className="text-danger"> * </span>
                                                        </Form.Label>
                                                        <div className="col-md-6">
                                                            <InputGroup hasValidation>
                                                                <Form.Select
                                                                    //value={searchGradeId}
                                                                    onChange={(e: any) => {
                                                                        handleSectionSearch(actualGrade, e.target.value);
                                                                    }}
                                                                >
                                                                    {addGrade &&
                                                                        addGrade.length &&
                                                                        addGrade.map((values: any, index: any) => {
                                                                            return <option value={values.grade}>{values.grade}</option>;
                                                                        })}
                                                                </Form.Select>
                                                                <Form.Control.Feedback type="invalid">Please Enter Grade</Form.Control.Feedback>
                                                            </InputGroup>
                                                        </div>
                                                    </Form.Group>
                                                    <Form.Group className="form-group row" controlId="formBasicEmail">
                                                        <Form.Label className="col-md-5 col-form-label text-md-right">
                                                            To Section
                                                            <span className="text-danger"> * </span>
                                                        </Form.Label>
                                                        <div className="col-md-6">
                                                            <InputGroup hasValidation>
                                                                <Form.Select
                                                                    onChange={(e) => {
                                                                        setToSection(e.target.value);
                                                                    }}
                                                                    required
                                                                >
                                                                    {sectionBasedOnGrade &&
                                                                        sectionBasedOnGrade.length &&
                                                                        sectionBasedOnGrade.map((values: any) => {
                                                                            return <option value={values.grade_section_id}> {values.section}</option>;
                                                                        })}
                                                                </Form.Select>
                                                                <Form.Control.Feedback type="invalid">Please Enter Section</Form.Control.Feedback>
                                                            </InputGroup>
                                                        </div>
                                                    </Form.Group>
                                                    <Form.Group className="form-group row" controlId="floatingTextarea">
                                                        <Form.Label className="col-md-5 col-form-label text-md-right">
                                                            Previous School Info
                                                            <span className="text-danger"> * </span>
                                                        </Form.Label>
                                                        <div className="col-md-6">
                                                            <InputGroup hasValidation>
                                                                <Form.Control
                                                                    as="textarea"
                                                                    rows={2}
                                                                    onChange={(e) => setPreviousSchoolInfo(e.target.value)}
                                                                    required
                                                                />
                                                                <Form.Control.Feedback type="invalid">Please Enter Previous School Info</Form.Control.Feedback>
                                                            </InputGroup>
                                                        </div>
                                                    </Form.Group>
                                                    <Form.Group className="form-group row" controlId="formBasicEmail">
                                                        <Form.Label className="col-md-5 col-form-label text-md-right">
                                                            Father Name
                                                            <span className="text-danger"> * </span>
                                                        </Form.Label>
                                                        <div className="col-md-6">
                                                            <InputGroup hasValidation>
                                                                <Form.Control
                                                                    type="text"
                                                                    placeholder="Father Name"
                                                                    onChange={(e) => setFatherName(e.target.value)}
                                                                    required
                                                                />
                                                                <Form.Control.Feedback type="invalid">Please Enter Fathername</Form.Control.Feedback>
                                                            </InputGroup>
                                                        </div>
                                                    </Form.Group>
                                                    <Form.Group className="form-group row" controlId="formBasicEmail">
                                                        <Form.Label className="col-md-5 col-form-label text-md-right">
                                                            Father Occupation
                                                            <span className="text-danger"> * </span>
                                                        </Form.Label>
                                                        <div className="col-md-6">
                                                            <InputGroup hasValidation>
                                                                <Form.Control
                                                                    type="text"
                                                                    placeholder="Father Occupation"
                                                                    onChange={(e) => setFatherOccupation(e.target.value)}
                                                                    required
                                                                />
                                                                <Form.Control.Feedback type="invalid">Please Enter FatherOccupation</Form.Control.Feedback>
                                                            </InputGroup>
                                                        </div>
                                                    </Form.Group>
                                                    <Form.Group className="form-group row" controlId="floatingTextarea">
                                                        <Form.Label className="col-md-5 col-form-label text-md-right">
                                                            Address
                                                            <span className="text-danger"> * </span>
                                                        </Form.Label>
                                                        <div className="col-md-6">
                                                            <InputGroup hasValidation>
                                                                <Form.Control as="textarea" onChange={(e) => setAddress(e.target.value)} required />
                                                                <Form.Control.Feedback type="invalid">Please Enter Address</Form.Control.Feedback>
                                                            </InputGroup>
                                                        </div>
                                                    </Form.Group>
                                                    <Form.Group className="form-group row" controlId="formBasicEmail">
                                                        <Form.Label className="col-md-5 col-form-label text-md-right">
                                                            Phone No
                                                            <span className="text-danger"> * </span>
                                                        </Form.Label>
                                                        <div className="col-md-6">
                                                            <Form.Control
                                                                onChange={(e) => setPhoneno(e.target.value)}
                                                                required
                                                                type="text"
                                                                pattern="[0-9]*"
                                                                placeholder="Phone No"
                                                            />
                                                        </div>
                                                    </Form.Group>
                                                    <Form.Group className="form-group row" controlId="formBasicEmail">
                                                        <Form.Label className="col-md-5 col-form-label text-md-right">
                                                            Alt. Phone No
                                                            <span className="text-danger"> * </span>
                                                        </Form.Label>
                                                        <div className="col-md-6">
                                                            <Form.Control
                                                                onChange={(e) => setAlterPhoneno(e.target.value)}
                                                                type="text"
                                                                pattern="[0-9]*"
                                                                placeholder="Alt. Phone No"
                                                            />
                                                        </div>
                                                    </Form.Group>
                                                </div>
                                            </div>
                                            <div className="card-footerss">
                                                <Button className="btn btn-danger float-right" type="submit">
                                                    Submit
                                                </Button>
                                            </div>
                                        </div>
                                    </Form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Studentadd;
