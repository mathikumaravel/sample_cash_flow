import { useState, useEffect } from "react";
import Sidebar from "../Layouts/Sidebar";
import Navbar from "../Layouts/Navbar";
import { Button, Table, Pagination, Form, Col, Row, Container, Modal, Spinner } from "react-bootstrap";
import axios, { AxiosResponse } from "axios";
import { getAccessToken } from "../../config/getAccessToken";
import { baseUrl } from "../../index";
import { romanLetters } from "../../utils/romanLetters";
import { getAllAcademicYear } from "../../Api/year_api";
import { getAllGradeSectionAdd } from "../../Api/grade_section";
const Grade = () => {
	const [statusGradeEdit, setStatusGradeEdit] = useState(false);
	const [statusGradeAdd, setStatusGradeAdd] = useState(false);
	const [statusList, setStatusList] = useState<any>([]);
	const [statusGrade, setStatusgrade] = useState<any>([]);
	const [statusSection, setStatussection] = useState<any>([]);
	const [allAcademicYear, setAllAcademicYear] = useState<any[]>([]);
	const [clickedGrade, setClickedGrade] = useState<any[]>([]);
	const [academic_year_data, setAcademic_year_data] = useState("");
	const [academic_section, setAcademic_section] = useState("");
	const [datatoDelete, setdatatoDelete] = useState<any>({});

	//Modal Popup
	const [show, setShow] = useState(false);
	const handleClose = () => {
		setShow(false);
		deleteSection(datatoDelete.id, datatoDelete.index);
	};
	const SuddenhandleClose = () => {
		setShow(false);
		setdatatoDelete({});
	};
	const handleShow = () => {
		setShow(true);
	};

	const getAllGradeSectionData = () => {
		axios.get(`${baseUrl}grade_section/show_all?page=1&per_page=100`).then((response: AxiosResponse) => {
			setStatusList(response.data.grade_sections);
		});
	};

	useEffect(() => {
		getAccessToken();
		getAllGradeSectionData();
		getAllAcademicYear()
			.then((res: any) => {
				setAllAcademicYear(res.data.academic_years);
				setAcademic_year_data(res.data.academic_years[0].academic_year);
				console.log(res.data);
			})
			.catch((e: any) => {
				console.log(e);
			});
	}, []);

	const handleSubmit = () => {
		clickedGrade.forEach((element: any) => {
			let sendData = { academic_year: academic_year_data, grade: element, section: academic_section };
			getAccessToken();
			axios.post(`${baseUrl}grade_section/create`, sendData).then((res: any) => {
				setStatusList([]);
				getAllGradeSectionData();
			});
		});
		setStatusGradeAdd(false);
		setClickedGrade([]);
		setAcademic_year_data(allAcademicYear[0].academic_year);
		setAcademic_section("");
	};

	const deleteSection = (gradeid: any, index: any) => {
		getAccessToken();
		axios.delete(`${baseUrl}grade_section?`, { data: { id: gradeid } }).then((res: any) => {
			setStatusList([]);
			getAllGradeSectionData();
			console.log(res.data);
		});
	};

	const callTheAddGrade = (value: any) => {
		let newArr = clickedGrade;
		if (clickedGrade.includes(value)) {
			const index = newArr.indexOf(value);
			if (index > -1) {
				newArr.splice(index, 1);
			}
			setClickedGrade(newArr);
		} else {
			newArr.push(value);
		}
		setClickedGrade(newArr);
	};
	console.log(clickedGrade);

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
									<div className="col-lg-10" style={{ marginLeft: "10%", width: "90%" }}>
										<div className="card mb-3">
											<a style={{ color: "rgb(230, 39, 39)" }}>
												<div className="card-header mb-4 bg-transparent border-1 text-center">
													<h4 className="mb-0 ">
														<i className="far fa-clone pr-1"></i>Grade & Section
													</h4>
													<div style={{ textAlign: "right" }}>
														{!statusGradeAdd ? (
															<Button type="submit" className="btn btn-primary btn-sm btn-save" onClick={() => setStatusGradeAdd(true)}>
																Add
															</Button>
														) : (
															""
														)}
													</div>
												</div>
											</a>
											{!statusGradeAdd ? (
												<div className="card-body">
													<div className="table-responsive">
														<div className="dataTables_wrapper dt-bootstrap4 no-footer">
															<div id="dataTable_filter" className="dataTables_filter">
																<Form.Label htmlFor="inputPassword5" style={{ marginLeft: "75%" }}>
																	Search:
																	<Form.Control type="search" className="form-control form-control-sm" />
																</Form.Label>
															</div>
														</div>
													</div>
													<div className="row">
														<div className="col-sm-12">
															<Table className="table dataTable no-footer" width="100%" style={{ width: "100%" }}>
																<thead>
																	<tr role="row">
																		<th className="sorting_asc">No.</th>
																		<th className="sorting_asc">Year</th>
																		<th className="sorting">Grade</th>
																		<th className="sorting">Section</th>
																		<th className="sorting">Actions</th>
																	</tr>
																</thead>
																<tbody>
																	{statusList && statusList.length ? (
																		statusList.map((data: any, index: any) => {
																			return (
																				<tr>
																					<td className="sorting_1" key={index}>
																						{index + 1}
																					</td>
																					<td>{data.academic_year}</td>
																					<td>{data.grade}</td>
																					<td>{data.section}</td>
																					<td>
																						<Button
																							variant="danger"
																							onClick={() => {
																								// deleteAnAcademicYear(
																								//     values.year_id,
																								//     index
																								// );
																								setdatatoDelete({
																									index: index,
																									year: `${data.academic_year} - ${data.grade} - ${data.section}`,
																									id: data.grade_section_id,
																								});
																								handleShow();
																							}}>
																							Delete
																						</Button>
																					</td>
																				</tr>
																			);
																		})
																	) : (
																		<>
																			<tr style={{ textAlign: "center" }}>
																				<td
																					colSpan={5}
																					style={{
																						textAlign: "center",
																					}}>
																					<Spinner animation="border" variant="danger" />
																				</td>
																			</tr>
																		</>
																	)}
																</tbody>
															</Table>
														</div>
													</div>
													<div style={{ marginLeft: "100px" }}>
														{/* <Pagination>
															<Pagination.First />
															<Pagination.Prev />
															<Pagination.Item>{1}</Pagination.Item>
															<Pagination.Ellipsis />

=======
															<Pagination.Item>{10}</Pagination.Item>
															<Pagination.Item>{11}</Pagination.Item>
															<Pagination.Item active>{12}</Pagination.Item>
															<Pagination.Item>{13}</Pagination.Item>
															<Pagination.Item disabled>{14}</Pagination.Item>

															<Pagination.Ellipsis />
															<Pagination.Item>{20}</Pagination.Item>
															<Pagination.Next />
															<Pagination.Last />
														</Pagination> */}
													</div>
													<Modal show={show} onHide={SuddenhandleClose}>
														<Modal.Header closeButton>
															<Modal.Title>Delete {datatoDelete.year}</Modal.Title>
														</Modal.Header>
														<Modal.Body>
															Are You Sure You What To Delete <b>{datatoDelete.year}</b> ?
														</Modal.Body>
														<Modal.Footer>
															<Button variant="secondary" onClick={SuddenhandleClose}>
																Close
															</Button>
															<Button variant="danger" onClick={handleClose}>
																Delete
															</Button>
														</Modal.Footer>
													</Modal>
												</div>
											) : (
												<>
													<Container>
														<Row>
															<Form.Group as={Row} className="mb-12 pb-4" controlId="formPlaintextPassword">
																<Form.Label
																	column
																	sm="4"
																	style={{
																		display: "flex",
																		justifyContent: "center",
																	}}>
																	Academic Year
																</Form.Label>
																<Col sm="6">
																	<Form.Select
																		onChange={(e: any) => {
																			setAcademic_year_data(e.target.value);
																		}}>
																		{allAcademicYear &&
																			allAcademicYear.length &&
																			allAcademicYear.map((values: any, index: any) => {
																				return <option value={values.academic_year}>{values.academic_year}</option>;
																			})}
																	</Form.Select>
																</Col>
															</Form.Group>
															<Col sm="4" className="mb-4">
																<Form.Label
																	style={{
																		display: "flex",
																		justifyContent: "center",
																	}}>
																	Grade
																</Form.Label>
															</Col>
															<Col sm="6">
																{romanLetters &&
																	romanLetters.length &&
																	romanLetters.map((romanvalues: any, index: any) => {
																		return (
																			<Form.Check
																				inline
																				label={`${romanvalues}`}
																				name="group1"
																				type="checkbox"
																				value={romanvalues}
																				onChange={(e: any) => {
																					console.log(e.target.value);
																					callTheAddGrade(e.target.value);
																				}}
																				id={`inline-checkbox-${index}`}
																				style={{
																					marginTop: "unset !important",
																				}}
																			/>
																		);
																	})}
															</Col>
															<Form.Group as={Row} className="mb-12 pt-4 pb-2" controlId="formPlaintextPassword">
																<Form.Label
																	column
																	sm="4"
																	style={{
																		display: "flex",
																		justifyContent: "center",
																	}}>
																	Section
																</Form.Label>
																<Col sm="6">
																	<Form.Control
																		type="text"
																		onChange={(e: any) => {
																			setAcademic_section(e.target.value);
																		}}
																	/>
																</Col>
															</Form.Group>
														</Row>
													</Container>
													<div className="card-footer">
														<div style={{ display: "flex", justifyContent: "right" }}>
															<Button className="btn  btn-secondary" onClick={() => setStatusGradeAdd(false)}>
																Cancel
															</Button>{" "}
															&nbsp;
															<Button type="submit" className="btn btn-danger btn-save" onClick={() => handleSubmit()}>
																Save
															</Button>
														</div>
													</div>
												</>
											)}
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Grade;
function e(e: any, any: any) {
	throw new Error("Function not implemented.");
}
