import React from "react";
import Navbar from "../Layouts/Navbar";
import Sidebar from "../Layouts/Sidebar";
import '../../App.css';

const Studentadd = () => {
  return (
    <div>
    <div id="page-top">
      <div id="wrapper">
        <Sidebar></Sidebar>
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Navbar></Navbar>
            <div className="container-fluid">
              <div className="col-xl-11 m-auto">
             <form>  
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
                                <input type="text" id="admission_no" className="form-control" required/>
                                <span style={{"color":"red"}}></span>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-md-5 col-form-label text-md-right">Student Name<span className="text-danger"> * </span></label>
                            <div className="col-md-6">
                                <input type="text" id="name" className="form-control" name="student_name" required></input>
                            <span style={{"color":"red"}}></span>
                            </div>
                        </div>

                        <div className="form-group row">
                            <label  className="col-md-5 col-form-label text-md-right">From Grade<span className="text-danger">  </span></label>
                            <div className="col-md-6">
                                 <select className="form-control" name="from_grade_id" id="from_grade_id" required>
                                <option > --Select Grade--</option>
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
                                <input type="date" id="date_field" className="form-control" name="date_field" required/>
                                <span style={{"color":"red"}}></span>
                            </div>
                        </div>
       
                        <div className="form-group row">
                            <label  className="col-md-5 col-form-label text-md-right">Gender<span className="text-danger"> * </span></label>
                            <div className="col-md-6">
                            <label className="radio-inline"><input type="radio" name="optradio" checked/>Male</label>{' '}
                            <label className="radio-inline"><input type="radio" name="optradio"/>Female</label>
                        </div>
                        </div>
                        <div className="form-group row">
                            <label  className="col-md-5 col-form-label text-md-right">Email</label>
                            <div className="col-md-6">
                                <input type="text" id="email" className="form-control" name="email" required/>

                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-md-5 col-form-label text-md-right">Admission Date<span className="text-danger"> * </span></label>
                            <div className="col-md-6">
                                <input type="date" id="admission_date" className="form-control" name="admission_date" required />
                                <span style={{"color":"red"}}></span>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label  className="col-md-5 col-form-label text-md-right">Academic Year<span className="text-danger"> * </span></label>
                            <div className="col-md-6">
                                <select className="form-control" name="academic_year" id="academic_year" required>
                                <option> --Select Year--</option>
                                <option>2021-2022</option>
                                <option>2023-2024</option>
                                <option>2025-2026</option>
                                <option>2027-2028</option>
							  </select>
                                <span style={{"color":"red"}}></span>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card-body">
                        <div className="form-group row">
                            <label  className="col-md-5 col-form-label text-md-right">To Grade<span className="text-danger"> * </span></label>
                            <div className="col-md-6">
                                <select className="form-control" name="to_grade_id">
                                <option> --Select Year--</option>
                                <option>I</option>
                                <option>II</option>
                                
								</select>
                                <span style={{"color":"red"}}></span>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label  className="col-md-5 col-form-label text-md-right">To Section<span className="text-danger"> * </span></label>
                            <div className="col-md-6">
                            <select className="form-control" name="to_section_id"  id="to_section_id" >
                            <option> --Select Year--</option>
                                <option>A</option>
                                <option>B</option>
                            </select>
                                <span style={{"color":"red"}}></span>
                            </div>
                        </div>

                        <div className="form-group row">
                            <label  className="col-md-5 col-form-label text-md-right" >Previous School Info<span className="text-danger"> * </span></label>
                            <div className="col-md-6">
                                <textarea className="form-control" name="p_school_info" required ></textarea>
                                <span style={{"color":"red"}}></span>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-md-5 col-form-label text-md-right">Father Name<span className="text-danger"> * </span></label>
                            <div className="col-md-6">
                                <input type="text" id="father_name" className="form-control" name="father_name" required/>
                                <span style={{"color":"red"}}></span>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label  className="col-md-5 col-form-label text-md-right">Father Occupation<span className="text-danger"> * </span></label>
                            <div className="col-md-6">
                                <input type="text" id="father_occupation" className="form-control" name="father_occupation" required/>
                                <span style={{"color":"red"}}></span>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-md-5 col-form-label text-md-right">Address<span className="text-danger"> * </span></label>
                            <div className="col-md-6">

                                <textarea  className="form-control" name="address" required></textarea>
                                <span style={{"color":"red"}}></span>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-md-5 col-form-label text-md-right">Phone No<span className="text-danger"> * </span></label>
                            <div className="col-md-6">
                                <input type="text" id="phone_number" className="form-control" name="phone_number" required  />
								<span style={{"color":"red"}}>Note:Phone No should be 10 digit.</span>
                                <span style={{"color":"red"}}></span>
                            </div>
                        </div>


                    </div>
                </div>
              </div>
              <div className="card-footerss">
                     <a href="/Student" type="submit" className="btn btn-danger float-right">Submit </a>
                    </div>
                    </form>
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
