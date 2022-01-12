import React from 'react'
import Sidebar from "../Layouts/Sidebar";
import Navbar from "../Layouts/Navbar";

const Promotion = () =>{
return(
<div id="page-top">
      <div id="wrapper">
        <Sidebar></Sidebar>
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Navbar></Navbar>
            <div className="container-fluid">
            <div className="col-lg-12"  style={{"position": "relative","top":"20px"}}>
                <div className="card mb-3">
                  <a style={{"color": "rgb(230, 39, 39)"}}>
                <div className="card-header bg-transparent border-1 text-center">
                  <h4 className="mb-0 "><i className="far fa-clone pr-1"></i> Promotion</h4>
                
                </div>
                     </a>
     <div className="card-body bg-transparent">
           <div className="container-fluid">
            <div className="row">
                      <table>
                      <div style={{"position":"relative","marginBottom":"30px"}}>
                
                      </div>
                        <thead>
                          <th className="col-xl-4">From Academic year</th>
                          <th className="col-xl-4">Grade</th>
                          <th className="col-xl-4">Section</th>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                         <div className="form-group col-xl-4">  
                           <select className="form-control" name="academic_year" id="academic_year" style={{"width":"165px"}}  required>
                           <option> --Academic_Year--</option>
                                    <option>2020-2021</option>
							  </select>
                              </div>
                              </td>
                            <td>
                             <div className="form-group">  
                               <select className="form-control" name="from_grade_id" id="from_grade_id" style={{"width":"165px"}} required>
                                <option> --Select Grade--</option>
                                <option>II</option>
                            </select>
                             </div>
                            </td>
                            <td>
                                <div className="form-group">  
                                  <select className="form-control" name="from_section_id"  id="from_section_id"  style={{"width":"165px"}} required>
                                  <option> --Select Section--</option>
                                  <option>A</option>
                            </select>
                                </div>
                               </td> 
                          </tr>
                        </tbody>
                        
						
                       </table>
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
)
}

export default Promotion