import React from 'react'
import Sidebar from "../Layouts/Sidebar";
import Navbar from "../Layouts/Navbar";
import { baseUrl } from "../../index";
import { useEffect, useState } from "react";
import { Button, Table, Form, Col, Row, Spinner, Modal } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getAccessToken } from "../../config/getAccessToken";
import axios from "axios";

const Profile = () => {

    const [schoolName, setSchoolName] = useState<any>([]);
    const [schoolAddress, setSchoolAddress] = useState<any>([]);

    const [schoolBranch, setSchoolBranch] = useState<any>([]);

    const [schoolNameterms, setSchoolTerms] = useState<any>([]);

    const [gotSchoolDetails, setGotSchoolDetails] = useState<any>([]);

    const [schoolOptioanlTerms, setSchoolOptioanlTerms] = useState<any>([]);
    const [isLoaded, setIsLoaded] = useState<any>(false);

    const windowReload = () => {
		let interval = setInterval(() => {
			window.location.reload();
		}, 2000);

		return () => clearInterval(interval);
	};
    
    const handleSubmit = async (e: any) => {
        e.preventDefault();
        try {
            getAccessToken();
            const res: any = await axios
                .post(`${baseUrl}school`, {
                    school_name: schoolName,
                    address: schoolAddress,
                    branch: schoolBranch,
                    term_count: Number(schoolNameterms),
                    optional_term_count: Number(schoolOptioanlTerms),
                    one_time: false
                })
                .then((res: any) => {
                    console.log(res.data);
                    if (res.data.year_id) {
                        toast.warning(" Already Added", {
                            position: "top-right",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                        });
                    } else {
                        toast.success("Added Successfully", {
                            position: "top-right",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                        });
                        
                    }
                    windowReload();
                });
               
        } catch (err) {
            alert("Please Fill the Details");
        }
        axios.get(`${baseUrl}school`)
        .then((res: any) => {
          sessionStorage.setItem("School", JSON.stringify(res.data.data[0]));
        })
    };

    useEffect(() => {
        getAccessToken();
        axios
            .get(`${baseUrl}school`)
            .then((res: any) => {
                console.log(res.data.data);
                setGotSchoolDetails(res.data.data);
                console.log(res.data.data);
            })
            .catch((e: any) => {
                console.log(e);
            });
    }, [])
    return (
        <>
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
            <div id="wrapper">
                <Sidebar data={"Stu_fees"}></Sidebar>
                <div id="content-wrapper" className="d-flex flex-column">
                    <div id="content">
                        <Navbar></Navbar>
                        <div className="container" style={{ width: "1000px", marginBottom: "100px" }}>
                            <div className="card">
                                {gotSchoolDetails && gotSchoolDetails.length === 0 ? (
                                    <Form>
                                        <Row className='m-2'>
                                            <Col md={6}>
                                                School Name :
                                        </Col>
                                            <Col md={4}>
                                                <Form.Control type="text" onChange={(e: any) => {
                                                    setSchoolName(e.target.value);
                                                }} />

                                            </Col>
                                        </Row>
                                        <Row className='m-2'>
                                            <Col md={6}>
                                                Address:
                                        </Col>
                                            <Col md={4}>
                                                <Form.Control type="text" onChange={(e: any) => {
                                                    setSchoolAddress(e.target.value);
                                                }} />

                                            </Col>
                                        </Row>
                                        <Row className='m-2'>
                                            <Col md={6} >
                                                Branch:
                                        </Col>
                                            <Col md={4}>
                                                <Form.Control type="text" onChange={(e: any) => {
                                                    setSchoolBranch(e.target.value);
                                                }} />
                                            </Col>
                                        </Row>

                                        <Row className='m-2'>
                                            <Col md={6}>
                                                Terms :
                                        </Col>
                                            <Col md={4}>
                                                <Form.Control type="text" onChange={(e: any) => {
                                                    setSchoolTerms(e.target.value);
                                                }} />
                                            </Col>
                                        </Row>
                                        <Row className='m-2'>
                                            <Col md={6}>
                                                Optional Terms :
                                        </Col>
                                            <Col md={4}>
                                                <Form.Control type="text" onChange={(e: any) => {
                                                    setSchoolOptioanlTerms(e.target.value);
                                                }} />
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md={4} />
                                            <Col md={4} >
                                                <Button className='text-center'
                                                    type="submit"
                                                    onClick={(e: any) => {
                                                        {handleSubmit(e)};
                                                    }}
                                                >
                                                    Submit
                                            </Button>
                                            </Col>
                                            <Col md={4} />
                                        </Row>
                                    </Form>
                                ) :
                                    (
                                        <Form>
                                            <Row className='m-2'>
                                                <Col md={6}>
                                                    School Name:
                                    </Col>
                                                <Col md={4}>

                                                    {gotSchoolDetails && gotSchoolDetails.length && gotSchoolDetails.map((details: any) => {
                                                        return <option value={details.school_name}>{details.school_name}</option>;

                                                    })}

                                                </Col>
                                            </Row>
                                            <Row className='m-2'>
                                                <Col md={6}>
                                                    Address:
                                    </Col>
                                                <Col md={4}>

                                                    {gotSchoolDetails && gotSchoolDetails.length && gotSchoolDetails.map((details: any) => {
                                                        return <option value={details.address}>{details.address}</option>;

                                                    })}

                                                </Col>
                                            </Row>
                                            <Row className='m-2'>
                                                <Col md={6} >
                                                    Branch:
                                    </Col>
                                                <Col md={4}>

                                                    {gotSchoolDetails && gotSchoolDetails.length && gotSchoolDetails.map((details: any) => {
                                                        return <option value={details.branch}>{details.branch}</option>;

                                                    })}
                                                </Col>
                                            </Row>

                                            <Row className='m-2'>
                                                <Col md={6}>
                                                    Terms :
                                    </Col>
                                                <Col md={4}>

                                                    {gotSchoolDetails && gotSchoolDetails.length && gotSchoolDetails.map((details: any) => {
                                                        return <option value={details.term_count}>{details.term_count}</option>;

                                                    })}
                                                </Col>
                                            </Row>
                                            <Row className='m-2'>
                                                <Col md={6}>
                                                    Optional Terms :
                                        </Col>
                                                <Col md={4}>
                                                    {gotSchoolDetails && gotSchoolDetails.length && gotSchoolDetails.map((details: any) => {
                                                        return <option value={details.optional_term_count}>{details.optional_term_count}</option>;

                                                    })}
                                                </Col>
                                            </Row>

                                        </Form>
                                    )
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Profile