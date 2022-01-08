import React from 'react'
import Sidebar from '../Layouts/Sidebar'
import Navbar from '../Layouts/Navbar'
import Card from 'react-bootstrap/Card';

const Student = () => {
    
    return(
        <div id="page-top">
            <div id="wrapper">  
            <Sidebar></Sidebar>
                 <div id="content-wrapper" className="d-flex flex-column">

            <div id="content">
                <Navbar></Navbar>
                <div className="container-fluid">
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 className="h3 mb-0 text-gray-700">Students Records</h1>
                                <form
                        className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                        <div className="input-group">
                            <input type="text" className="form-control bg-light border-0 small" placeholder="Search for..."
                                aria-label="Search" aria-describedby="basic-addon2"/>
                            <div className="input-group-append">
                                <button className="btn btn-primary" type="button">
                                    <i className="fas fa-search fa-sm"></i>
                                </button>
                            </div>
                        </div>
                    </form>
                    </div>
                    <div className="row">
                    <div className="col-lg-6 mb-4">


                    <Card style={{ width: '26rem' }}>
                        <Card.Body>
                 <Card.Title>Student Name : Karthick</Card.Title>
                    <Card.Title>Grade : I</Card.Title>
                   <Card.Title>Admission ID : A</Card.Title>
                  <Card.Title>Admission No : MVM100065</Card.Title>
                       </Card.Body>
                     </Card>
                    </div>
                </div>
                </div>
                </div>
                </div>
                </div>
                </div>
    )

}
export default Student;