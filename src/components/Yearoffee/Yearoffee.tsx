import React from 'react';
import Sidebar from '../Layouts/Sidebar';
import Navbar from '../Layouts/Navbar';

const Yearoffee =()=>{
    return(
        <div>
        <div id="page-top">
          <div id="wrapper">
            <Sidebar></Sidebar>
            <div id="content-wrapper" className="d-flex flex-column">
              <div id="content">
                <Navbar></Navbar>
                <div className="container-fluid">
                  <div className="col-xl-11 m-auto">
                      <div>
                      <div className="col-lg-10" style={{"marginLeft":"10%","width":"90%"}}>
                <div className="card mb-3">
                  <a style={{"color": "rgb(230, 39, 39)"}}>
                <div className="card-header bg-transparent border-1 text-center">
                  <h4 className="mb-0 "><i className="far fa-clone pr-1"></i> Fee Details</h4>
<div style={{"textAlign":"right"}}>

    <button type="button" className="btn btn-primary btn-sm" data-toggle="modal" data-target="#myModal"> ADD</button>
          </div>
                </div>
                     </a>
        <div className='container'>
             <div className="card-body bg-transparent">
                      <div style={{"position":"relative","marginLeft":"680px"}}>
                 </div>
                 <table width="100%" >
                        <thead>             
                          <tr>
                         <th>Academic year  </th>
                          <th>Grade</th>

                        </tr></thead>
                        <tbody>
                          <tr>
    
                            <td>
                                <div className="form-group" style={{"marginTop":"30px"}} >
                           <select className="form-control" name="academic_year" id="academic_year" style={{"width":"165px"}}>
                               <option>--Select Year--</option>
                               <option value="2020-2021">2020-2021</option>
                               <option value="2021-2022">2021-2022</option>
                               <option value="2022-2023" >2022-2023</option>
                               <option value="2023-2024">2023-2024</option></select>
                                  </div>
                            </td>
                            <td>
                             <div className="form-group">

                               <select className="form-control"  style={{"width":"165px","marginTop":"30px"}}>
                                <option value=""> --Select Grade--</option>
                                                                <option value="I">I</option>
                                                                <option value="II">II</option>
                                                                <option value="III">III</option>
                                                                <option value="IV">IV</option>
                                                                <option value="V">V</option>
                                                                <option value="VI">VI</option>
                                                                <option value="VII">VII</option>
                                                                <option value="VIII">VIII</option>
                                                                <option value="IX">IX</option>
                                                                <option value="X">X</option>
                                                                <option value="XII">XII</option>
                                                                <option value="XI">XI</option>
                                                            </select>
                             </div>
                            </td>
                            <td>
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
                  </div>
                  </div>
                
    
    )
}
export default Yearoffee