import React from "react";
import Sidebar from "../Layouts/Sidebar";
import Navbar from "../Layouts/Navbar";
import Feesdetails from "./Feesdeatails";
import Academicfees from "./Academicfees";

const Student = () => {

  return (
    <div id="page-top">
      <div id="wrapper">
        <Sidebar></Sidebar>
        <div id="content-wrapper" className="d-flex flex-column">
       <div className="student-profile py-2">
          <div id="content">
            <Navbar></Navbar>
            <div className="container" style={{"marginLeft":"3%"}}>
              <div className="d-sm-flex align-items-center justify-content-between mb-4">

              <div className="col-xl-12 col-md-2 mb-5 text-center">
                <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-10 my-md-0 mw-100">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control bg-light border-0 small"
                      placeholder="Search for..."
                      aria-label="Search"
                      aria-describedby="basic-addon2"
                      style={{"width":"480px"}}
                    />
                    <div className="input-group-append">
                      <button className="btn btn-danger" type="button">
                        <i className="fas fa-search fa-sm"></i>
                      </button>
                    </div>
                  </div>
                </form>
                
                </div>
              </div>

              <div className="row">   
                    <div className="col-lg-6">
                      <div className="card shadow mb-5">
                        <div className="card-body bg-transparent">
                          <div style={{"marginLeft":"420px"}}>                         
                              <i className="fa fa-edit profile_btn-edit" style={{"fontSize": "25px","color":"red","cursor":"pointer"}} ></i>                  
                            </div>
                          <div className="row">
                            <div className="col-sm-4">
                              <p className="mb-2"><strong className="pr-1">Student Name</strong> </p>
                            </div>
                            <div className="col-md-6 text-black" id="stud_name">asainkk</div>
                          </div>
                          <div className="row" style={{"marginTop":"5px"}}>
                            <div className="col-sm-4">
                              <p className="mb-2"><strong className="pr-1">Grade</strong> </p>
                            </div>
                            <div className="col-md-5 text-black" id="stud_grade">I</div>
                          </div>
                          <div className="row" style={{"marginTop":"5px"}}>
                              <div className="col-sm-4">
                                <p className="mb-2"><strong className="pr-1">Section</strong> </p>
                              </div>
                              <div className="col-md-5 text-black" id="stud_section">A</div>
                            </div>
                          <div className="row" style={{"marginTop":"5px"}}>
                            <div className="col-sm-4">
                              <p className="mb-2"><strong className="pr-1">Admission ID</strong> </p>
                            </div>
                            <div className="col-md-6 text-black" id="stud_id">
                              MVM100065
                            </div>
                          </div>
                          <div className="row" style={{"marginTop":"5px"}}>
                            <div className="col-sm-4">
                              <p className="mb-2"><strong className="pr-1">Admission No</strong> </p>
                            </div>
                            <div className="col-md-8 text-black" id="stud_adminid">6343</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-5">
                      <div className="card shadow mb-5">
                        <div className="card-body bg-transparent">
                          <div className="row">
                            <div className="col-sm-4">
                              <p className="mb-2"><strong className="pr-1">Father Name</strong> </p>
                            </div>
                            <div className="col-md-6 text-black" >dqwd</div>
                          </div>
                          <div className="row" style={{"marginTop":"5px"}}>
                            <div className="col-sm-4">
                              <p className="mb-2"><strong className="pr-1">Phone No</strong> </p>
                            </div>
                            <div className="col-md-6 text-black" id="stud_phno">9876543212</div>
                          </div>
                          <div className="row" style={{"marginTop":"5px"}}>
                            <div className="col-sm-4">
                              <p className="mb-2"><strong className="pr-1">Alt. Phone No</strong> </p>
                            </div>
                            <div className="col-md-6 text-black" id="stud_altphno"></div>
                          </div>
                          <div className="row" style={{"marginTop":"5px"}}>
                            <div className="col-sm-4">
                              <p className="mb-2"><strong className="pr-1">Address</strong> </p>
                            </div>
                            <div className="col-md-6 text-black" id="stud_add">dwqd</div>
                          </div>
                          <div className="row" style={{"marginTop":"5px"}}>
                              <div className="col-sm-4">
                                <p className="mb-2"><strong className="pr-1">Email</strong> </p>
                              </div>
                              <div className="col-md-6 text-black" id="stud_email">akila@gmail.com</div>

                            </div>

                          <div className="row" style={{"marginTop":"5px"}}>
                            <div className="col-sm-4">
                          <p className="mb-2"><strong className="pr-1">Status</strong></p>
                          </div>
                            <div className="col-md-8 text-black">Active</div>

                          </div>
                        </div>

                      </div>
                    </div>

                  </div>
                
                 <Feesdetails></Feesdetails>
                 <Academicfees></Academicfees>
                 </div>
                 </div>
              
          </div>
          </div> 
        </div>
      </div>

  );
};
export default Student;



