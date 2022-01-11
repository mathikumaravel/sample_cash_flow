import React from "react";
import Navbar from "../Layouts/Navbar";
import Sidebar from "../Layouts/Sidebar";

const Studentadd = () => {
  return (
    <div id="page-top">
      <div id="wrapper">
        <Sidebar></Sidebar>
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Navbar></Navbar>
            <div className="container-fluid">
              <div className="col-xl-11 m-auto">
                <div className="card-header">
                  <h4
                    className="card-title font-weight text-center"
                    style={{ color: "red" }}
                  >
                    New Admission
                  </h4>
                </div>
         <div className="row">
                <div className="col-md-6">
                    <div className="card-body">
                        <div className="form-group row">
                            <label className="col-md-5 col-form-label text-md-right" >Admission No<span className="text-danger"> * </span></label>
                            <div className="col-md-6">
                                <input type="text" id="admission_no" className="form-control" name="admission_no" />
                                <span style={{"color":"red"}}></span>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-md-5 col-form-label text-md-right">Student Name<span className="text-danger"> * </span></label>
                            <div className="col-md-6">
                                <input type="text" id="name" className="form-control" name="student_name"></input>
                            <span style={{"color":"red"}}></span>
                            </div>
                        </div>

                        <div className="form-group row">
                            <label  className="col-md-5 col-form-label text-md-right">From Grade<span className="text-danger">  </span></label>
                            <div className="col-md-6">
                                 <select className="form-control" name="from_grade_id" id="from_grade_id">
                                <option> --Select Grade--</option>
                                <option >I</option>
                                <option >II</option>
                                <option >III</option>
                                <option >IV</option>
                                <option >V</option>
                                <option >VI</option>
                                
                            </select>
                            </div>
                        </div>

                        <div className="form-group row">
                            <label  className="col-md-5 col-form-label text-md-right">DOB<span className="text-danger"> * </span></label>
                            <div className="col-md-6">
                                <input type="date" id="date_field" className="form-control" name="date_field" value="{{ old('date_field') }}"/>
                                <span style={{"color":"red"}}></span>
                            </div>
                        </div>
                        
                        {/* <div className="form-group row">
                            <label  className="col-md-5 col-form-label text-md-right">Gender<span className="text-danger"> * </span></label>
                            <div className="col-md-6">

                                    <input type="radio"  id="student" name="gender" value="Male" > Male</input>
                                    <input type="radio"  id="student" name="gender" value="Female"> Female</input>

                                    <span style={{"color":"red"}}></span>

                            </div>
                        </div> */}
                        <div className="form-group row">
                            <label  className="col-md-5 col-form-label text-md-right">Email</label>
                            <div className="col-md-6">
                                <input type="text" id="email" className="form-control" name="email"/>

                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-md-5 col-form-label text-md-right">Admission Date<span className="text-danger"> * </span></label>
                            <div className="col-md-6">
                                <input type="date" id="admission_date" className="form-control" name="admission_date" />
                                <span style={{"color":"red"}}></span>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label  className="col-md-5 col-form-label text-md-right">Academic Year<span className="text-danger"> * </span></label>
                            <div className="col-md-6">
                                <select className="form-control" name="academic_year" id="academic_year">

							  </select>
                                <span style={{"color":"red"}}></span>
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
    </div>
  );
};
export default Studentadd;
