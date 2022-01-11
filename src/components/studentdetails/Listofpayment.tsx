import React from 'react';
import { MDBDataTableV5 } from 'mdbreact';
import Sidebar from '../Layouts/Sidebar';
import Navbar from '../Layouts/Navbar';

const Listofpayment = ()=>{
    const [datatable, setDatatable] = React.useState<any>({
        columns: [
          {
            label: 'Fee Type Name',
            field: 'FeeTypeName',
            width: 150,
            attributes: {
              'aria-controls': 'DataTable',
              'aria-label': 'Fee Type Name',
            },
          },
          {
            label: 'Payment Date',
            field: 'PaymentDate',
            width: 270,
          },
          {
            label: 'Actual Fees',
            field: 'ActualFees',
            width: 200,
          },
          {
            label: 'Paid Amount',
            field: 'PaidAmount',
            sort: 'asc',
            width: 100,
          },
          {
            label: 'Refund Amount',
            field: 'RefundAmount',
            sort: 'disabled',
            width: 150,
          },
          {
            label: 'Payment Mode',
            field: 'PaymentMode',
            sort: 'disabled',
            width: 100,
          },
          {
            label: 'Comments',
            field: 'Comments',
            sort: 'disabled',
            width: 100,
          },
        ],
        rows: [
          {
            FeeTypeName: "Admission Fees",
            PaymentDate: '2022-01-04',
            ActualFees: '333',
            PaidAmount: '1.00',
            RefundAmount: '0.00',
            PaymentMode: 'Cash',
            Comments: '',
          }
        ],
      });
    
    return(
        <div>
            <div className="col-md-12" style={{"padding":"20px"}}>
       <div className="card shadow">  
          <div className="card-header text-center">
            <h6 className="m-0 font-weight-bold text-danger">List of Payment</h6>
          </div>
          <div className="row" style={{"padding":"10px"}}>
      <div className="col-md-5">
        <table> 
          <tr>
            <th>Student Name</th>
            <td width="1%">:</td>
            <td>asainkk</td>
          </tr>
		  <tr>
            <th>Admission ID</th>
            <td width="1%">:</td>
            <td >MVM100065</td>
          </tr>
          <tr>
            <th>Admission No</th>
            <td width="1%">:</td>
            <td>100065</td>
          </tr>
        </table>
      </div>
      <div className="col-md-5"  >
        <table>
          <tr>
            <th>Class & Section</th>
            <td width="1%">:</td>
            <td>I</td>
          </tr>
          <tr>
            <th>Academic_year</th>
            <td width="1%">:</td>
            
            <td>
              <div className="form-group "  >  
                  <select className="form-control" name="section" id="academic_year">
                    <option value=""> --Select--</option>
					
					<option >2022-2023</option>
                
                  </select>
                </div>
          </td>
          </tr>
          
        </table>
        </div>
        </div>
        <MDBDataTableV5 hover entriesOptions={[5, 20, 25]} entries={5} pagesAmount={4} data={datatable} searchTop searchBottom={false} />
        
        </div>
        </div>
        </div>
    )

}
export default Listofpayment;

