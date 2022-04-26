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

console.log(schoolName);

const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      getAccessToken();
      const res: any = await axios
        .post(`${baseUrl}school`, {
            school_name: schoolName,
            address: schoolAddress,
            branch: schoolBranch,
            term_count:Number(schoolNameterms),
            one_time:false
        })
        .then((res: any) => {
          console.log(res.data);
          if (res.data.year_id) {
            toast.success(" Added Successfully", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          } else {
            toast.warning(" Already Added", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          }
       
        });
    } catch (err) {
      alert("Please Fill the Details");
    }
  };

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
                        <div className="container">
                            <div className="card">
                            <Form>
                                <Row className='m-2'>
                                    <Col md={6}>
                                        School Name:
                                    </Col>
                                    <Col md={4}>
                                        <Form.Control type="text" 	onChange={(e: any) => {
																		setSchoolName(e.target.value);
																	}}/>
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
                                        <Form.Control type="text"  onChange={(e: any) => {
																		setSchoolTerms(e.target.value);
																	}} />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={4} />
                                    <Col md={4} >
                                        <Button className='text-center'
                                        type="submit"
                                        onClick={(e: any) => {
                                            handleSubmit(e);
                                          }}
                                        >
                                            Submit
                                        </Button>
                                    </Col>
                                    <Col md={4} />
                                </Row>
                            </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Profile