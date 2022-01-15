import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div>
      <ul
        className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        <a
          className="sidebar-brand d-flex align-items-center justify-content-center"
          href="index.html"
        >
          <div className="sidebar-brand-icon">
            <i className="fas fa-rupee-sign"></i>
          </div>
          <div className="sidebar-brand-text mx-3">CASHFLOW</div>
        </a>
        <hr className="sidebar-divider my-0" />

        <li className="nav-item active">
          <a className="nav-link" href="/Dashboard">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Dashboard</span>
          </a>
        </li>

        <hr className="sidebar-divider" />

        <li className="nav-item">
          <a
            className="nav-link collapsed"
            href="#"
            data-toggle="collapse"
            data-target="#collapseTwo"
            aria-expanded="true"
            aria-controls="collapseTwo"
          >
            <i className="fas fa-chalkboard-teacher"></i>
            <span>Student</span>
          </a>
          <div
            id="collapseTwo"
            className="collapse"
            aria-labelledby="headingTwo"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Custom</h6>
           <Link to="/Student"><a className="collapse-item">
                Student
              </a></Link>   
              <Link to="/Stu_add"> <a className="collapse-item">
                New Admission 
              </a></Link>
              <Link to="/Stupro"><a className="collapse-item">
                Promotion
              </a></Link>
              <Link to="/Stu_fees"> <a className="collapse-item">
                Year of Fee
              </a></Link>
              <Link to="/Fee_master"><a className="collapse-item">
                Fee Master
              </a></Link>
              <Link to="/Discounttype">  <a className="collapse-item">
                Discount Fee Type Master
              </a></Link>
              <Link to="/Academicyear"><a className="collapse-item">
                Year
              </a></Link>
              <Link to="/Grade_section">  <a className="collapse-item">
               Grade&section
              </a></Link>
            </div>
          </div>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="charts.html">
            <i className="fas fa-fw fa-chart-area"></i>
            <span>Operations</span>
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="charts.html">
            <i className="fas fa-fw fa-chart-area"></i>
            <span>Account Transfer</span>
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="charts.html">
            <i className="fas fa-fw fa-chart-area"></i>
            <span>IIT Fees</span>
          </a>
        </li> 

        
        <li className="nav-item">
          <a className="nav-link" href="tables.html">
            <i className="fas fa-fw fa-table"></i>
            <span>hostel Advances</span>
          </a>
        </li>

        <hr className="sidebar-divider" />

        {/* <div className="sidebar-heading">Addons</div> */}

        {/* <li className="nav-item">
          <a
            className="nav-link collapsed"
            href="#"
            data-toggle="collapse"
            data-target="#collapsePages"
            aria-expanded="true"
            aria-controls="collapsePages"
          >
            <i className="fas fa-fw fa-folder"></i>
            <span>Pages</span>
          </a>
          <div
            id="collapsePages"
            className="collapse"
            aria-labelledby="headingPages"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Login Screens:</h6>
              <a className="collapse-item" href="login.html">
                Login
              </a>
              <a className="collapse-item" href="register.html">
                Register
              </a>
              <a className="collapse-item" href="forgot-password.html">
                Forgot Password
              </a>
              <div className="collapse-divider"></div>
              <h6 className="collapse-header">Other Pages:</h6>
              <a className="collapse-item" href="404.html">
                404 Page
              </a>
              <a className="collapse-item" href="blank.html">
                Blank Page
              </a>
            </div>
          </div>
        </li> */}

        <hr className="sidebar-divider d-none d-md-block" />

        <div className="text-center d-none d-md-inline">
          <button
            className="rounded-circle border-0"
            id="sidebarToggle"
          ></button>
        </div>
      </ul>
      
    </div>
  );
};
export default Sidebar;
