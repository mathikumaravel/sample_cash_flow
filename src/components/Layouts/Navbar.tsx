import React from "react";
import { useHistory } from "react-router-dom";
// import"../../assets/js/sb-admin-2.min.js"
import { Row, Col, Form, Button, NavDropdown } from "react-bootstrap";

const Navbar = () => {
    let history = useHistory();
    const callLogout = () => {
        sessionStorage.clear();
        history.push("/");
    };

    return (
        <div>
            <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
                <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                    <i className="fa fa-bars"></i>
                </button>
                <ul className="navbar-nav ml-auto">
                    <div className="topbar-divider d-none d-sm-block"></div>
                    <li className="nav-item dropdown no-arrow">
                        {/* <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <span className="mr-2 d-none d-lg-inline text-gray-600 small">Cash Flow Admin</span>
                        </a> */}
                        {/* <div className="dropdown-menu dropdown-menu-right shadow animated</h1grow-in" aria-labelledby="userDropdown">
                            <a className="dropdown-item" href="#">
                                    <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                                    Profile
                                </a>
                                <a className="dropdown-item" href="#">
                                    <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                                    Settings
                                </a>
                                <a className="dropdown-item" href="#">
                                    <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                                    Activity Log
                                </a>
                            <div className="dropdown-divider"></div>
                            <button
                                className="dropdown-item"
                                onClick={() => {
                                    callLogout();
                                }}
                            >
                                <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                                Logout
                            </button>
                        </div> */}
                        <NavDropdown title="Cash Flow Admin" id="basic-nav-dropdown">
                        <NavDropdown.Item
                                href="#"
                                className="btn"
                                onClick={() => {
                                    history.push("/profile");
                                }}
                            >
                                <i className="fas fa-edit fa-sm fa-fw mr-2 text-gray-400">  </i>
                                Edit Profile    
                            </NavDropdown.Item>
                            <NavDropdown.Item
                                href="#"
                                className="btn"
                                onClick={() => {
                                    callLogout();
                                }}
                            >
                                <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                                Logout
                            </NavDropdown.Item>
                        
                        </NavDropdown>
                    </li>
                </ul>
            </nav>
        </div>
    );
};
export default Navbar;