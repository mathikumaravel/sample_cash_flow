import React, { Component } from "react";
import axios from "axios";

import "../config/Axiosconfiq";
import PropTypes from "prop-types";
import { BrowserRouter, Route, Switch, useHistory, RouteProps, Redirect } from "react-router-dom";
import Login from "../components/auth/Login";
import StudentProfileId from "../components/studentdetails/Student";
import Dashboard from "../components/Dashboard/Dashboard";
import Studentpay from "../components/studentdetails/Studentpay";
import Studentadd from "../components/New Admission/Studentadd";
import Promotion from "../components/Promotion/Promotion";
import Yearoffee from "../components/Yearoffee/Yearoffee";
import Feemaster from "../components/Feemaster/Feemaster";
import Discountfee from "../components/Discountfee/Discountfee";
import Year from "../components/Year/Year";
import Grade from "../components/Grade_section/Grade";
import Studentrecord from "../components/studentdetails/Studentrecord";
import StudentProfile from "../components/studentdetails/Studentprofile";
import StudentprofileSearch from "../components/studentdetails/StudentprofileSearch";
import Placesprice from "../components/Transport/Placesprice";
import Placesspotting from "../components/Transport/Placesspotting";

// const PrivateRoute = (props: any) => {
//     let history = useHistory<any>();
//     const token = localStorage.getItem("AccessToken");
//     if (token) {
//         return <Route exact={true} path={props.path} component={props.component} />;
//     } else {
//         history.push("/");
//         return <Login {...props} />;
//     }
// };

// const PrivateRoute = ({ component: Routers, ...rest }) => {
//     const token = localStorage.getItem("AccessToken");
//     <Route {...rest} render={(props) => (token ? <Routers {...props} /> : <Login {...props} />)} />;
// };

// PrivateRoute.propTypes:any = {
//     component: PropTypes.object,
// };

// const Routers = (props: any) => {
//     if (localStorage.getItem("AccessToken")) {
//         console.log(localStorage.getItem("AccessToken"));
//     }

//     return (
//         <React.Fragment>
//             <React.StrictMode>
//                 <BrowserRouter>
//                     <React.Fragment>
//                         <Switch>
//                             <Route exact={true} path="/" component={Login} />
//                             <PrivateRoute path="/Dashboard" component={Dashboard} />
//                             <PrivateRoute path="/studentrecord" component={Studentrecord} />
//                             <PrivateRoute path="/StudentProfileId" component={StudentProfileId} />
//                             <PrivateRoute path="/Stu_pay" component={Studentpay} />
//                             <PrivateRoute path="/Stu_add" component={Studentadd} />
//                             <PrivateRoute path="/Stupro" component={Promotion} />
//                             <PrivateRoute path="/Stu_fees" component={Yearoffee} />
//                             <PrivateRoute path="/Fee_master" component={Feemaster} />
//                             <PrivateRoute path="/Discounttype" component={Discountfee} />
//                             <PrivateRoute path="/Academicyear" component={Year} />
//                             <PrivateRoute path="/Grade_section" component={Grade} />
//                             <PrivateRoute path="/studentprofile" component={StudentProfile} />
//                             <PrivateRoute path="/StudentprofileSearch" component={StudentprofileSearch} />
//                             <PrivateRoute path="/placesprice" component={Placesprice} />
//                             <PrivateRoute path="/placesstoppings" component={Placesspotting} />
//                             {/* <PrivateRoute exact component={NotFoundScreen} /> */}
//                         </Switch>
//                     </React.Fragment>
//                 </BrowserRouter>
//             </React.StrictMode>
//         </React.Fragment>
//     );
// };

// const PrivateRoute: React.FC<any> = ({ component: Component, ...rest }) => (
//     const token = localStorage.getItem("AccessToken");
//    return <Route {...rest} render={(props) => (token ? <Routers {...props} /> : <Login {...props} />)} />
// );
const token = localStorage.getItem("AccessToken");
const PrivateRoute: React.FC<any> = ({ component: Component, ...rest }) => <Route {...rest} render={(props: any) => (token ? <Routers {...props} /> : <Login {...props} />)} />;

PrivateRoute.propTypes = {
    component: PropTypes.object,
};
class Routers extends Component {
    render() {
        return (
            <React.Fragment>
                <React.StrictMode>
                    <BrowserRouter>
                        <React.Fragment>
                        <Switch>
                                <Route exact={true} path="/" component={Login} />
                                {token ? <Route path="/Dashboard" component={Dashboard} /> : <Redirect to={"/"} />}
                                {/* <PrivateRoute path="/Dashboard" component={Dashboard} /> */}
                                {token ? <Route path="/studentrecord" component={Studentrecord} /> : <Redirect to={"/"} />}
                                {/* <PrivateRoute path="/studentrecord" component={(props: any) => <Studentrecord {...props} />} /> */}
                                {token ? <Route path="/StudentProfileId" component={StudentProfileId} /> : <Redirect to={"/"} />}
                                {/* <PrivateRoute path="/StudentProfileId" component={StudentProfileId} /> */}
                                {token ? <Route path="/Stu_pay" component={Studentpay} /> : <Redirect to={"/"} />}
                                {/* <PrivateRoute path="/Stu_pay" component={Studentpay} /> */}
                                {token ? <Route path="/Stu_add" component={Studentadd} /> : <Redirect to={"/"} />}
                                {/* <PrivateRoute path="/Stu_add" component={Studentadd} /> */}
                                {token ? <Route path="/Stupro" component={Promotion} /> : <Redirect to={"/"} />}
                                {/* <PrivateRoute path="/Stupro" component={Promotion} /> */}
                                {token ? <Route path="/Stu_fees" component={Yearoffee} /> : <Redirect to={"/"} />}
                                {/* <PrivateRoute path="/Stu_fees" component={Yearoffee} /> */}
                                {token ? <Route path="/Fee_master" component={Feemaster} /> : <Redirect to={"/"} />}
                                {token ? <Route path="/Discounttype" component={Discountfee} /> : <Redirect to={"/"} />}
                                {/* <PrivateRoute path="/Discounttype" component={Discountfee} /> */}
                                {token ? <Route path="/Academicyear" component={Year} /> : <Redirect to={"/"} />}
                                {/* <PrivateRoute path="/Academicyear" component={Year} /> */}
                                {token ? <Route path="/Grade_section" component={Grade} /> : <Redirect to={"/"} />}
                                {/* <PrivateRoute path="/Grade_section" component={Grade} /> */}
                                {token ? <Route path="/studentprofile" component={StudentProfile} /> : <Redirect to={"/"} />}
                                {/* <PrivateRoute path="/studentprofile" component={StudentProfile} /> */}
                                {token ? <Route path="/StudentprofileSearch" component={StudentprofileSearch} /> : <Redirect to={"/"} />}
                                {/* <PrivateRoute path="/StudentprofileSearch" component={StudentprofileSearch} /> */}
                                {token ? <Route path="/placesprice" component={Placesprice} /> : <Redirect to={"/"} />}
                                {/* <PrivateRoute path="/placesprice" component={Placesprice} /> */}
                                {token ? <Route path="/placesstoppings" component={Placesspotting} /> : <Redirect to={"/"} />}
                                {/* <PrivateRoute path="/placesstoppings" component={Placesspotting} /> */}
                            </Switch>
                        </React.Fragment>
                    </BrowserRouter>
                </React.StrictMode>
            </React.Fragment>
        );
    }
}
export default Routers;
