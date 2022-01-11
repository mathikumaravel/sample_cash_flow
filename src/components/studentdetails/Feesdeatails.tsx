import react from "react";

const Feesdetails = () => {
  return (
    <div>
    <div className="row">    
      <div className="col-lg-6">
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h4 className="m-0 font-weight-bold text-danger text-center">
            <a><i className="fas fa-wallet"></i> Payment</a> <a className="btn btn-success btn-sm float-right" href="/Stu_pay">Pay or View All</a>
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

      <div className="col-lg-6">
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h4 className="m-0 font-weight-bold text-danger text-center">
              <i className="fas fa-money-bill-wave-alt"></i> Year of Balance
            </h4>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-xl-6 col-md-3 mb-4">
                <div>
                  <h6>Academic Year</h6>
                </div>
                <div>
                  <label>2022-2023</label>
                </div>
              </div>

              <div className="col-xl-6 col-md-3 mb-4">
                <div>
                  <h6>Balance</h6>
                </div>
                <div>
                  <label>332</label>
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
export default Feesdetails;
