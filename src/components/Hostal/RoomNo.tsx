import { useEffect, useState } from "react";
import { baseUrl } from "../../index";
import Sidebar from "../Layouts/Sidebar";
import Navbar from "../Layouts/Navbar";
import { Button, Table, Form, Container, Row, Col, Modal, Spinner } from "react-bootstrap";
import { getAccessToken } from "../../config/getAccessToken";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RoomNo = () => {
	//Academic Year
	const [statusAcademicYearEdit, setStatusAcademicYearEdit] = useState(false);
	const [statusAcademicYearAdd, setStatusAcademicYearAdd] = useState(false);
	const [FromAcdYear, setFromAcdYear] = useState<any[]>([]);
	const [acdYear, setAcdYear] = useState<any>({ fromYear: "", toYear: 0 });
	const [allAcademicYear, setAllAcademicYear] = useState<any[]>([]);
	const [datatoDelete, setdatatoDelete] = useState<any>({});
	const [filter, setfilter] = useState<any>([]);

	//Room no
	const placesList = [
		{ hostalname: "BoysHostal", roomno: "101", capacity: "5" },
		{ hostalname: "A-Block", roomno: "102", capacity: "6" },
		{ hostalname: "B-Block", roomno: "103", capacity: "7" },
	];
	const [hostelRoomNo, setHostelRoomNo] = useState<any>([]);
	const [hostelName, setHostelName] = useState<any>([]);
	const [roomNo, setRoomNo] = useState<any>([]);
	const [roomCapacity, setRoomCapacity] = useState<any>([]);
	const [getRoomNo, setGetRoomNo] = useState<any>([]);

	console.log(roomCapacity);

	//Modal Popup
	const [show, setShow] = useState(false);
	const handleClose = () => {
		setShow(false);
		deleteAnAcademicYear(datatoDelete.id, datatoDelete.index);
	};
	const SuddenhandleClose = () => {
		setShow(false);
		setdatatoDelete({});
	};
	const handleShow = () => {
		setShow(true);
	};
	const dataSearch: any =
		allAcademicYear.length &&
		allAcademicYear.sort().filter((data: any) => {
			return Object.keys(data).some((key) => data[key].toString().toLowerCase().includes(filter.toString().toLowerCase()));
		});

	const callTheYearUpdater = () => {
		console.log(new Date().getFullYear());
		let newDateArr: any[] = [];
		for (let i = 0; i < 3; i++) {
			newDateArr.push(new Date().getFullYear() + i);
		}
		setFromAcdYear(newDateArr);
		setAcdYear({
			fromYear: new Date().getFullYear(),
			toYear: new Date().getFullYear() + 1,
		});
	};

	const getAllAcademicYear = () => {
		getAccessToken();
		axios
			.get(`${baseUrl}room_no`)
			.then((res: any) => {
				console.log(res.data.data);
				setGetRoomNo(res.data.data);
			})
			.catch((e: any) => {
				console.log(e);
			});
	};

	const setNewAcademicYear = (newArrVal: any) => {
		setAllAcademicYear([...newArrVal]);
	};

	const deleteAnAcademicYear = (year: any, index: any) => {
		let newArrVal = allAcademicYear;
		newArrVal.splice(index, 1);
		getAccessToken();
		axios
			.delete(`${baseUrl}room_no?`, { data: { room_id: year } })
			.then((res: any) => {
				toast.success("Year Deleted Successfully", {
					position: "top-right",
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
				});
				setNewAcademicYear(newArrVal);
				setdatatoDelete({});
				getAllAcademicYear();
			})
			.catch((e: any) => {
				console.log(e);
			});
	};
	useEffect(() => {
		getAccessToken();
		axios.get(`${baseUrl}hostal_name`).then((res: any) => {
			console.log(res.data.data);
			setHostelRoomNo(res.data.data);
		});
	}, []);
	useEffect(() => {
		callTheYearUpdater();
		getAllAcademicYear();
	}, []);

	useEffect(() => {
		callTheYearUpdater();
	}, [statusAcademicYearAdd]);

	const handleSubmit = async (e: any) => {
		e.preventDefault();
		try {
			getAccessToken();
			const res: any = await axios
				.post(`${baseUrl}room_no`, {
					hostel_name_id: hostelName,
					room_no: roomNo,
					room_capacity: roomCapacity,
				})
				.then((res: any) => {
					console.log(res.data);
					if (res.data.data.IsExsist === false) {
						toast.success("RoomNo & Capacity Added Successfully", {
							position: "top-right",
							autoClose: 5000,
							hideProgressBar: false,
							closeOnClick: true,
							pauseOnHover: true,
							draggable: true,
							progress: undefined,
						});
					} else {
						toast.warning("RoomNo & Capacity Already Added", {
							position: "top-right",
							autoClose: 5000,
							hideProgressBar: false,
							closeOnClick: true,
							pauseOnHover: true,
							draggable: true,
							progress: undefined,
						});
					}
					getAllAcademicYear();
					setStatusAcademicYearAdd(false);
				});
		} catch (err) {
			alert("Please Enter the value");
		}
	};

	return (
		<div>
			<ToastContainer
				position="top-right"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
			/>
			<div id="page-top">
				<div id="wrapper">
					<Sidebar data={"room_no"}></Sidebar>
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
														<i className="far fa-clone pr-1"></i> RoomNo & Capacity
													</h4>
													<div style={{ textAlign: "right" }}>
														{!statusAcademicYearAdd ? (
															<Button
																type="submit"
																className="btn btn-primary btn-sm btn-save"
																onClick={() => setStatusAcademicYearAdd(true)}>
																Add
															</Button>
														) : (
															<></>
														)}
													</div>
												</div>
											</a>
											{!statusAcademicYearAdd ? (
												<div className="card-body">
													<div className="table-responsive">
														<div className="dataTables_wrapper dt-bootstrap4 no-footer">
															<div id="dataTable_filter" className="dataTables_filter">
																<Form.Label htmlFor="inputPassword5" style={{ marginLeft: "75%" }}>
																	Search:
																	<Form.Control
																		type="search"
																		className="form-control form-control-sm"
																		onChange={(e) => setfilter(e.target.value)}
																	/>
																</Form.Label>
															</div>
														</div>
													</div>
													<div className="row">
														<div className="col-sm-12">
															<Table className="table dataTable no-footer" width="100%" style={{ width: "100%" }}>
																<thead>
																	<tr role="row">
																		<th className="sorting_asc" style={{ width: "73px" }}>
																			No.
																		</th>
																		<th className="sorting" style={{ width: "114px" }}>
																			Hostal Name
																		</th>
																		<th className="sorting" style={{ width: "130px" }}>
																			Room No
																		</th>
																		<th>Capacity</th>
																		<th>Actions</th>
																	</tr>
																</thead>
																<tbody>
																	{getRoomNo && getRoomNo.length ? (
																		getRoomNo.map((values: any, index: any) => {
																			return (
																				<tr key={index}>
																					<td>{index + 1}</td>
																					<td>{values.hostel_name}</td>
																					<td>{values.room_no}</td>
																					<td>{values.room_capacity}</td>
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
																									year: values.academic_year,
																									id: values.room_id,
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
																					colSpan={3}
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
													<div style={{ marginLeft: "20%" }}>
														<ToastContainer
															position="top-right"
															autoClose={5000}
															hideProgressBar={false}
															newestOnTop={false}
															closeOnClick
															rtl={false}
															pauseOnFocusLoss
															draggable
															pauseOnHover
														/>
														{/* <Pagination>
                                                            <Pagination.First />
                                                            <Pagination.Prev />
                                                            <Pagination.Item>{1}</Pagination.Item>
                                                            <Pagination.Ellipsis />
>>>>>>> commonbranch

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      getAccessToken();
      const res: any = await axios
        .post(`${baseUrl}academic_year`, {
          academic_year: `${acdYear.fromYear}-${acdYear.toYear}`,
        })
        .then((res: any) => {
          console.log(res.data);
          getAllAcademicYear();
          setStatusAcademicYearAdd(false);
        });
    } catch (err) {
      alert("Incorrect Username and Password");
    }
  };


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
														<Modal.Body>Are You Sure You What To Delete {datatoDelete.year} ?</Modal.Body>
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
												<div>
													<div style={{ marginBottom: "20px" }}>
														<Row>
															<Col sm="4" className="mb-4">
																<Form.Label style={{ marginLeft: "40px" }}>Hostal Name</Form.Label>
															</Col>
															<Col sm="6">
																<Form.Select
																	onChange={(e: any) => {
																		setHostelName(e.target.value);
																	}}>
																	{hostelRoomNo &&
																		hostelRoomNo.length &&
																		hostelRoomNo.map((values: any, index: any) => {
																			return <option value={values.hostel_name_id}>{values.hostel_name}</option>;
																		})}
																</Form.Select>
															</Col>{" "}
															<Col sm="4" className="mb-4">
																<Form.Label style={{ marginLeft: "40px" }}>Room No</Form.Label>
															</Col>
															<Col sm="6">
																<Form.Control
																	type="text"
																	onChange={(e: any) => {
																		setRoomNo(e.target.value);
																	}}
																/>
															</Col>{" "}
															<Col sm="4">
																<Form.Label style={{ marginLeft: "40px" }}>Capacity</Form.Label>
															</Col>
															<Col sm="6">
																<Form.Control
																	type="number"
																	onChange={(e: any) => {
																		setRoomCapacity(e.target.value);
																	}}
																/>
															</Col>
														</Row>
													</div>
													<br></br>
													<div className="card-footer">
														<div
															style={{
																display: "flex",
																justifyContent: "right",
															}}>
															<Button className="btn btn btn-secondary" onClick={() => setStatusAcademicYearAdd(false)}>
																Cancel
															</Button>
															&nbsp;
															<Button
																type="submit"
																className="btn btn-danger btn-save"
																onClick={(e: any) => {
																	handleSubmit(e);
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
	);
};
export default RoomNo;
