import React from "react";
import Sidebar from "../Layouts/Sidebar";
import Navbar from "../Layouts/Navbar";
import Listofpayment from "./Listofpayment";

const Studentpay = () => {
  return (
    <div>
      <div id="page-top">
        <div id="wrapper">
          <Sidebar></Sidebar>
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              <Navbar></Navbar>
              <div className="container-fluid">
                <div>
                  <div className="row">
                    <div
                      className="col-lg-12"
                      style={{ position: "relative", top: "20px" }}
                    >
                      <div className="card shadow  mb-3">
                        <a style={{ color: "rgb(230,63,63)" }}> </a>

                        <div className="card-header bg-transparent border-1 text-center">
                          <a style={{ color: "rgb(230, 63, 63)" }}>
                            <h4 className="mb-0">
                              <a>
                                <i className="far fa-clone pr-1"></i>Fees
                              </a>{" "}
                              <a
                                className="btn btn-success btn float-right"
                                href="/Student"
                              >
                                Back
                              </a>
                            </h4>
                          </a>
                        </div>
                        <div className="row col-md-12">
                          <div className="col-md-6" style={{ padding: "10px" }}>
                            <table>
                              <tbody>
                                <tr>
                                  <th>Student Name</th>
                                  <td width="1%">:</td>
                                  <td> asainkk</td>
                                </tr>
                                <tr>
                                  <th>Academic Year</th>
                                  <td width="1%">:</td>
                                  <td>2022-2023</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <div
                            className="col-md-6"
                            style={{ padding: "10px;" }}
                          >
                            <table>
                              <tbody>
                                <tr>
                                  <th>Total</th>
                                  <td width="1%">:</td>
                                  <td id="sum">0.00</td>
                                </tr>
                                <tr>
                                  <th> </th>
                                  <td width="1%"></td>
                                  <td>
                                    <button
                                      type="button"
                                      className="btn btn-primary refbtn "
                                      data-toggle="modal"
                                      data-target="#exampleModal"
                                    >
                                      Refund
                                    </button>
                                  </td>
                                  <td></td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                        <form id="my-form">
                          <input
                            type="hidden"
                            name="_token"
                            value="9ZCT5fQt8t9Y6lGty7MbAPv9rKQKc4vV4X9P2yOm"
                          />
                          <div className="table-responsive">
                            <div className="card-body bg-transparent">
                              <table>
                                <thead>
                                  <tr>
                                    <th>Fee Type Name</th>
                                    <th>Actual fees</th>
                                    <th>Paid</th>
                                    <th style={{ padding: "13px" }}>Balance</th>
                                    <th>
                                      Date
                                      <span className="text-danger"> * </span>
                                    </th>
                                    <th>
                                      Amount
                                      <span className="text-danger"> * </span>
                                    </th>
                                    <th>
                                      Mode of Payment
                                      <span className="text-danger"> * </span>
                                    </th>
                                    <th>Comments</th>

                                    <th>
                                      <input
                                        type="submit"
                                        className="btn btn-success float-right btn-sm save btn"
                                        id="btn"
                                      />
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr id="trpayment">
                                    <td>
                                      <input
                                        type="hidden"
                                        name="fee_name[0][fee_type]"
                                        value="Admission"
                                      />
                                      Admission Fees
                                    </td>
                                    <input
                                      type="hidden"
                                      name="fee_name[0][master_id]"
                                      value="22"
                                    />
                                    <input
                                      type="hidden"
                                      name="fee_name[0][student_admissions_id]"
                                      value="100065"
                                    />
                                    <input
                                      type="hidden"
                                      name="fee_name[0][academic_year]"
                                      value="2022-2023"
                                    />
                                    <input
                                      type="hidden"
                                      name="fee_name[0][grade_id]"
                                      value="I"
                                    />
                                    <input
                                      type="hidden"
                                      name="fee_name[0][year_of_fees_id]"
                                      value="103"
                                    />
                                    <input
                                      type="hidden"
                                      name="fee_name[0][student_id]"
                                      value="MVM100065"
                                    />

                                    <td>
                                      <input
                                        type="hidden"
                                        name="fee_name[0][fee_amount]"
                                        value="333"
                                      />
                                      333
                                    </td>

                                    <td> </td>

                                    <td
                                      style={{ padding: "14px" }}
                                      className="nr"
                                    ></td>
                                    <td
                                      style={{ display: "none" }}
                                      id="balance"
                                    >
                                      332
                                    </td>

                                    <td>
                                      {" "}
                                      <input
                                        type="date"
                                        id="payment_date"
                                        className="form-control payment_date"
                                        name="fee_name[0][payment_date]"
                                        style={{ width: "86%" }}
                                      />
                                    </td>
                                    <td>
                                      <input
                                        type="text"
                                        name="fee_name[0][paid_amount]"
                                        id="txtamount"
                                        className="form-control input-sm txtamt nk"
                                        placeholder="Enter Amount"
                                      />
                                    </td>
                                    <td>
                                      <select
                                        className="form-control"
                                        name="fee_name[0][modeof_payment]"
                                        id="mode_of_payment"
                                      >
                                        <option value="Select">
                                          --Select--
                                        </option>
                                        <option value="Cash">Cash</option>
                                        <option value="Card">Card</option>
                                        <option value="Direct Acc.">
                                          Direct Acc.
                                        </option>
                                        <option value="Emp. Account">
                                          Emp. Account
                                        </option>
                                      </select>
                                    </td>
                                    <td>
                                      <input
                                        type="text"
                                        name="fee_name[0][txtcomments]"
                                        id="comments"
                                        className="form-control input-sm txtcomments"
                                        placeholder="Enter Comments"
                                      />
                                    </td>
                                  </tr>
                                </tbody>
                                <tfoot>
                                  <tr>
                                    <th>Total</th>
                                    <th id="totalfeeamt">333</th>
                                    <th id="totalpaidamt"> 1</th>
                                    <th
                                      style={{ padding: "13px" }}
                                      id="totalbalamt"
                                    >
                                      332
                                    </th>
                                    <th></th>
                                    <th> </th>
                                  </tr>
                                </tfoot>
                              </table>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                </div>
                 <Listofpayment></Listofpayment>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Studentpay;

{
  /* 
<div className="row">    
            <div className="col-lg-12">
             <div className="card shadow mb-4">
            <div className="card-header py-3">
            <h4 className="m-0 font-weight-bold text-danger text-center">
            <a><i className="far fa-clone pr-1"></i> Fees</a> <a className="btn btn-success btn-sm float-right" href="/Stu_pay">Back</a>
            </h4>
           
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-xl-4 col-md-3 mb-4">
                <div>
                  <h6>Date</h6>
                </div>
                <div>
                  <label>2022-01-04</label>
                </div>
              </div>

              <div className="col-xl-4 col-md-3 mb-4">
                <div>
                  <h6>Fee Type</h6>
                </div>
                <div>
                  <label>Admission Fees</label>
                </div>
              </div>
              <div className="col-xl-4 col-md-3 mb-4">
                <div>
                <h6>Amount</h6>
                </div>
                <div>
                  <label>1.00</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      </div> */
}
