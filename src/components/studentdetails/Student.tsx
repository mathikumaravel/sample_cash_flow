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
          <div id="content">
            <Navbar></Navbar>
            <div className="container-fluid">
              <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Students Records</h1>
                <div className="col-xl-6 col-md-2 mb-4">
                <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control bg-light border-0 small"
                      placeholder="Search for..."
                      aria-label="Search"
                      aria-describedby="basic-addon2"
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

                        <div className="col-xl-6 col-md-6 mb-3">
                            <div className="card border-left-primary shadow h-100 py-2">
                                <div className="card-body">
                                    <div className="row no-gutters align-items-center">
                                    <div className="row">
                                       <div className="col-xl-5 col-md-3 mb-4">
                                           <div><label>Student Name</label></div>
                                            <div><label>Grade</label></div>
                                            <div><label>Section</label></div>
                                            <div> <label>Admission ID</label></div>
                                           <div><label>Admission No</label></div>
                            
                                        </div>

                                        <div className="col-xl-5 col-md-3 mb-4">
                                            <div><label>Karthick</label></div>
                                            <div> <label>I</label></div>
                                            <div><label>A</label></div>
                                           <div><label>MVM100065</label></div>
                                           <div><label>6343</label></div>
                            
                                        </div>
                                        <div className="col-xl-2 col-md-3 mb-4">
                                        <a type="button" className="btn-floating btn-lg blue-gradient" style= {{ "color": "red", "cursor":"pointer"}}><i className="fas fa-edit fa-2x text-200"></i></a></div>
                                         </div>  
                                       
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-6 col-md-6 mb-3">
                            <div className="card border-left-success shadow h-100 py-2">
                                <div className="card-body">
                                    <div className="row no-gutters align-items-center">
                                      
                                     <div className="row">
                                       <div className="col-xl-6 col-md-3 mb-4">
                                           <div><label>FatherName</label></div>
                                           <div><label>Phone No</label></div>
                                            <div><label>Alt.PhoneNo</label></div>
                                            <div><label>Address</label></div>
                                            <div><label>Email</label></div>
                                            <div><label>Status</label></div>
                                        </div>

                                        <div className="col-xl-6 col-md-3 mb-4">
                                            <div><label>MuthuRaj</label></div>
                                            <div><label>9876543212</label></div>
                                            <div><label>9789456790</label></div>
                                            <div><label>kanmani street</label></div>
                                            <div><label>admin@gmail.com</label></div>
                                            <div><label>Active</label></div>
                                            
                                        </div>
        
                                         </div>  
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
  );
};
export default Student;
