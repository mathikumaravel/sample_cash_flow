import { useState, useEffect } from "react";
import Sidebar from "../Layouts/Sidebar";
import Navbar from "../Layouts/Navbar";
import {
  Button,
  Table,
  Pagination,
  Form,
  Spinner,
  Modal,
  Col,
  Row,
} from "react-bootstrap";
import { getAccessToken } from "../../config/getAccessToken";
import axios from "axios";
import { baseUrl } from "../../index";

const Feemaster = () => {
  const [statusFeeMasterEdit, setStatusFeeMasterEdit] = useState<any>(false);
  const [statusFeeMasterAdd, setStatusFeeMasterAdd] = useState<any>(false);

  const [feeTypeName, setFeeTypeName] = useState<any>("");
  const [orderId, setOrderId] = useState<any>("");
  const [duplication, setDuplication] = useState(false);
  const [getFeeMaster, setGetFeeMaster] = useState<any>([]);
  const [allAcademicYear, setAllAcademicYear] = useState<any[]>([]);
  const [academicDropdown,setAcademicDropdown] = useState<any>("");

  console.log(academicDropdown);

  const getfee = () => {
    getAccessToken();
    axios
      .get(`${baseUrl}fee_master/show_all`)
      .then((res: any) => {
        setGetFeeMaster(res.data.fee_masters);
      })
      .catch((e: any) => {
        console.log(e);
      });
  };

  useEffect(() => {
    getfee();
    getAllAcademicYear();
  }, []);

  const DiscountFeeTypeName = (newArrVal: any) => {
    setGetFeeMaster([...newArrVal]);
  };

  console.log(getFeeMaster);

  const handleSubmit = async (e: any) => {
    setDuplication(true);
    e.preventDefault();
    if (feeTypeName === "" || orderId === "") {
      alert("Please Enter A Value");
      setDuplication(false);
    } else {
      try {
        getAccessToken();
        const res: any = await axios
          .post(`${baseUrl}fee_master/create`, {
            academic_year: "2021-2022",
            fee_type_name: feeTypeName,
            order_id: orderId,
          })
          .then((res: any) => {
            console.log(res.data);
            getfee();
            statusFeeMasterAdd(false);
            setDuplication(false);
            setFeeTypeName("");
            setOrderId("");
          });
      } catch (err) {
        setDuplication(false);
        setFeeTypeName("");
        alert("try again");
      }
    }
  };

  const getAllAcademicYear = () => {
    getAccessToken();
    axios
      .get(`${baseUrl}academic_year/show`)
      .then((res: any) => {
        console.log(res.data.academic_years)
        setAllAcademicYear(res.data.academic_years);
      })
      .catch((e: any) => {
        console.log(e);
      });
  };

  const Academic = (newArrVal: any) => {
    setAllAcademicYear([...newArrVal]);
  };

  console.log(allAcademicYear)

  

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
                  <div>
                    <div
                      className="col-lg-10"
                      style={{ marginLeft: "10%", width: "90%" }}
                    >
                      <div className="card mb-3">
                        <a style={{ color: "rgb(230, 39, 39)" }}>
                          <div className="card-header mb-4 bg-transparent border-1 text-center">
                            <h4 className="mb-0 ">
                              <i className="far fa-clone pr-1"></i> Fee Master
                            </h4>
                            <div style={{ textAlign: "right" }}>
                              {!statusFeeMasterAdd ? (
                                <Button
                                  type="submit"
                                  className="btn btn-primary btn-sm btn-save"
                                  onClick={() => setStatusFeeMasterAdd(true)}
                                >
                                  Add
                                </Button>
                              ) : (
                                null
                              )}
                            </div>
                          </div>
                        </a>
                        {!statusFeeMasterAdd ? (
                          <div className="card-body">
                            <div className="table-responsive">
                              <div className="dataTables_wrapper dt-bootstrap4 no-footer">
                                <div
                                  id="dataTable_filter"
                                  className="dataTables_filter"
                                >
                                  <Form.Label
                                    htmlFor="inputPassword5"
                                    style={{ marginLeft: "75%" }}
                                  >
                                    Search:
                                    <Form.Control
                                      type="search"
                                      className="form-control form-control-sm"
                                    />
                                  </Form.Label>
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-sm-12">
                                <Table
                                  className="table dataTable no-footer"
                                  width="100%"
                                  style={{ width: "100%" }}
                                >
                                  <thead>
                                    <tr role="row">
                                    <th
                                        className="sorting_asc"
                                        style={{ width: "73px" }}
                                      >
                                       Academic year
                                      </th>
                                      <th
                                        className="sorting_asc"
                                        style={{ width: "73px" }}
                                      >
                                        Fee Type
                                      </th>
                                      <th
                                        className="sorting"
                                        style={{ width: "114px" }}
                                      >
                                        Order
                                      </th>
                                      <th
                                        className="sorting"
                                        style={{ width: "63px" }}
                                      >
                                        Actions
                                      </th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {getFeeMaster &&
                                      getFeeMaster.length &&
                                      getFeeMaster.map(
                                        (values: any, index: any) => {
                                          return (
                                            <tr>
                                              <td>
                                                {" "}
                                                {!statusFeeMasterEdit ? (
                                                  <div>
                                                    {values.academic_year}
                                                  </div>
                                                ) : (
                                                  <div>
                                                    <Form.Control
                                                      style={{ width: "100%" }}
                                                      type="text"
                                                      defaultValue="Admission Fees"
                                                    />
                                                  </div>
                                                )}
                                              </td>
                                              <td>
                                                {" "}
                                                {!statusFeeMasterEdit ? (
                                                  <div>
                                                    {values.fee_type_name}
                                                  </div>
                                                ) : (
                                                  <div>
                                                    <Form.Control
                                                      style={{ width: "100%" }}
                                                      type="text"
                                                      defaultValue="Admission Fees"
                                                    />
                                                  </div>
                                                )}
                                              </td>
                                              <td
                                                style={{ width: "30%" }}
                                                className="sorting_1"
                                              >
                                                {values.order_id}
                                              </td>

                                              <td>
                                                {" "}
                                                {!statusFeeMasterEdit ? (
                                                  <div>
                                                    <i
                                                      style={{
                                                        marginLeft: "10px",
                                                        cursor: "pointer",
                                                      }}
                                                      onClick={() =>
                                                        setStatusFeeMasterEdit(
                                                          true
                                                        )
                                                      }
                                                      className="fa fa-edit fa-1x text-success"
                                                    ></i>
                                                    <i
                                                      style={{
                                                        marginLeft: "10px",
                                                        cursor: "pointer",
                                                      }}
                                                      className="far fa-trash-alt text-danger"
                                                    ></i>
                                                  </div>
                                                ) : (
                                                  <div>
                                                    <i
                                                      style={{
                                                        marginLeft: "10px",
                                                        cursor: "pointer",
                                                      }}
                                                      onClick={() =>
                                                        setStatusFeeMasterEdit(
                                                          false
                                                        )
                                                      }
                                                      className="fa fa-times fa-1x text-danger"
                                                      aria-hidden="true"
                                                    ></i>
                                                    <i
                                                      style={{
                                                        marginLeft: "10px",
                                                        cursor: "pointer",
                                                      }}
                                                      onClick={() =>
                                                        setStatusFeeMasterEdit(
                                                          false
                                                        )
                                                      }
                                                      className="fa fa-save btn text-danger"
                                                    ></i>
                                                  </div>
                                                )}
                                              </td>
                                            </tr>
                                          );
                                        }
                                      )}
                                  </tbody>
                                </Table>
                              </div>
                            </div>
                            <div style={{ marginLeft: "20%" }}>
                              <Pagination>
                                <Pagination.First />
                                <Pagination.Prev />
                                <Pagination.Item>{1}</Pagination.Item>
                                <Pagination.Ellipsis />

                                <Pagination.Item>{10}</Pagination.Item>
                                <Pagination.Item>{11}</Pagination.Item>
                                <Pagination.Item active>{12}</Pagination.Item>
                                <Pagination.Item>{13}</Pagination.Item>
                                <Pagination.Item disabled>{14}</Pagination.Item>

                                <Pagination.Ellipsis />
                                <Pagination.Item>{20}</Pagination.Item>
                                <Pagination.Next />
                                <Pagination.Last />
                              </Pagination>
                            </div>
                          </div>
                        ) : (
                          <div>
                            <Row className="mb-4">
                              <Col sm="4" className="mb-4">
                                <Form.Label style={{ marginLeft: "40px" }}>
                                Academic year{" "}
                                </Form.Label>
                              </Col>
                              <Col sm="6">
                                <Form.Select
                                  className="form-control" onChange={(e) => setAcademicDropdown(e.target.value)}>
                                    <option selected disabled value="">--Select AcademicYear--</option>
                                {allAcademicYear && allAcademicYear.length && allAcademicYear.map((value:any,index) => 
                                 {
                                  return (
                                    <option value="2020-2021">{value.academic_year}</option>
                                   )
                                 }
                                )}
                                  
                                </Form.Select>
                              </Col>
                              <Col sm="4" className="mb-4">
                                <Form.Label style={{ marginLeft: "40px" }}>
                                  Fee Type Name{" "}
                                </Form.Label>
                              </Col>
                              <Col sm="6">
                                <Form.Control
                                  type="text"
                                  onChange={(e: any) => {
                                    setFeeTypeName(e.target.value);
                                  }}
                                />
                              </Col>{" "}
                              <Col sm="4">
                                <Form.Label style={{ marginLeft: "40px" }}>
                                  Order
                                </Form.Label>
                              </Col>
                              <Col sm="6">
                                <Form.Control
                                  type="text"
                                  onChange={(e: any) => {
                                    setOrderId(e.target.value);
                                  }}
                                />
                              </Col>
                            </Row>
                            
                            <div className="card-footer py3">
                           <Row>
                             <Col>
                             <Button
                                  style={{ marginLeft:"80%"}}
                                  className="btn btn-secondary"
                                  onClick={() => setStatusFeeMasterAdd(false)}
                                >
                                  Cancel
                                </Button>{' '}
                                
                              <Button
                                type="submit"
                                className={
                                  duplication
                                    ? "disabled btn btn-danger btn-save"
                                    : "btn btn-danger btn-save"
                                }
                                onClick={(e: any) => {
                                  handleSubmit(e);
                                }}
                                
                              >
                                Save
                              </Button>

                             </Col>
                           </Row>
                              
                              
                    
                            </div>
                          </div>
                        )}
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
export default Feemaster;
