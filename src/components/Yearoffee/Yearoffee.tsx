import { useEffect, useState } from "react";
import Sidebar from "../Layouts/Sidebar";
import Navbar from "../Layouts/Navbar";
import { Button, Table, Pagination, Form, Col, Row, Spinner } from "react-bootstrap";
import axios, { AxiosResponse } from "axios";
import { getAccessToken } from "../../config/getAccessToken";
import { baseUrl } from "../../index";

const Yearoffee = () => {
	const [statusFeeDetailsEdit, setStatusFeeDetailsEdit] = useState(false);
	const [statusFeeDetailsAdd, setStatusFeeDetailsAdd] = useState(false);
	const [gradeSectionList, setGradeSectionList] = useState<any>([]);
	const [feeMaster, setAllFeeMaster] = useState<any[]>([]);
	const [feeMasterFinal, setFeeMasterFinal] = useState<any>([]);
	const [gradeBasedOnYearFinal, setGradeBasedOnYearFinal] = useState<any>([]);
	const [feeTypeNameFinal, setFeeTypeMasterNameFinal] = useState<any>([]);

	const [academicYear, setAcademicYear] = useState("");
	const [feeTypeName, setFeeTypeName] = useState("");
	const [addGrade, setAddGrade] = useState("");
	const [amount, setFinalAmount] = useState("");

	const [searchAcademicYear, setSearchAcademicYear] = useState("");
	const [searchGrade, setSearchGrade] = useState("");

	const getAllGradeSectionData = () => {
		getAccessToken();
		axios.get(`${baseUrl}grade_section/show all`).then((response: AxiosResponse) => {
			setGradeSectionList(response.data);
		});
	};

	const getAllFeeMasterData = () => {
		getAccessToken();
		axios.get(`${baseUrl}fee_master/show_all?page=1&per_page=100`).then((response: AxiosResponse) => {
			setAllFeeMaster(response.data.fee_masters);
		});
	};

	useEffect(() => {
		getAllGradeSectionData();
		getAllFeeMasterData();
	}, []);

	useEffect(() => {
		if (gradeSectionList && gradeSectionList.length) {
			let mySet1 = new Set();
			gradeSectionList.forEach((element: any) => {
				mySet1.add(element.academic_year);
			});
			setFeeMasterFinal([...mySet1]);
			handleSearch(gradeSectionList, gradeSectionList[0].academic_year);
		}
	}, [gradeSectionList]);

	console.log(feeMasterFinal);

	useEffect(() => {
		if (feeMasterFinal && feeMasterFinal.length && gradeSectionList && gradeSectionList.length) {
			handleFeeTypeNameSearch(feeMaster, feeMaster[0].academic_year);
		}
	}, [feeMasterFinal, gradeSectionList]);

	const handleSearch = (gradeSectionList: any, searchInput: any) => {
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

	const handleFeeTypeNameSearch = (gradeSectionList: any, searchInput: any) => {
		setFeeTypeName("");
		let mySet1 = new Set();
		let resultData = gradeSectionList.filter((obj: any) =>
			Object.values(obj)
				.flat()
				.some((v) => `${v}`.toLowerCase().includes(`${searchInput}`.toLowerCase()))
		);
		resultData.forEach((element: any) => {
			mySet1.add({ id: element.fee_master_id, name: element.fee_type_name });
		});
		setFeeTypeMasterNameFinal([...mySet1]);
		console.log(resultData);
		if (resultData && resultData.length) {
			setFeeTypeName(resultData[0].fee_master_id);
		}
	};

	const handleSubmit = () => {
		let newfeeTypeName = feeTypeName.toString();
		getAccessToken();
		axios
			.post(`${baseUrl}year_of_fee/create`, {
				academic_year: academicYear,
				grade: addGrade,
				fee_amount: amount,
				fee_master_id: newfeeTypeName,
			})
			.then((res: any) => {
				setStatusFeeDetailsEdit(false);
			});
	};

	useEffect(() => {
		if (searchGrade.length > 0 && searchGrade.length > 0) {
			list_fee_details();
		}
	}, [searchAcademicYear, searchGrade]);

	const list_fee_details = () => {
		getAccessToken();
		axios
			.get(`${baseUrl}year_of_fee/search by grade&year?academic_year=${searchAcademicYear}&grade=${searchGrade}`)
			.then((res: any) => {
				console.log(res.data);
			});
	};

	console.log(gradeBasedOnYearFinal);

	console.log(academicYear, feeTypeName, addGrade, amount);
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
										<div className="col-lg-10" style={{ marginLeft: "10%", width: "90%" }}>
											<div className="card mb-3">
												<a style={{ color: "rgb(230, 39, 39)" }}>
													<div className="card-header mb-4 bg-transparent border-1 text-center">
														<h4 className="mb-0 ">
															<i className="far fa-clone pr-1"></i> Fee Details
														</h4>
														<div style={{ textAlign: "right" }}>
															{!statusFeeDetailsAdd ? (
																<Button
																	type="submit"
																	className="btn btn-primary btn-sm btn-save"
																	onClick={() => setStatusFeeDetailsAdd(true)}>
																	Add
																</Button>
															) : (
																<Button
																	className="btn btn-sm btn-secondary"
																	onClick={() => setStatusFeeDetailsAdd(false)}>
																	Cancel
																</Button>
															)}
														</div>
													</div>
												</a>

												{!statusFeeDetailsAdd ? (
													<div className="container">
														<div className="card-body">
															<div
																style={{
																	position: "relative",
																	marginLeft: "10px",
																}}>
																<table width="100%">
																	<thead>
																		<tr>
																			<th>Academic year </th>
																			<th>Grade</th>
																		</tr>
																	</thead>
																	<tbody>
																		<tr>
																			<td>
																				<div
																					className="form-group"
																					style={{ marginTop: "10px" }}>
																					<Form.Select
																						onChange={(e: any) => {
																							setSearchAcademicYear(
																								e.target.value
																							);
																						}}>
																						{gradeBasedOnYearFinal &&
																							gradeBasedOnYearFinal.length &&
																							gradeBasedOnYearFinal.map(
																								(
																									values: any,
																									index: any
																								) => {
																									return (
																										<option
																											value={
																												values
																											}>
																											{values}
																										</option>
																									);
																								}
																							)}
																					</Form.Select>
																				</div>
																			</td>
																			<td>
																				<div className="form-group">
																					<Form.Select
																						onChange={(e: any) => {
																							setSearchGrade(e.target.value);
																						}}>
																						{gradeBasedOnYearFinal &&
																							gradeBasedOnYearFinal.length &&
																							gradeBasedOnYearFinal.map(
																								(
																									values: any,
																									index: any
																								) => {
																									return (
																										<option
																											value={
																												values
																											}>
																											{values}
																										</option>
																									);
																								}
																							)}
																					</Form.Select>
																				</div>
																			</td>
																			<td></td>
																		</tr>
																	</tbody>
																</table>
															</div>
															<div>
																<div className="dataTables_wrapper dt-bootstrap4 no-footer">
																	<div
																		id="dataTable_filter"
																		className="dataTables_filter">
																		<Form.Label style={{ marginLeft: "78%" }}>
																			Search:
																			<Form.Control
																				type="search"
																				className="form-control form-control-sm"
																			/>
																		</Form.Label>
																	</div>
																</div>

																<div className="row">
																	<div className="col-sm-12">
																		<Table
																			striped
																			bordered
																			hover
																			width="100%"
																			style={{ width: "100%" }}>
																			<thead>
																				<tr role="row">
																					<th
																						className="sorting_asc"
																						style={{ width: "73px" }}>
																						To Academic Year
																					</th>
																					<th
																						className="sorting"
																						style={{ width: "114px" }}>
																						Fee amount
																					</th>
																					<th
																						className="sorting"
																						style={{ width: "63px" }}>
																						Action
																					</th>
																				</tr>
																			</thead>
																			<tbody>
																				<tr>
																					<td
																						style={{ width: "30%" }}
																						className="sorting_1">
																						Miscellaneous Fee
																					</td>
																					<td></td>

																					<td></td>
																				</tr>
																			</tbody>
																		</Table>
																	</div>
																</div>
																<div style={{ marginLeft: "20%" }}>
																	{/* <Pagination>
                                    <Pagination.First />
                                    <Pagination.Prev />
                                    <Pagination.Item>{1}</Pagination.Item>
                                    <Pagination.Ellipsis />

                                    <Pagination.Item>{10}</Pagination.Item>
                                    <Pagination.Item>{11}</Pagination.Item>
                                    <Pagination.Item active>
                                      {12}
                                    </Pagination.Item>
                                    <Pagination.Item>{13}</Pagination.Item>
                                    <Pagination.Item disabled>
                                      {14}
                                    </Pagination.Item>

                                    <Pagination.Ellipsis />
                                    <Pagination.Item>{20}</Pagination.Item>
                                    <Pagination.Next />
                                    <Pagination.Last />
                                  </Pagination> */}
																</div>
															</div>
														</div>
													</div>
												) : (
													<div>
														<Row>
															<>
																<Col sm="4" className="mb-4">
																	<Form.Label style={{ marginLeft: "40px" }}>
																		Academic Year
																	</Form.Label>
																</Col>
																<Col sm="6">
																	<Form.Select
																		onChange={(e: any) => {
																			handleSearch(
																				gradeSectionList,
																				e.target.value
																			);
																			handleFeeTypeNameSearch(
																				feeMaster,
																				e.target.value
																			);
																		}}>
																		{feeMasterFinal &&
																			feeMasterFinal.length &&
																			feeMasterFinal.map(
																				(values: any, index: any) => {
																					return (
																						<option value={values}>
																							{values}
																						</option>
																					);
																				}
																			)}
																	</Form.Select>
																</Col>
															</>
															<Col sm="4" className="mb-4">
																<Form.Label style={{ marginLeft: "40px" }}>
																	Fee Type Name
																</Form.Label>
															</Col>
															<Col sm="6">
																<Form.Select
																	onChange={(e: any) => {
																		setFeeTypeName(e.target.value);
																	}}>
																	{feeTypeNameFinal &&
																		feeTypeNameFinal.length &&
																		feeTypeNameFinal.map(
																			(values: any, index: any) => {
																				return (
																					<option value={values.id}>
																						{values.name}
																					</option>
																				);
																			}
																		)}
																</Form.Select>
															</Col>{" "}
															<Col sm="4" className="mb-4">
																<Form.Label style={{ marginLeft: "40px" }}>
																	Grade
																</Form.Label>
															</Col>
															<Col sm="6">
																<Form.Select
																	onChange={(e: any) => {
																		setAddGrade(e.target.value);
																	}}>
																	{gradeBasedOnYearFinal &&
																		gradeBasedOnYearFinal.length &&
																		gradeBasedOnYearFinal.map(
																			(values: any, index: any) => {
																				return (
																					<option value={values}>
																						{values}
																					</option>
																				);
																			}
																		)}
																</Form.Select>
															</Col>
															<Col sm="4" className="mb-4">
																<Form.Label style={{ marginLeft: "40px" }}>
																	Amount
																</Form.Label>
															</Col>
															<Col sm="6">
																<Form.Control
																	type="number"
																	onChange={(e) => {
																		setFinalAmount(e.target.value);
																	}}
																/>
															</Col>
														</Row>
														<div className="card-footer">
															<Button
																type="submit"
																className="btn btn-danger btn-save"
																onClick={() => {
																	handleSubmit();
																}}
																style={{ marginLeft: "90%" }}>
																Save
															</Button>
														</div>
													</div>
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
		</div>
	);
};
export default Yearoffee;
