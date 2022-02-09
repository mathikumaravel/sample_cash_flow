import { useEffect, useState } from "react";
import Sidebar from "../Layouts/Sidebar";
import Navbar from "../Layouts/Navbar";
import { Button, Table, Pagination, Form, Col, Row, Spinner, Modal } from "react-bootstrap";
import axios, { AxiosResponse } from "axios";
import { getAccessToken } from "../../config/getAccessToken";
import { baseUrl } from "../../index";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Yearoffee = () => {
	const [statusFeeDetailsEdit, setStatusFeeDetailsEdit] = useState(false);
	const [statusFeeDetailsAdd, setStatusFeeDetailsAdd] = useState(false);
	const [gradeSectionList, setGradeSectionList] = useState<any>([]);
	const [feeMaster, setAllFeeMaster] = useState<any[]>([]);
	const [feeMasterFinal, setFeeMasterFinal] = useState<any>([]);
	const [gradeBasedOnYearFinal, setGradeBasedOnYearFinal] = useState<any>([]);
	const [gradeHomeBasedOnYearFinal, setHomeGradeBasedOnYearFinal] = useState<any>([]);
	const [feeTypeNameFinal, setFeeTypeMasterNameFinal] = useState<any>([]);
	const [tableFeeAmount, setTableFeeAmount] = useState<any[]>([]);

	const [academicYear, setAcademicYear] = useState("");
	const [feeTypeName, setFeeTypeName] = useState("");
	const [addGrade, setAddGrade] = useState("");
	const [amount, setFinalAmount] = useState("");

	const [searchAcademicYear, setSearchAcademicYear] = useState("");
	const [searchGrade, setSearchGrade] = useState("");

	const [editingYearOfFee, setEditingYearOfFee] = useState<any>({});
	const [updateYearOfFee, setUpdateYearOfFee] = useState<any>("");
	const [datatoDelete, setdatatoDelete] = useState<any>({});
	const [duplication, setDuplication] = useState(false);

	console.log(editingYearOfFee);

	//Modal Popup
	const [show, setShow] = useState(false);
	const handleClose = () => {
		setShow(false);
		deleteParticularDiscount(datatoDelete.yearoffeesid);
	};

	const SuddenhandleClose = () => {
		setShow(false);
		setdatatoDelete({});
	};
	const handleShow = () => {
		setShow(true);
	};

	const getAllGradeSectionData = () => {
		getAccessToken();
		axios.get(`${baseUrl}grade_section/show_all?page=1&per_page=100`).then((response: AxiosResponse) => {
			setGradeSectionList(response.data.grade_sections);
		});
	};

	const getAllFeeMasterData = () => {
		getAccessToken();
		axios.get(`${baseUrl}fee_master/show_all?page=1&per_page=100`).then((response: AxiosResponse) => {
			setAllFeeMaster(response.data.fee_masters);
		});
	};

	//console.log(feeMaster)

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
			handleHomeSearch(gradeSectionList, gradeSectionList[0].academic_year);
		}
		console.log(gradeSectionList);
	}, [gradeSectionList]);

	//	console.log(feeMasterFinal);

	useEffect(() => {
		if (feeMaster && feeMaster.length) {
			handleFeeTypeNameSearch(feeMaster, feeMaster[0].academic_year);
		}
	}, [feeMaster, gradeSectionList]);

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
		console.log(feeMaster);
		setFeeTypeName("");
		let mySet1 = new Set();
		let resultData = gradeSectionList.filter((obj: any) =>
			Object.values(obj)
				.flat()
				.some((v) => `${v}`.toLowerCase().includes(`${searchInput}`.toLowerCase()))
		);
		gradeSectionList.forEach((element: any) => {
			mySet1.add({ id: element.fee_master_id, name: element.fee_type_name });
		});
		setFeeTypeMasterNameFinal([...mySet1]);
		//	console.log(resultData);
		if (resultData && resultData.length) {
			setFeeTypeName(gradeSectionList[0].fee_master_id);
		}
	};

	//home screen filter
	const handleHomeSearch = (gradeSectionList: any, searchInput: any) => {
		setSearchGrade("");
		setSearchAcademicYear(searchInput);
		let mySet1 = new Set();
		let resultData = gradeSectionList.filter((obj: any) =>
			Object.values(obj)
				.flat()
				.some((v) => `${v}`.toLowerCase().includes(`${searchInput}`.toLowerCase()))
		);
		resultData.forEach((element: any) => {
			mySet1.add(element.grade);
		});
		setHomeGradeBasedOnYearFinal([...mySet1]);
		setSearchGrade(resultData[0].grade);
	};

	const handleSubmit = () => {
		let newfeeTypeName = feeTypeName.toString();
		if(amount.length<=0 || addGrade.length<=0 || academicYear.length<=0 || newfeeTypeName.length<=0) {
			if(amount.length<=0) {
			toast.warning("Enter Amount", {
				position: "top-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});
		}else if(addGrade.length<=0) {
			toast.warning("Enter Grade", {
				position: "top-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});
		}
		else if(academicYear.length<=0) {
			toast.warning("Enter Academic Year", {
				position: "top-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});
		}
		else if(newfeeTypeName.length<=0) {
			toast.warning("Enter Fee Type Name", {
				position: "top-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});
		}
		}else{
		getAccessToken();
		axios
			.post(`${baseUrl}year_of_fee/create`, {
				academic_year: academicYear,
				grade: addGrade,
				fee_amount: amount,
				fee_master_id: newfeeTypeName,
			})
			.then((res: any) => {
				toast.success("Year oF Fee Added", {
					position: "top-right",
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
				});
				setStatusFeeDetailsEdit(false);
			});
		}
	};

	useEffect(() => {
		if (searchGrade.length > 0 && searchGrade.length > 0) {
			list_fee_details();
		}
	}, [searchAcademicYear, searchGrade]);

	const list_fee_details = () => {
		getAccessToken();
		axios.get(`${baseUrl}year_of_fee/search_by_grade&year?academic_year=${searchAcademicYear}&grade=${searchGrade}`).then((res: any) => {
			console.log(res.data);
			setTableFeeAmount(res.data);
		});
	};

	const updatingYearOfFee = () => {
		if(updateYearOfFee.length <=0){
			toast.warning("Enter Amount", {
				position: "top-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});
		}else{
		getAccessToken();
		axios
			.put(`${baseUrl}year_of_fee/update`, {
				year_of_fees_id: editingYearOfFee.yearoffeesid,
				academic_year: editingYearOfFee.acdyr,
				grade: editingYearOfFee.grade,
				fee_amount: updateYearOfFee,
				fee_master_id: editingYearOfFee.fee_id,
			})
			.then((res: any) => {
				console.log(res.data);
				if (res.data == true) {
					toast.success("Year oF Fee Updated Successsfully", {
						position: "top-right",
						autoClose: 5000,
						hideProgressBar: false,
						closeOnClick: true,
						pauseOnHover: true,
						draggable: true,
						progress: undefined,
					});
					setEditingYearOfFee({});
					setUpdateYearOfFee("");
					list_fee_details();
				}
			});
		}
	};

	const deleteParticularDiscount = (fee_master_id: any) => {
		getAccessToken();
		axios
			.delete(`${baseUrl}year_of_fee/delete?id=${fee_master_id}`)
			.then((res: any) => {
				toast.success("Year oF Fee Deleted Successsfully", {
					position: "top-right",
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
				});
				setdatatoDelete({});
				setEditingYearOfFee({});
				setUpdateYearOfFee("");
				list_fee_details();
			})
			.catch((e: any) => {
				console.log(e);
			});
	};

	// console.log(gradeBasedOnYearFinal);

	// console.log(academicYear, feeTypeName, addGrade, amount);
	return (
		<div>
			<ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
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
																<Button type="submit" className="btn btn-primary btn-sm btn-save" onClick={() => setStatusFeeDetailsAdd(true)}>
																	Add
																</Button>
															) : (
																<></>
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
																				<div className="form-group" style={{ width: "60%" }}>
																					<Form.Select
																						value={searchAcademicYear}
																						onChange={(e: any) => {
																							handleHomeSearch(gradeSectionList, e.target.value);
																						}}>
																						{feeMasterFinal &&
																							feeMasterFinal.length &&
																							feeMasterFinal.map((values: any, index: any) => {
																								return <option value={values}>{values}</option>;
																							})}
																					</Form.Select>
																				</div>
																			</td>
																			<td>
																				<div className="form-group">
																					<Form.Select
																						value={searchGrade}
																						onChange={(e: any) => {
																							setSearchGrade(e.target.value);
																						}}>
																						{gradeHomeBasedOnYearFinal &&
																							gradeHomeBasedOnYearFinal.length &&
																							gradeHomeBasedOnYearFinal.map((values: any, index: any) => {
																								return <option value={values}>{values}</option>;
																							})}
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
																	<div id="dataTable_filter" className="dataTables_filter">
																		<Form.Label style={{ marginLeft: "78%" }}>
																			Search:
																			<Form.Control type="search" className="form-control form-control-sm" />
																		</Form.Label>
																	</div>
																</div>

																<div className="row">
																	<div className="col-sm-12">
																		<Table striped bordered hover width="100%" style={{ width: "100%" }}>
																			<thead>
																				<tr role="row">
																					<th>S.No</th>
																					<th className="sorting_asc">To Academic Year</th>
																					<th className="sorting">Fee amount</th>
																					<th className="sorting">Action</th>
																				</tr>
																			</thead>
																			<tbody>
																				{tableFeeAmount && tableFeeAmount.length ? (
																					tableFeeAmount.map((values: any, index: any) => {
																						return (
																							<tr key={index}>
																								<td>{index + 1}</td>
																								<td>{values.academic_year}</td>
																								{index == editingYearOfFee.id ? (
																									<>
																										<td>
																											{" "}
																											<Form.Control
																												type="number"
																												value={updateYearOfFee}
																												onChange={(e: any) => {
																													setUpdateYearOfFee(e.target.value);
																												}}
																											/>
																										</td>
																										<td>
																											<Button
																												variant="warning"
																												onClick={() => {
																													updatingYearOfFee();
																												}}>
																												Update
																											</Button>
																											{"  "}
																											<Button
																												variant="secondary"
																												onClick={() => {
																													setUpdateYearOfFee("");
																													setEditingYearOfFee({});
																												}}>
																												Cancel
																											</Button>
																										</td>
																									</>
																								) : (
																									<>
																										<td>{values.fee_amount}</td>
																										<td>
																											<Button
																												variant="primary"
																												onClick={() => {
																													setUpdateYearOfFee(Number(values.fee_amount));
																													setEditingYearOfFee({
																														yearoffeesid: values.year_of_fees_id,
																														acdyr: values.academic_year,
																														grade: values.grade,
																														amt: Number(values.fee_amount),
																														id: index,
																														fee_id: values.fee_master_id,
																													});
																												}}>
																												Edit
																											</Button>
																											{"  "}
																											<Button
																												variant="danger"
																												onClick={() => {
																													setdatatoDelete({
																														yearoffeesid: values.year_of_fees_id,
																														acdyr: values.academic_year,
																														grade: values.grade,
																														amt: Number(values.fee_amount),
																														id: index,
																														fee_id: values.fee_master_id,
																													});
																													handleShow();
																													setEditingYearOfFee({});
																													setUpdateYearOfFee("");
																												}}>
																												Delete
																											</Button>
																										</td>
																									</>
																								)}
																							</tr>
																						);
																					})
																				) : (
																					<>
																						<tr
																							style={{
																								textAlign: "center",
																							}}>
																							<td
																								colSpan={4}
																								style={{
																									textAlign: "center",
																								}}>
																								{/* <Spinner
																									animation="border"
																									variant="danger"
																								/> */}
																								<p>No Data Found</p>
																							</td>
																						</tr>
																					</>
																				)}
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
																	<Modal show={show} onHide={SuddenhandleClose}>
																		<Modal.Header closeButton>
																			<Modal.Title>
																				Delete {datatoDelete.acdyr} - {datatoDelete.grade} - {datatoDelete.amt}
																			</Modal.Title>
																		</Modal.Header>
																		<Modal.Body>
																			Are You Sure You What To Delete{" "}
																			<b>
																				{datatoDelete.acdyr} - {datatoDelete.grade} - {datatoDelete.amt}
																			</b>{" "}
																			?
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
															</div>
														</div>
													</div>
												) : (
													<div>
														<Row>
															<>
																<Col sm="4" className="mb-4">
																	<Form.Label style={{ marginLeft: "40px" }}>Academic Year</Form.Label>
																</Col>
																<Col sm="6">
																	<Form.Select
																		value={academicYear}
																		onChange={(e: any) => {
																			handleSearch(gradeSectionList, e.target.value);
																			handleFeeTypeNameSearch(feeMaster, e.target.value);
																		}}>
																		{feeMasterFinal &&
																			feeMasterFinal.length &&
																			feeMasterFinal.map((values: any, index: any) => {
																				return <option value={values}>{values}</option>;
																			})}
																	</Form.Select>
																</Col>
															</>
															<Col sm="4" className="mb-4">
																<Form.Label style={{ marginLeft: "40px" }}>Fee Type Name</Form.Label>
															</Col>
															<Col sm="6">
																<Form.Select
																	value={feeTypeName}
																	onChange={(e: any) => {
																		setFeeTypeName(e.target.value);
																	}}>
																	{feeTypeNameFinal &&
																		feeTypeNameFinal.length &&
																		feeTypeNameFinal.map((values: any, index: any) => {
																			return <option value={values.id}>{values.name}</option>;
																		})}
																</Form.Select>
															</Col>{" "}
															<Col sm="4" className="mb-4">
																<Form.Label style={{ marginLeft: "40px" }}>Grade</Form.Label>
															</Col>
															<Col sm="6">
																<Form.Select
																	value={addGrade}
																	onChange={(e: any) => {
																		setAddGrade(e.target.value);
																	}}>
																	{gradeBasedOnYearFinal &&
																		gradeBasedOnYearFinal.length &&
																		gradeBasedOnYearFinal.map((values: any, index: any) => {
																			return <option value={values}>{values}</option>;
																		})}
																</Form.Select>
															</Col>
															<Col sm="4" className="mb-4">
																<Form.Label style={{ marginLeft: "40px" }}>Amount</Form.Label>
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
															<div style={{ display: "flex", justifyContent: "right" }}>
																<Button className="btn btn-sm btn-secondary" onClick={() => setStatusFeeDetailsAdd(false)}>
																	Cancel
																</Button>{" "}
																&nbsp;
																<Button
																	type="submit"
																	className="btn btn-danger btn-save"
																	onClick={() => {
																		handleSubmit();
																	}}>
																	Save
																</Button>
															</div>
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
