import react from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useHistory, useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { baseUrl } from "../../index";
import axios, { AxiosResponse } from "axios";
import { getAccessToken } from "../../config/getAccessToken";
import { Card, Row, Col } from "react-bootstrap";

const Hostel = (props: any) => {
	let history = useHistory();
	const status = props.student_id;
	const year = props.year;
	// console.log(props.year);

	const [YearOfBalanceByYear, setYearOfBalanceByYear] = useState<any>({});
	const [allGotFinalData, setAllGotFinalData] = useState<any>([]);
	const [lastFourRecord, setLastFourRecord] = useState<any>([]);
	const [FeeMasterId, setFeeMasterId] = useState<any>([]);
	const [GetFinalMasterData, setGetFinalMasterData] = useState<any>([]);
	const [DisplayFinalData, setDisplayFinalData] = useState<any>([]);
	const [allAcademicYear, setAllAcademicYear] = useState<any>([]);
	const [allAcademicBalance, setAllAcademicBalance] = useState<any>([]);
	const [hostel, setHostel] = useState<any>(false);
	const [van, setVan] = useState<any>(false);
	const [currentRadioValue, setCurrentValue] = React.useState("option1");

	console.log(hostel);

	console.log(van);

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

		useEffect(() =>{
			
		})

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
			<div className="row">
				<div className="col-lg-6">
					<div className="card shadow mb-4">
						<div className="card-header py-3">
							<h4 className="m-0 text-danger text-center">
								<a>
									<i className="far fa-clone"></i> Mode Of Transportation
								</a>{" "}
								<Link to="" >
									{" "}
									<a href="#" className="btn btn-success btn-sm float-right" style={{ marginLeft: "10px" }}>submit</a>
								</Link>{" "}

								<Link to="" style={{ marginRight: "10px" }}>
									{" "}
									<a className="btn btn-primary btn-sm float-right">Edit</a>
								</Link>
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
												value="option1"
												onChange={(e) => setCurrentValue(e.target.value)}
												defaultChecked={currentRadioValue === "option1"}
											/>
											<Form.Label>Self</Form.Label>
										</div>
									</Col>
									<Col>
										<div>
											<input
												name="radio-item-1"
												value="option2"
												type="radio"
												onChange={(e) => setCurrentValue(e.target.value)}
												defaultChecked={currentRadioValue === "option2"}
											/>
											<Form.Label>Bus</Form.Label>
											{currentRadioValue === "option2" && (
												<div>
													<Card style={{ width: "15rem" }}>
														<Card.Body>
															<Row>
																<Col sm="6">
																	<Form.Check
																		inline
																		label="Term 1"
																		name="group1"
																		type="checkbox"
																		value="Term 1"
																		// onChange={(e) => setGender(e.target.value)}
																		id={`inline-radio-2`}
																	/>
																</Col>
																<Col sm="6">
																	<Form.Check
																		inline
																		label="Term 2"
																		name="group1"
																		type="checkbox"
																		value="Term 1"
																		// onChange={(e) => setGender(e.target.value)}
																		id={`inline-radio-2`}
																	/>
																</Col>
																<Col sm="6">
																	<Form.Check
																		inline
																		label="Term 3"
																		name="group1"
																		type="checkbox"
																		value="Term 1"
																		// onChange={(e) => setGender(e.target.value)}
																		id={`inline-radio-2`}
																	/>
																</Col>
																<Col sm="6">
																	<Form.Check
																		inline
																		label="Term 4"
																		name="group1"
																		type="checkbox"
																		value="Term 1"
																		// onChange={(e) => setGender(e.target.value)}
																		id={`inline-radio-2`}
																	/>
																</Col>
																<Col sm="6">
																	<Form.Check
																		inline
																		label="Term 5"
																		name="group1"
																		type="checkbox"
																		value="Term 1"
																		// onChange={(e) => setGender(e.target.value)}
																		id={`inline-radio-2`}
																	/>
																</Col>
																<Col sm="6">
																	<Form.Check
																		inline
																		label="Term 6"
																		name="group1"
																		type="checkbox"
																		value="Term 1"
																		// onChange={(e) => setGender(e.target.value)}
																		id={`inline-radio-2`}
																	/>
																</Col>
																{/* <Col sm="6">
                                                                                    <Form.Label style={{marginRight:"40%",marginTop:"8%"}}>Term1
                                                                                    </Form.Label>
                                                                                    <Form.Label style={{marginRight:"40%",marginTop:"8%"}}>Term2
                                                                                    </Form.Label>
                                                                                    </Col>
                                                                                    <Col sm="6">
                                                                                    <Form.Label style={{marginRight:"40%",marginTop:"8%"}}>4500
                                                                                    </Form.Label>
                                                                                    <Form.Label style={{marginRight:"40%",marginTop:"8%"}}>3500
                                                                                    </Form.Label>
                                                                                    </Col> */}
															</Row>{" "}
														</Card.Body>
													</Card>
												</div>
											)}
										</div>
									</Col>
									<Col>
										<div>
											<input
												name="radio-item-1"
												value="option3"
												type="radio"
												onChange={(e) => setCurrentValue(e.target.value)}
												defaultChecked={currentRadioValue === "option3"}
											/>
											<Form.Label htmlFor="radio-item-2">Hostal</Form.Label>
											{currentRadioValue === "option3" && (
												<div>
													<Card style={{ width: "15rem" }}>
														<Card.Body>
															<Row>
																<Col sm="6">
																	<Form.Check
																		inline
																		label="Term 1"
																		name="group1"
																		type="checkbox"
																		value="Term 1"
																		// onChange={(e) => setGender(e.target.value)}
																		id={`inline-radio-2`}
																	/>
																</Col>
																<Col sm="6">
																	<Form.Check
																		inline
																		label="Term 2"
																		name="group1"
																		type="checkbox"
																		value="Term 1"
																		// onChange={(e) => setGender(e.target.value)}
																		id={`inline-radio-2`}
																	/>
																</Col>
																<Col sm="6">
																	<Form.Check
																		inline
																		label="Term 3"
																		name="group1"
																		type="checkbox"
																		value="Term 1"
																		// onChange={(e) => setGender(e.target.value)}
																		id={`inline-radio-2`}
																	/>
																</Col>
																<Col sm="6">
																	<Form.Check
																		inline
																		label="Term 4"
																		name="group1"
																		type="checkbox"
																		value="Term 1"
																		// onChange={(e) => setGender(e.target.value)}
																		id={`inline-radio-2`}
																	/>
																</Col>
																<Col sm="6">
																	<Form.Check
																		inline
																		label="Term 5"
																		name="group1"
																		type="checkbox"
																		value="Term 1"
																		// onChange={(e) => setGender(e.target.value)}
																		id={`inline-radio-2`}
																	/>
																</Col>
																<Col sm="6">
																	<Form.Check
																		inline
																		label="Term 6"
																		name="group1"
																		type="checkbox"
																		value="Term 1"
																		// onChange={(e) => setGender(e.target.value)}
																		id={`inline-radio-2`}
																	/>
																</Col>
																{/* <Col sm="6">
                                                                                    <Form.Label style={{marginRight:"40%",marginTop:"8%"}}>Term1
                                                                                    </Form.Label>
                                                                                    <Form.Label style={{marginRight:"40%",marginTop:"8%"}}>Term2
                                                                                    </Form.Label>
                                                                                    </Col>
                                                                                    <Col sm="6">
                                                                                    <Form.Label style={{marginRight:"40%",marginTop:"8%"}}>4500
                                                                                    </Form.Label>
                                                                                    <Form.Label style={{marginRight:"40%",marginTop:"8%"}}>3500
                                                                                    </Form.Label>
                                                                                    </Col> */}
															</Row>{" "}
														</Card.Body>
													</Card>
												</div>
											)}
										</div>
									</Col>
								</Row>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Hostel;
