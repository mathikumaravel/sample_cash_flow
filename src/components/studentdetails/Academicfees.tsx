import React from 'react'

const Academicfees = () =>{
    return(
        <div className="col-lg-11">
        <div className="card shadow mb-5">
          <div className="card-header py-3">
            <h4 className="m-0 font-weight-bold text-danger text-center">
            <i className="fa fa-address-card"></i>{' '}Student Academic Fees
            </h4>
          </div>
          <div className="card-body">
               <table className="table">
  <thead>
    <tr>
      <th scope="col">Fee Type Name</th>
      <th scope="col">Actual fees</th>
      <th scope="col">Discount</th>
      <th scope="col">Fee Discount Type</th>
      <th scope="col">Updated Fees</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Admission Fees</td>
      <td>333</td>
      <td></td>
      <td></td>
      <td>333</td>
      <td><button className="btn btn-lg primary">
   <i className="fas fa-edit text-300"></i>
</button></td>
    </tr>
  </tbody>
  <thead>
      <tr>
          <th>Total</th>
          <th>333</th>
          <th>0</th>
          <th></th>
          <th>333</th>
      </tr>
  </thead>
</table>
          </div>
        </div>
      </div>

    )

}

export default Academicfees