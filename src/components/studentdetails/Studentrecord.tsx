import React, { useState, ChangeEvent, useEffect } from "react";
import Sidebar from "../Layouts/Sidebar";
import Navbar from "../Layouts/Navbar";
import Feesdetails from "./Feesdetails";
import Academicfees from "./Academicfees";
import { Row, Col, Form, Button, Container, Table, Card, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios, { AxiosResponse } from "axios";
import { baseUrl } from "../../index";
import { getAccessToken } from "../../config/getAccessToken";
import { arrayBuffer } from "stream/consumers";
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
	const [statusStudentDetailsEdit, setStatusStudentDetailsEdit] = useState<any>({});
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
	const [GotAutoSearchOut, setGotAutoSearchOut] = useState<any>([]);
  const [allGotFinalData,setAllGotFinalData]=useState<any>([])
	//manage state  Autosearch
	//manage state  academicYear
	//manage state  gradea
	//manage state  section
  console.log(academicYear);
  
  
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
			searchby: value.student_id,
			academicyear: value.academic_year,
		});
		getAccessToken();
		axios
			.post(`${baseUrl}autoSearch`, {
				searchby: value.student_id,
				academic_year: value.academic_year,
			})
			.then((response: AxiosResponse) => {
				console.log(response.data.data);
				setMainSearch(response.data.data);
			});
	};
  // console.log(mainsearchh[0][1]);
  


	useEffect(() => {
		let AllRoundData: any[] = [];
		if (mainsearchh && mainsearchh.length > 0) {
			console.log(mainsearchh);
			mainsearchh.forEach((allData: any) => {
				console.log(allData[0]);
				console.log(allData[1]);
				let newData = allData[1];
				let ParticularStudentData: any = [];
				let ParticularStudentBalance: any = [];
				newData.forEach((element: any) => {
					console.log(element);
					if (element && element.balance) {
						ParticularStudentBalance.push({ Allbalance: element.balance });
					}
					if (element && element.studentData && Object.keys(element.studentData).length > 0) {
						console.log(element.studentData);
						if (ParticularStudentData && ParticularStudentData.length == 0) {
							ParticularStudentData.push(element.studentData);
						}
					}
				});
				let newFinalArr = [{ ...ParticularStudentBalance[0], ...ParticularStudentData[0] }];
				AllRoundData.push(newFinalArr[0]);
      });
      console.log(AllRoundData);
      setAllGotFinalData(AllRoundData)
			// console.log(mainsearchh[0]);
			// console.log(mainsearchh[0][0]);
			// console.log(mainsearchh[0][1]);
		}
	}, [mainsearchh]);

	const Searchauto = () => {
		if (Autosearch.length > 0) {
			getAccessToken();
			axios
				.post(`${baseUrl}autoSearch`, {
					search: Autosearch,
				})
				.then((response: AxiosResponse) => {
					setSuggest(response.data.data);
					console.log(response.data.data);
					setIsComponentVisible(true);
				});
		}
  };
  
	const getAllAcademicYears = () => {
		getAccessToken();
		axios
			.get(`${baseUrl}year`)
			.then((res: any) => {
        setAcademicYearFinal(res.data.data);
				console.log(res.data.data);
			})
			.catch((e: any) => {
				console.log(e);
			 
			});
	};
  useEffect(() => {
		getAllAcademicYears();
	 
  }, []);
  console.log(academicYearFinal);
  console.log(gradeSectionList);
  
  function YearId(gradedata: any) {
		// console.log(gradedata);
    var matchedyearid: any = gradeSectionList && gradeSectionList.length && gradeSectionList.filter((data: any) => data.academic_year_id=== gradedata.year_id);
    console.log(matchedyearid)
		// let combindobject = { ...gradedata, ...matchedyearid[0] };
		// GetFinalYearData.push(combindobject);
		// console.log(GetFinalYearData);
		// setDisplayFinalData(GetFinalYearData);
		//setFinalAcademicYr(GetFinalYearData);
		// console.log(matchedyearid);
  }
  
  useEffect(() => {
	 
		academicYearFinal &&
    academicYearFinal.length &&
    academicYearFinal.map((data: any) => {
				YearId(data);
			});
	});
	const mainsearch = () => {
		getAccessToken();
		axios.get(`${baseUrl}student_admissions_search/search_student?academic_year=${acas}&grade_id=${gradea}&section=${section}`).then((response: AxiosResponse) => {
			setMainSearch(response.data);
			// console.log(response.data);
		});
	};
	useEffect(() => {
		getAccessToken();
		axios
			.get(`${baseUrl}gradeSection`)
			.then((res: any) => {
        setGradeSectionList(res.data);
        console.log(res.data.data)
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
				.some((v) => `${v}`.toLowerCase().includes(`${searchInput}`.toLowerCase()))
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
  console.log(gradeSectionList);
  
	const handlesection = (sectionList: any, searchInput: any) => {
		setAddGrade("");
		setAcademicYear(searchInput);
		let mySet1 = new Set();
		let resultData = gradeSectionList.filter((obj: any) =>
			Object.values(obj)
				.flat()
				.some((v) => `${v}`.toLowerCase().includes(`${searchInput}`.toLowerCase()))
		);
		let selectedYearArr: any = [];
		resultData.forEach((element: any) => {
			selectedYearArr.push(element);
			mySet1.add(element.section);
		});
		SetsectionBasedOnGrade([...mySet1]);
		setAddSection(resultData[0].section);
	};


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
													onChange={(e: any) => setAutoSearch(e.target.value.trim())}
												/>
												<Card
													style={{
														cursor: "pointer",
														background: "Black",
														color: "white",
													}}>
													<ListGroup variant="flush" style={{ marginLeft: "10px" }}>
														{suggest.length > 0 && isComponentVisible && (
															<div>
																{suggest.map((item: any, i: any) => (
																	<div key={i} onClick={() => onSuggesthandler(item)}>
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
                              
													}}>
												 
													{academicYearFinal &&
														academicYearFinal.length &&
														academicYearFinal.map((academic: any) => {
                              // console.log(academicYear)
															return <option>{academic.academic_year}</option>;
														})}
												</Form.Select>
											</Col>
											<Col md={2}>
												<Form.Select
													aria-label="Default select example"
													onChange={(e) => {
														setGradea(e.target.value);
														handlesection(filterParticularYear, e.target.value);
													}}>
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
												<Form.Select aria-label="Default select example" onChange={(e) => setsection(e.target.value)}>
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
                               academicYear();
														}}>
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
													{allGotFinalData && allGotFinalData.length > 0 ? (
														allGotFinalData.map((values: any, index: any) => {
															//   {console.log(values)}
															return (
																<>
																	<tr key={index}>
																		<td>
																			{" "}
																			<Link to="/StudentprofileSearch">{values.student_name}</Link>
																		</td>
																		{/* <td>{values.studentData.student_id}</td>
																	<td>{values.studentData.phone_number}</td>
																	<td>{values.studentData.grade}</td> */}
																		<td>{values.student_id}</td>
																		<td>{values.phone_number}</td>
																		<td>{values.grade}</td>
																		<td>{values.section}</td>
																		<td>{values.balance && values.balance > 0 ? "Unpaid" : "Paid"}</td>
																	</tr>
																</>
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
