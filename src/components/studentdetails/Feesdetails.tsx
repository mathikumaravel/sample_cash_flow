import react from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useHistory, useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { baseUrl } from "../../index";
import axios, { AxiosResponse } from "axios";
import { getAccessToken } from "../../config/getAccessToken";
const Feesdetails = (props: any) => {
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

    useEffect(() => {
		if (status && status.toString().length > 0) {
			axios
				.post(`${baseUrl}autosearch`, {
					allbalance: status,
				})
				.then((res) => {
					console.log("Getting from ::::", res.data.data);
					setYearOfBalanceByYear(res.data.data);
					// console.log(YearOfBalanceByYear, "YearOfBalance");
				})
				.catch((err) => console.log(err));

			getAccessToken();
			axios
				.get(`${baseUrl}feeMaster`)
				.then((res) => {
					console.log("Getting from feeMaster::::", res.data.data);
					setFeeMasterId(res.data.data);
				})
				.catch((err) => console.log(err));
		}
		if (status && status.toString().length > 0 && year && year.toString().length>0) {
			axios
			.post(`${baseUrl}studentAllPayBalance/four`, {
				student_id: status,
				year_id: year,
			})
			.then((res) => {
				console.log("Getting from ::::", res.data.data);
				setLastFourRecord(res.data.data);
			})
			.catch((err) => console.log(err));
		}
	}, [status]);

    // useEffect(() => {
    //     axios
    //         .post(`${baseUrl}autosearch`, {
    //             allbalance: status,
    //         })
    //         .then((res) => {
    //             console.log("Getting from ::::", res.data.data);
    //             setYearOfBalanceByYear(res.data.data);
    //             // console.log(YearOfBalanceByYear, "YearOfBalance");
    //         })
    //         .catch((err) => console.log(err));
    // }, [status]);
    // useEffect(() => {
    //     getAccessToken();
    //     axios
    //         .get(`${baseUrl}feeMaster`)
    //         .then((res) => {
    //             console.log("Getting from feeMaster::::", res.data.data);
    //             setFeeMasterId(res.data.data);
    //         })
    //         .catch((err) => console.log(err));
    // }, [status]);
    // const Year_of_fee = () => {
    //     axios
    //         .post(`${baseUrl}studentAllPayBalance/four`, {
    //             student_id: status,
    //             year_id: year,
    //         })
    //         .then((res) => {
    //             console.log("Getting from ::::", res.data.data);
    //             setLastFourRecord(res.data.data);
    //         })
    //         .catch((err) => console.log(err));
    // };
    // // console.log(FeeMasterId,"Four Record");
    // useEffect(() => {
    //     Year_of_fee();
    // }, [status]);
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
            tempArr.push(tempObj)
                    }
                    console.log(tempArr);
                                setAllGotFinalData(tempArr);
                    if (element && element.studentData && Object.keys(element.studentData).length > 0) {
                        //          console.log(element.studentData);
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
                                    <i className="far fa-clone"></i> Payment
                                </a>{" "}
                                {status === "aa" ? (
                                    <Link to="/Stu_pay">
                                        {" "}
                                        <a className="btn btn-success btn-sm float-right">Pay or View All</a>
                                    </Link>
                                ) : null}
                            </h4>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-xl-4 col-md-3 mb-1">
                                    <div>
                                        <h6>Date</h6>
                                    </div>
                                    <div>
                                        <label>
                                            {lastFourRecord &&
                                                lastFourRecord.length &&
                                                lastFourRecord.map((data: any) => {
                                                    return <option> {data.date_of_transcation.toString().slice(0, 10)}</option>;
                                                })}
                                        </label>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-3 mb-1">
                                    <div>
                                        <h6>Fee Type</h6>
                                    </div>
                                    <div>
                                        <label>
                                            {DisplayFinalData &&
                                                DisplayFinalData.length &&
                                                DisplayFinalData.map((data: any) => {
                                                    return <option> {data.fee_type_name}</option>;
                                                })}
                                        </label>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-3 mb-1">
                                    <div>
                                        <h6>Amount ₹</h6>
                                    </div>
                                    <div>
                                        <label>
                                            {lastFourRecord &&
                                                lastFourRecord.length &&
                                                lastFourRecord.map((data: any) => {
                                                    return <option> {data.cum_amt}</option>;
                                                })}
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-5">
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h4 className="m-0  text-danger text-center">
                                <i className="far fa-clone"></i> Year of Balance
                            </h4>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-xl-4 col-md-8 mb-1">
                                    <div>
                                        <h6>Academic Year</h6>
                                    </div>
                                    <div>
                                        <label style={{margin:"3px"}}>
                                            {allGotFinalData &&
                                                allGotFinalData.length &&
                                                allGotFinalData.map((amount: any) => {
                                                    console.log(amount);
                                                    return <option> {(amount = amount.academic_year)}</option>;
                                                })}{" "}
                                        </label>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-4 mb-1">
                                    <div>
                                        <h6>Balance ₹</h6>
                                    </div>
                                    <div>
                                        <label style={{margin:"3px"}}>
                                            {allGotFinalData &&
                                                allGotFinalData.length &&
                                                allGotFinalData.map((amount: any) => {
                                                    return <option> {(amount = amount.balance)}</option>;
                                                })}{" "}
                                        </label>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-4 mb-1">
                                    <div>
                                        <h6>Action</h6>
                                    </div>
                                    <div>
                                        {allGotFinalData &&
                                            allGotFinalData.length &&
                                            allGotFinalData.map((amount: any) => {
                                                return (
                                                    <Button style={{margin:"2px"}}
                                                        onClick={(e) => {
                                                            history.push(`/stupay/${status}/${(amount = amount.academic_year)}`);
                                                            // history.push("/stupay");/stupay/MVM10004/2021-2022
                                                        }}
                                                        className="btn-success btn-sm">
                                                        Pay / View All 
                                                    </Button> 
                                                );
                                            })}
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
export default Feesdetails;