import React,{useState, useEffect} from "react";
import Navbar from "../Layouts/Navbar";
import Sidebar from "../Layouts/Sidebar";
import "../../App.css";
import { Form, Button,InputGroup } from "react-bootstrap";
import Feedback from 'react-bootstrap/Feedback';
import Axios from "axios";
import {baseUrl} from "../../index";
import {getAccessToken} from "../../config/getAccessToken"
import moment from 'moment';
const Studentadd = () => {
   const [validated, setValidated] = useState(false);
   const [year, setYear] = useState<any>('');
   const [getYear, setacedamic] = useState<any>('');

    const [admissionNo, setAdmissionno] = useState<any>('');
    const [studentName,setStudentname] = useState<any>('');
    const [fromGrade,setFromgrade] = useState<any>('');
    const [dateofBirth,setDateofbirth] = useState<any>('');
    const [gender,setGender] = useState<any>('');
    const [email,setEmail] = useState<any>('');
    const [academicYear,setAcademicYear]=useState<any>('');
    const [toGrade,setToGrade]=useState<any>('');
    const [admissionDate,setAdmissiondate]=useState<any>(new Date());
    const [toSection,setToSection]=useState<any>('');
    const [previousSchoolInfo,setPreviousSchoolInfo]=useState<any>('');
    const [fatherName,setFatherName]=useState<any>('');
    const [fatherOccupation,setFatherOccupation] = useState<any>('');
    const [address,setAddress] = useState<any>('');
    const [phoneNo,setPhoneno] = useState<any>('');
    const [alterPhoneno,setAlterPhoneno] = useState<any>('');


     const [addGrade, setAddGrade] = useState("");
    const [gradeBasedOnYearFinal, setGradeBasedOnYearFinal] = useState<any>([]);
    const [gradeSectionList, setGradeSectionList] = useState<any>([]);
    const [academicYearFinal, setAcademicYearFinal] = useState<any>([]);
    const [sectionList, setSectionList] = useState<any>([]);
    const [sectionBasedOnGrade, SetsectionBasedOnGrade] = useState<any>([]);
    const [addSection, setAddSection] = useState("");



    useEffect(() => {
      if (gradeSectionList && gradeSectionList.length) {
          let mySet1 = new Set();
          gradeSectionList.forEach((element: any) => {
              mySet1.add(element.academic_year);
          });
          setAcademicYearFinal([...mySet1]);
          handleSearch(gradeSectionList, gradeSectionList[0].academic_year);
       }
      console.log(gradeSectionList);
  }, [gradeSectionList]);

    console.log(admissionDate)
    const handleSubmit = (e:any) => {

      const form = e.currentTarget;
      getAccessToken();
      if (form.checkValidity() === false) {
        e.preventDefault();
        e.stopPropagation();
      }
      setValidated(true);
      const register:any =  {
        "student_name": studentName,
        "DOB": dateofBirth,
        "gender": gender,
        "email": email,
        "admission_date": admissionDate,
        "academic_year": academicYear,
        "grade_id": "I",
        "section": "A",
        "previous_school_info": previousSchoolInfo,
        "father_name": fatherName,
        "father_occupation": fatherOccupation,
        "address": address,
        "phone_number": phoneNo,
        "alt_phone_number": "8072282551",
        
        "admission_no": admissionNo
      }
    
        console.log(register)
        Axios.post(`${baseUrl}student_admission/new_student`, register
        )
			  .then((response:any) => {
        console.log(response);
 				return  response;
			})
			.catch((error) => {
				return  error;
			});
    };
     
    const handleChangeMobile = (e:any) => {
      const re = /^[0-9\b]+$/; //rules
      if (e.target.value === "" || re.test(e.target.value)) {
        setPhoneno(e.target.value);
      }
    }
  
      const handleChangeMobileAlter = (e:any) => {
        const re = /^[0-9\b]+$/; //rules
        if (e.target.value === "" || re.test(e.target.value)) {
          setAlterPhoneno(e.target.value);
        }
      }
      const grade = (newArrval:any) =>{
        setYear([...newArrval]);
 }
      useEffect(() => {
        getAccessToken();
        Axios.get(`${baseUrl}grade_section/show_all`)
          .then((res:any) => {
            console.log("Getting from ::::", res.data);
            setGradeSectionList(res.data.grade_sections);
          })
          .catch((error) => console.log(error));
      }, []);


        const handleSearch = (gradeSectionList: any, searchInput: any) => {
        console.log(gradeSectionList,"++",searchInput)
        setAddGrade("");
        setAcademicYear(searchInput);
        let mySet1 = new Set();
        let resultData = gradeSectionList.filter((obj: any) =>

            Object.values(obj)
                .flat()
                .some((v) => `${v}`.toLowerCase().includes(`${searchInput}`.toLowerCase()))
        );

        resultData.forEach((element: any) => {
            mySet1.add(element.grade);
        });
        setGradeBasedOnYearFinal([...mySet1]);
        setAddGrade(resultData[0].grade);

    };

    const handleSectionSearch = (sectionList: any, searchInput: any) => {
      console.log(sectionList,"++",searchInput)
      setAddGrade("");
      setAcademicYear(searchInput);
      let mySet1 = new Set();
      let resultData = sectionList.filter((obj: any) =>

          Object.values(obj)
              .flat()
              .some((v) => `${v}`.toLowerCase().includes(`${searchInput}`.toLowerCase()))
      );

      resultData.forEach((element: any) => {
          mySet1.add(element.section);
      });
      SetsectionBasedOnGrade([...mySet1]);
      setAddSection(resultData[0].section);

  };
         console.log(sectionBasedOnGrade);
 
     var date = new Date();
     var formatedDate = `${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()}`
     console.log(formatedDate)
 
  return (
    <div>
      <div id="page-top">
        <div id="wrapper">
        <Sidebar data={"Stu_add"}></Sidebar>
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              <Navbar></Navbar>
              <div className="container-fluid">
                <div className="col-xl-11 m-auto">
                  <div className="card-header">
                    <h4
                      className="card-title font-weight text-center"
                      style={{ color:"red"}}
                    >
                      New Admission
                    </h4>
                  </div>

                  <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="card-body">
                          <Form.Group
                            className="form-group row" controlId="validationCustom01"
                          >
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

                          <Form.Group
                            className="form-group row"
                            controlId="validationCustom01"
                          >
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

                          <Form.Group
                            className="form-group row"
                            controlId="validationgrade"
                          >
                            <Form.Label className="col-md-5 col-form-label text-md-right"> 
                              From Grade<span className="text-danger"> </span>
                            </Form.Label>
                            <div className="col-md-6">
                            <InputGroup hasValidation>
                              <Form.Select onChange={(e) => setFromgrade(e.target.value)} required>
  
                                	{
								 gradeBasedOnYearFinal&&
                 gradeBasedOnYearFinal.length &&
                 gradeBasedOnYearFinal.map((grade: any) => {
                    // console.log(academicYear)
										return <option>{grade}</option>;
									})}
                              </Form.Select>
                              <Form.Control.Feedback type="invalid">Please Enter Grede</Form.Control.Feedback>
                              </InputGroup>
                            </div>
                          </Form.Group>

                          <Form.Group
                            className="form-group row"
                            controlId="validationDate"
                          >
                            <Form.Label className="col-md-5 col-form-label text-md-right">
                              DOB
                              <span className="text-danger"> * </span>
                            </Form.Label>
                            <div className="col-md-6">
                            <InputGroup hasValidation>
                              <Form.Control type="date" onChange={(e) => setDateofbirth(e.target.value)} required/>
                              <Form.Control.Feedback type="invalid">Please Enter DateofBirth</Form.Control.Feedback>

                              </InputGroup>
                            </div>
                          </Form.Group>

                          <Form.Group
                            className="form-group row"
                            
                          >
                            <Form.Label className="col-md-5 col-form-label text-md-right">
                              Gender
                              <span className="text-danger"> * </span>
                            </Form.Label>
                            <div className="col-md-6">
                            <div key={`inline-radio`}  className="mb-3">
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

                          <Form.Group
                            className="form-group row"
                            controlId="formBasicEmail"
                          >
                            <Form.Label className="col-md-5 col-form-label text-md-right">
                              Email
                              <span className="text-danger"> * </span>
                            </Form.Label>
                            <div className="col-md-6">
                            <InputGroup hasValidation>
                              <Form.Control type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
                              <Form.Control.Feedback type="invalid">Please Enter Email</Form.Control.Feedback>
                              </InputGroup>
                            </div>
                          </Form.Group>

                          <Form.Group
                            className="form-group row"
                            controlId="Admission Date"
                          >
                            <Form.Label className="col-md-5 col-form-label text-md-right">
                              Admission Date
                              <span className="text-danger"> * </span>
                            </Form.Label>
                            <div className="col-md-6">
                            <InputGroup hasValidation>
                            <Form.Control type="date"   value={moment(admissionDate).format("YYYY-MM-DD")} onChange={(e) => setAdmissiondate(e.target.value)} />

                              {/* <Form.Control type="date" value="{formatedDate}"onChange={(e) => setAdmissiondate(e.target.value)} required/> */}
                              <Form.Control.Feedback type="invalid">Please Enter Admission Date</Form.Control.Feedback>
                              
                              </InputGroup>
                            </div>
                          </Form.Group>

                          <Form.Group
                            className="form-group row"
                            controlId="formBasicEmail"
                          >
                            <Form.Label className="col-md-5 col-form-label text-md-right">
                              Academic Year
                              <span className="text-danger"> * </span>
                            </Form.Label>
                            <div className="col-md-6">
                            <InputGroup hasValidation>
                              <Form.Select onChange={(e) => {setAcademicYear(e.target.value);handleSearch(gradeSectionList,e.target.value)}} required>
                                  {
								 academicYearFinal&&
                 academicYearFinal.length &&
                 academicYearFinal.map((academic: any) => {
                    // console.log(academicYear)
										return <option>{academic}</option>;
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
                        <Form.Group
                            className="form-group row"
                            controlId="formBasicEmail"
                          >
                            <Form.Label className="col-md-5 col-form-label text-md-right">
                              To Grade
                              <span className="text-danger"> * </span>
                            </Form.Label>
                            <div className="col-md-6">
                            <InputGroup hasValidation>
                            <Form.Select onChange={(e) => {setFromgrade(e.target.value);handleSectionSearch(gradeSectionList,e.target.value)}} required>
                                {
                              gradeBasedOnYearFinal&&
                              gradeBasedOnYearFinal.length &&
                              gradeBasedOnYearFinal.map((grade: any) => {
                              // console.log(academicYear)
                              return <option>{grade}</option>;
                              })}
                              </Form.Select>
                              <Form.Control.Feedback type="invalid">Please Enter Grade</Form.Control.Feedback>
                              </InputGroup>
                            </div>
                          </Form.Group>

                          <Form.Group
                            className="form-group row"
                            controlId="formBasicEmail"
                          >
                            <Form.Label className="col-md-5 col-form-label text-md-right">
                              To Section
                              <span className="text-danger"> * </span>
                            </Form.Label>
                            <div className="col-md-6">
                            <InputGroup hasValidation>
                              <Form.Select  onChange={(e) => {setToSection(e.target.value);handleSearch(gradeSectionList,e.target.value)}} required>
                             
                              {
                              sectionBasedOnGrade&&
                              sectionBasedOnGrade.length &&
                              sectionBasedOnGrade.map((value: any) => {
                              return <option> {value}</option>;
                              })}
                              </Form.Select>
                              <Form.Control.Feedback type="invalid">Please Enter Section</Form.Control.Feedback>
                              </InputGroup>
                            </div>
                          </Form.Group>

                          <Form.Group
                            className="form-group row"
                            controlId="floatingTextarea"
                          >
                            <Form.Label className="col-md-5 col-form-label text-md-right">
                              Previous School Info
                              <span className="text-danger"> * </span>
                            </Form.Label>
                            <div className="col-md-6">
                            <InputGroup hasValidation>
                              <Form.Control as="textarea" rows={2}   onChange={(e) => setPreviousSchoolInfo(e.target.value)} required/>
                              <Form.Control.Feedback type="invalid">Please Enter Previous School Info</Form.Control.Feedback>
                              </InputGroup>
                            </div>
                          </Form.Group>

                          <Form.Group
                            className="form-group row"
                            controlId="formBasicEmail"
                          >
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

                          <Form.Group
                            className="form-group row"
                            controlId="formBasicEmail"
                          >
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

                          <Form.Group
                            className="form-group row"
                            controlId="floatingTextarea"
                          >
                            <Form.Label className="col-md-5 col-form-label text-md-right">
                              Address
                              <span className="text-danger"> * </span>
                            </Form.Label>
                            <div className="col-md-6">
                            <InputGroup hasValidation>
                              <Form.Control as="textarea"  onChange={(e) => setAddress(e.target.value)} required/>
                              <Form.Control.Feedback type="invalid">Please Enter Address</Form.Control.Feedback>
                              </InputGroup>
                            </div>
                          </Form.Group>

                          <Form.Group
                            className="form-group row"
                            controlId="formBasicEmail"
                          >
                            <Form.Label className="col-md-5 col-form-label text-md-right">
                              Phone No
                              <span className="text-danger"> * </span>
                            </Form.Label>
                            <div className="col-md-6">
                              <Form.Control
                              required
                              type="text"
                               pattern="[0-9]*"
                                placeholder="Phone No"
                              />
                              
                            </div>
                          </Form.Group>
                          <Form.Group
                            className="form-group row"
                            controlId="formBasicEmail"
                          >
                            <Form.Label className="col-md-5 col-form-label text-md-right">
                             Alt. Phone No
                              <span className="text-danger"> * </span>
                            </Form.Label>
                            <div className="col-md-6">
                              <Form.Control
                              required
                                type="text"
                                pattern="[0-9]*"
                                placeholder="Alt. Phone No"  
                              />
                              
                            </div>
                          </Form.Group>
                        </div>
                      </div>
                      <div className="card-footerss">
                        <Button
                          className="btn btn-danger float-right"
                          type="submit">
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
