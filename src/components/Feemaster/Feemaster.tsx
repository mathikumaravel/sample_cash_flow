import React from 'react'
import Sidebar from '../Layouts/Sidebar'
import Navbar from '../Layouts/Navbar'

const Feemaster = () =>{

    return(
        <div>
        <div id="page-top">
          <div id="wrapper">
            <Sidebar></Sidebar>
            <div id="content-wrapper" className="d-flex flex-column">
              <div id="content">
                <Navbar></Navbar>
                <div className="container-fluid">
                 <div>
                 <div className="card shadow mb-4" style={{"marginLeft":"15%","width":"50%"}}>
   <div className="card-header py-3">
   <div className="md-4 sm-4">
       <div className="form-group">
           <div>
               <label className="text-danger" style={{"fontSize":"18px"}}> Fee Master</label>
   <button type="submit" className="btn btn-primary btn-sm" style={{"float":"right"}} data-toggle="modal" data-target="#exampleAddModal">
                     ADD
                 </button>
           </div>

       </div>

   </div>
     <div style={{"textAlign": "right"}}>
  </div>
   </div>
   <div className="card-body">
    <div className="table-responsive">
         <div className="dataTables_wrapper dt-bootstrap4 no-footer"><div className="row"><div className="col-sm-12 col-md-6"><div className="dataTables_length"><label>Show <select name="dataTable_length" aria-controls="dataTable" className="custom-select custom-select-sm form-control form-control-sm">
             <option value="10">10</option>
             <option value="25">25</option>
             <option value="50">50</option>
             <option value="100">100</option>
             </select> entries</label></div></div>
             <div className="col-sm-12 col-md-6">
        <div id="dataTable_filter" className="dataTables_filter">
            <label>Search:<input type="search" className="form-control form-control-sm" />
            </label>
            </div>
            </div>
            </div>
            <div className="row"><div className="col-sm-12">
                <table className="table dataTable no-footer"  width="100%" role="grid" aria-describedby="dataTable_info" style={{"width":"100%"}}>
			<thead>
				<tr role="row">
    <th className="sorting_asc" style={{"width":"134px"}}>Fee Type </th>
    <th className="sorting"  style={{"width": "50px"}}>Order</th>
    <th className="sorting"  style={{"width":"66px"}}>Action</th></tr></thead>
			  <tbody>
				<tr data-feetypemasterid="22" data-feetypemastername="Admission Fees" data-feetypeorderid="1" role="row" className="odd">
				  <td className="fee_type_name sorting_1">Admission Fees</td>
				  <td className="order_id">1</td>
				  <td> <a href="/update/22" style={{"marginLeft":"10px"}} className="fa fa-edit fa-1x text-success" data-toggle="modal"></a>
                <a style={{"marginLeft":"10px"}} className="far fa-trash-alt text-danger" data-target="# "></a></td>

				</tr><tr data-feetypemasterid="23" data-feetypemastername="Book Fee" data-feetypeorderid="2" role="row" className="even">
				  <td className="fee_type_name sorting_1">Book Fee</td>
				  <td className="order_id">2</td>
				  <td> <a href="/update/23" style={{"marginLeft":"10px"}} className="fa fa-edit fa-1x text-success" data-toggle="modal"></a>
                <a style={{"marginLeft":"10px"}} className="far fa-trash-alt text-danger " data-toggle="modal" data-target="# "></a></td>

				</tr><tr data-feetypemasterid="30" data-feetypemastername="I Hostel" data-feetypeorderid="8" role="row">
				  <td className="fee_type_name sorting_1">I Hostel</td>
				  <td className="order_id">8</td>
				  <td> <a href="/update/30" style={{"marginLeft":"10px"}} className="fa fa-edit fa-1x text-success"  data-toggle="modal"></a>
                <a style={{"marginLeft":"10px"}} className="far fa-trash-alt text-danger" data-toggle="modal" data-target="# "></a></td>

				</tr><tr data-feetypemasterid="28" data-feetypemastername="I Trasnport Fees" data-feetypeorderid="7" role="row">
				  <td className="fee_type_name sorting_1">I Trasnport Fees</td>
				  <td className="order_id">7</td>
				  <td> <a href="/update/28" style={{"marginLeft":"10px"}} className="fa fa-edit fa-1x text-success" data-toggle="modal"></a>
                <a style={{"marginLeft":"10px"}} className="far fa-trash-alt text-danger " data-toggle="modal" data-target="# "></a></td>

				</tr><tr data-feetypemasterid="33" data-feetypemastername="II Food" data-feetypeorderid="11" role="row" >
				  <td className="fee_type_name sorting_1">II Food</td>
				  <td className="order_id">11</td>
				  <td> <a href="/update/33" style={{"marginLeft":"10px"}} className="fa fa-edit fa-1x text-success" data-toggle="modal"></a>
                <a style={{"marginLeft":"10px"}} className="far fa-trash-alt text-danger " data-toggle="modal" data-target="# "></a></td>

				</tr><tr data-feetypemasterid="34" data-feetypemastername="II Hostel" data-feetypeorderid="12" role="row">
				  <td className="fee_type_name sorting_1">II Hostel</td>
				  <td className="order_id">12</td>
				  <td> <a href="/update/34" style={{"marginLeft":"10px"}} className="fa fa-edit fa-1x text-success" data-toggle="modal"></a>
                <a style={{"marginLeft":"10px"}} className="far fa-trash-alt text-danger " data-toggle="modal" data-target="# "></a></td>

				</tr><tr data-feetypemasterid="31" data-feetypemastername="II Term Fees" data-feetypeorderid="9" role="row">
				  <td className="fee_type_name sorting_1">II Term Fees</td>
				  <td className="order_id">9</td>
				  <td> <a href="/update/31" style={{"marginLeft":"10px"}} className="fa fa-edit fa-1x text-success" data-toggle="modal"></a>
                <a style={{"marginLeft":"10px"}} className="far fa-trash-alt text-danger " data-toggle="modal" data-target="# "></a></td>

				</tr><tr data-feetypemasterid="32" data-feetypemastername="II Trasnport Fees" data-feetypeorderid="10" role="row">
				  <td className="fee_type_name sorting_1">II Trasnport Fees</td>
				  <td className="order_id">10</td>
				  <td> <a href="/update/32" style={{"marginLeft":"10px"}} className="fa fa-edit fa-1x text-success" data-toggle="modal"></a>
                <a style={{"marginLeft":"10px"}} className="far fa-trash-alt text-danger " data-toggle="modal" data-target="# "></a></td>

				</tr></tbody>



         </table></div></div><div className="row">
             <div className="col-sm-12 col-md-5">
                 <div className="dataTables_info" id="dataTable_info" role="status" aria-live="polite">Showing 1 to 10 of 14 entries</div>
                 </div>
                 <div className="col-sm-12 col-md-7">
                     <div className="dataTables_paginate paging_simple_numbers" id="dataTable_paginate">
                         <ul className="pagination">
                             <li className="paginate_button page-item previous disabled" id="dataTable_previous">
                                 <a href="#" aria-controls="dataTable" data-dt-idx="0" >Previous</a></li>
                                 <li className="paginate_button page-item active">
                                     <a href="#" aria-controls="dataTable" data-dt-idx="1">1</a></li>
                                     <li className="paginate_button page-item "><a href="#" aria-controls="dataTable">2</a></li>
                                     <li className="paginate_button page-item next" id="dataTable_next">
                                         <a href="#" aria-controls="dataTable" data-dt-idx="3" >Next</a></li>
                                     </ul></div></div></div></div>
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
export default Feemaster