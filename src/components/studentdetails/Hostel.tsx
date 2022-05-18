import react from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useHistory, useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { baseUrl } from "../../index";
import axios, { AxiosResponse } from "axios";
import { getAccessToken } from "../../config/getAccessToken";
import { Card, Row, Col } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";

const Hostel = (props: any) => {
	let history = useHistory();
	const status = props.student_id;
	const year = props.year;
	const grade_id = props.grade;
	const section = props.section;
	const Student_admission_id = props.admissions_id;
	const Transportation = props.transport;


	console.log(Transportation);

	const [YearOfBalanceByYear, setYearOfBalanceByYear] = useState<any>({});
	const [allGotFinalData, setAllGotFinalData] = useState<any>([]);
	const [lastFourRecord, setLastFourRecord] = useState<any>([]);
	const [FeeMasterId, setFeeMasterId] = useState<any>([]);
	const [GetFinalMasterData, setGetFinalMasterData] = useState<any>([]);
	const [DisplayFinalData, setDisplayFinalData] = useState<any>([]);
	const [feemaster, setFeemaster] = useState<any>([]);
	const [allAcademicBalance, setAllAcademicBalance] = useState<any>([]);
	const [hostel, setHostel] = useState<any>(false);
	const [van, setVan] = useState<any>(false);
	const [currentRadioValue, setCurrentValue] = React.useState("option1");
	const [busValue, setBusValue] = useState<any>([]);
	const [hostalFeeValue, setHostalFeeValue] = useState<any>([]);
	const [transport, settransport] = useState<any>([]);
	const [datatoDelete, setdatatoDelete] = useState<any>({});
	const [show, setShow] = useState(false);
	console.log(currentRadioValue);
	
	console.log(van);

	const [profileHostel, setProfileHostel] = useState<any>({
		Hostal: true,
		mode_of_transport_touched: true,
		student_admissions_id: 100451,
		student_id: "2022dddf3d4",
		section_id: 71,
		year_id: 32,
		grade_id: 11
	});
    const windowReload = () => {
        let interval = setInterval(() => {
            window.location.reload();
        }, 3000);
        return () => clearInterval(interval);
    };
	// console.log(profileHostel);

	// useEffect(() => {
	// 	if (status && status.toString().length > 0) {
	// 		axios
	// 			.post(`${baseUrl}autosearch`, {
	// 				allbalance: status,
	// 			})
	// 			.then((res) => {
	// 				console.log("Getting from ::::", res.data.data);
	// 				setYearOfBalanceByYear(res.data.data);
	// 				// console.log(YearOfBalanceByYear, "YearOfBalance");
	// 			})
	// 			.catch((err) => console.log(err));

	// 		getAccessToken();
	// 		axios
	// 			.get(`${baseUrl}feeMaster`)
	// 			.then((res) => {
	// 				console.log("Getting from feeMaster::::", res.data.data);
	// 				setFeeMasterId(res.data.data);
	// 			})
	// 			.catch((err) => console.log(err));
	// 	}
	// 	if (status && status.toString().length > 0 && year && year.toString().length>0) {
	// 		axios
	// 		.post(`${baseUrl}studentAllPayBalance/four`, {
	// 			student_id: status,
	// 			year_id: year,
	// 		})
	// 		.then((res) => {
	// 			console.log("Getting from ::::", res.data.data);
	// 			setLastFourRecord(res.data.data);
	// 		})
	// 		.catch((err) => console.log(err));
	// 	}
	// }, [status]);

	// useEffect(() => {

	// }, [status]);

	// const Year_of_fee = () => {

	// };
	// console.log(FeeMasterId,"Four Record");
	// useEffect(() => {
	// 	Year_of_fee();
	// }, [status]);

	// useEffect(() => {
	// 	getAccessToken();
	// 	axios
	// 		.post(`${baseUrl}hostal_allocation`, {
	// 			// student_id: id,
	// 			// year_id: academicYearId,
	// 		})
	// 		.then((res: any) => {
	// 			console.log(res.data.data, "Hostel");
	// 		});
	// }, []);
	console.log(hostalFeeValue);
	const checkhostelvalue = () =>{
		if(hostalFeeValue && hostalFeeValue.length >0){
			let hostelnameId = hostalFeeValue[0].fee_master_id;
			console.log(hostelnameId);
			return hostelnameId;
		}
	}
 
	
// let hostelnameId = hostalFeeValue[0].fee_master_id;


const handleShow = () => {
    setShow(true);
  };
	 
  const SuddenhandleClose = () => {
    setShow(false);
 
  };
   
	const handleTrans = (e: any) => {
		console.log(currentRadioValue);

		// alert()
		if ("Transport" === currentRadioValue) {
		 
			getAccessToken();
			axios
				.post(`${baseUrl}modeoftransport`, {
					transport:true,
					mode_of_transport_touched: true,
					student_admissions_id: Student_admission_id,
					student_id: status,
					section_id: section,
					grade_id: grade_id,
					year_id: year,
					fee_master_id: Number(feemaster),
				})
				.then((res: any) => {
					console.log(res.data.message, "Hostel");
					if(res.data.data.IsExsist === false){
						 
						toast.success(res.data.message, {
							position: "top-right",
							autoClose: 5000,
							hideProgressBar: false,
							closeOnClick: true,
							pauseOnHover: true,
							draggable: true,
							progress: undefined,
						});
						windowReload()
					}else if(res.data.data.IsExsist ===  "year"){
						toast.warning(res.data.message, {
							position: "top-right",
							autoClose: 5000,
							hideProgressBar: false,
							closeOnClick: true,
							pauseOnHover: true,
							draggable: true,
							progress: undefined,
						});
					}
					setShow(false);
				});

		}
		else if("Hostal" === currentRadioValue){
			axios
			.post(`${baseUrl}modeoftransport`, {
				Hostal:true,
				mode_of_transport_touched: true,
				student_admissions_id: Student_admission_id,
				student_id: status,
				section_id: section,
				year_id: year,
				fee_master_id: checkhostelvalue(),
				grade_id: grade_id
			})
			
			.then((res: any) => {
				console.log(res.data.data);
				if(res.data.data.IsExsist === false){
					toast.success(res.data.message, {
						position: "top-right",
						autoClose: 5000,
						hideProgressBar: false,
						closeOnClick: true,
						pauseOnHover: true,
						draggable: true,
						progress: undefined,
					});
					windowReload()
				}else if(res.data.data.IsExsist ===  "year"){
					toast.warning(res.data.message, {
						position: "top-right",
						autoClose: 5000,
						hideProgressBar: false,
						closeOnClick: true,
						pauseOnHover: true,
						draggable: true,
						progress: undefined,
					});
				}
				setShow(false);
			});
		 
		}
		else if("Self" === currentRadioValue){
			axios
			.post(`${baseUrl}modeoftransport`, {
				Self:true,
				mode_of_transport_touched: true,
				student_admissions_id: Student_admission_id,
				student_id: status,
				section_id: section,
				year_id: year,
				fee_master_id: Number(feemaster),
				grade_id:  grade_id
			})
			.then((res: any) => {
				console.log(res.data.data, "Hostel");
				if(res.data.data.IsExsist === false){
					toast.success(res.data.message, {
						position: "top-right",
						autoClose: 5000,
						hideProgressBar: false,
						closeOnClick: true,
						pauseOnHover: true,
						draggable: true,
						progress: undefined,
					});
					windowReload()
				}
				setShow(false);
			});
			
		}
		
	}
	useEffect(() => {

	}, []);
	console.log( currentRadioValue,Transportation,Transportation === "Self" ? Transportation : true);
	
	useEffect(() => {
		getAccessToken();
		axios
			.get(`${baseUrl}modeoftransport/hostal`, {
				// student_id: id,
				// year_id: academicYearId,
			})
			.then((res: any) => {
				setHostalFeeValue(res.data.data)
				console.log(res.data.data, "Hostel");

			});
	}, []);

	useEffect(() => {
		getAccessToken();
		axios
			.get(`${baseUrl}modeoftransport`, {
				// student_id: id,
				// year_id: academicYearId,
			})
			.then((res: any) => {
				setBusValue(res.data.data)
				console.log(res.data.data, "Hostel");

			});
	}, []);

	useEffect(() => {
		// if (status  && status.toString().length>0   ){
		console.log(FeeMasterId);
		lastFourRecord &&
			lastFourRecord.length &&
			lastFourRecord.map((data: any) => {
				FeeMaster(data);
				// console.log(data);
			});
		// }
	}, [status, lastFourRecord, FeeMasterId]);

	// console.log(lastFourRecord);
	let GetId: any = [];

	function FeeMaster(feemasterdata: any) {
		// console.log(feemasterdata.fee_master_id, "data");
		var matchedyearid: any = FeeMasterId && FeeMasterId.length && FeeMasterId.filter((data: any) => data.fee_master_id == feemasterdata.fee_master_id);
		// let combindobject = { ...feemasterdata, ...matchedyearid};
		matchedyearid &&
			matchedyearid.length &&
			matchedyearid.forEach((element: any) => {
				GetId.push(element);
			});
		// GetFinalMasterData.push(combindobject);
		// console.log(matchedyearid, "final");
		setDisplayFinalData(GetId);
		// console.log(GetId, "ffff");
	}

	// console.log(DisplayFinalData.fee_type_name);

	useEffect(() => {
		let AllRoundData: any[] = [];
		console.log(YearOfBalanceByYear);

		if (YearOfBalanceByYear && YearOfBalanceByYear.length > 0) {
			console.log(YearOfBalanceByYear);
			YearOfBalanceByYear.forEach((allData: any) => {
				console.log(allData[0]);
				console.log(allData);
				let newData = allData;
				let ParticularStudentData: any = [];
				let ParticularStudentBalance: any = [];
				let ParticularStudentYear: any = [];
				let tempArr: any[] = [];
				newData.forEach((element: any) => {
					// let tempdataa = element.filter((values:any)=>values.studentData !=  1);
					// console.log(element)
					if (element && element.length > 0) {
						let tempObj: any = {};
						element.forEach((data: any) => {
							if (data && data.hasOwnProperty("studentData")) {
								delete data.studentData;
							}
							if (data && data.hasOwnProperty("academic_year")) {
								tempObj.academic_year = data.academic_year;
							}
							if (data && data.hasOwnProperty("balance")) {
								tempObj.balance = data.balance;
							}
							console.log(data);
							// if(data && data.hasOwnProperty("academic_year") || data.hasOwnProperty("balance")){
							//   console.log(data.balance);
							//   // if(data.academic_year && data.academic_year.length >0 && data.balance && data.balance.length >0   ){
							//     ParticularStudentBalance.push({ Allbalance: data.balance });
							//     ParticularStudentYear.push({ Year: data.academic_year });
							//     setAllAcademicYear(ParticularStudentYear)
							//     setAllAcademicBalance(ParticularStudentBalance)
							//   // }

							// }
						});
						tempArr.push(tempObj);
					}
					console.log(tempArr);
					setAllGotFinalData(tempArr);

					if (element && element.studentData && Object.keys(element.studentData).length > 0) {
						//			console.log(element.studentData);
						if (ParticularStudentData && ParticularStudentData.length == 0) {
							// ParticularStudentData.push(element.studentData);
						}
					}
				});
				let newFinalArr = [{ ...ParticularStudentBalance, ...ParticularStudentYear }];
				AllRoundData.push(newFinalArr);
			});
			console.log(AllRoundData);
			//setAllGotFinalData(tempArr);
			// console.log(searchResultData[0]);
			// console.log(searchResultData[0][0]);
			// console.log(searchResultData[0][1]);
		} else {
			setAllGotFinalData([]);
		}
	}, [YearOfBalanceByYear]);
	console.log(allAcademicBalance, "yyyyyyyy");

	//stupay/mvm10006/2021-2022
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
			<div className="row">
				<div className="col-lg-6">
					<div className="card shadow mb-4">
						<div className="card-header py-3">
							<h4 className="m-0 text-danger text-center">
								<a>
									<i className="far fa-clone"></i> Student Facilities
								</a>{" "}
								<Button
									variant="success"
									onClick={(e: any) => {
										handleShow();
									}}
									style={{ float: "right", marginRight: "10px" }}>
									Submit
								</Button>


							</h4>
						</div>
						<div className="card-body">
							<></>
							<div>
								<Row>
									<Col>
										<div>
											<input
												name="radio-item-1"
												type="radio"
												value="Self"
												onChange={(e) => setCurrentValue(e.target.value)}
												checked={Transportation === "Self" ? Transportation : currentRadioValue === "Self"}
											/>
											<Form.Label>Self</Form.Label>
										</div>
									</Col>
									<Col>
										<div>
											<input
												name="radio-item-1"
												value="Transport"
												type="radio"
												onChange={(e) => setCurrentValue(e.target.value)}
												checked={Transportation === "Transport" ? Transportation : currentRadioValue === "Transport"}
											/>
											<Form.Label>Transport</Form.Label>

											{currentRadioValue === "Transport" && (

												<div>
													<Form.Select style={{ width: "11rem" }}
														onChange={(e: any) => {
															setFeemaster(e.target.value);
														}}>
														<option >Select Stopping</option>

														{busValue &&
															busValue.length &&
															busValue.map((value: any, i: any) => {
																return <option value={value.fee_master_id}>{value.fee_type_name}</option>;
															})}
													</Form.Select>
													{/* <Card style={{ width: "15rem", marginTop:"10px" }}>{" "}
														 
													</Card> */}
												</div>
											)}
										</div>
									</Col>
									<Col>
										<div>
											<input
												name="radio-item-1"
												value="Hostal"
												type="radio"
												onChange={(e) => setCurrentValue(e.target.value)}
												checked={Transportation === "Hostal" ? Transportation : currentRadioValue === "Hostal"}
											/>
											<Form.Label htmlFor="radio-item-2">Hostel</Form.Label>
											{currentRadioValue === "Hostal" && (
												<div>

												</div>
											)}
										</div>
									</Col>
								</Row>
								<Modal show={show} 
								onHide={SuddenhandleClose}
								>
                              <Modal.Header closeButton>
                                <Modal.Title>
                                  Mode Of Transportation
								  {/* {datatoDelete.name} */}
                                </Modal.Title>
                              </Modal.Header>
                              <Modal.Body>
                                Are You Sure You Want To Submit{" "}
								{currentRadioValue} ?
                              </Modal.Body>
                              <Modal.Footer>
                                <Button
                                  variant="secondary"
                                  onClick={SuddenhandleClose}
                                >
                                  Close
                                </Button>
								<Button variant="danger" 
								data-bs-dismiss="modal"
									onClick={(e: any) => {
										handleTrans(currentRadioValue);
										handleShow();
									}}
								>
                                  Submit
                                </Button>
                              </Modal.Footer>
                            </Modal>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Hostel;
