import React from 'react'
import axios from 'axios'

import "../config/Axiosconfiq"
import {BrowserRouter,Route,Switch,useHistory } from 'react-router-dom'
import Login from '../components/auth/Login';
import StudentProfileId from '../components/studentdetails/Student';
import Dashboard from '../components/Dashboard/Dashboard';
import Studentpay from '../components/studentdetails/Studentpay';
import Studentadd from '../components/New Admission/Studentadd';
import Promotion from '../components/Promotion/Promotion';
import Yearoffee from '../components/Yearoffee/Yearoffee';
import Feemaster from '../components/Feemaster/Feemaster';
import Discountfee from '../components/Discountfee/Discountfee';
import Year from '../components/Year/Year';
import Grade from '../components/Grade_section/Grade';
import StudentProfile from '../components/studentdetails/Studentprofile';
import StudentprofileSearch from '../components/studentdetails/StudentprofileSearch';

const PrivateRoute = (props:any) => {
    let history = useHistory<any>();
    const token= localStorage.getItem('AccessToken');
    if(token){
    return <Route exact={true} path={props.path} component={props.component} />
    }else {
        history.push('/')
    return <Login {...props} />
    }
    }
    
    

function Routers(props:any){
    if(localStorage.getItem('AccessToken')){
        console.log(localStorage.getItem('AccessToken'));
    }
    
    return(
       
<BrowserRouter>
<Switch>
<Route exact={true} path="/" component={Login} />
<PrivateRoute path='/Dashboard' component={Dashboard}/>
<PrivateRoute  path='/StudentProfileId' component={StudentProfileId}/>
<PrivateRoute path='/Stu_pay' component={Studentpay}/>
<PrivateRoute path='/Stu_add' component={Studentadd}/>
<PrivateRoute path='/Stupro' component={Promotion}/>
<PrivateRoute path='/Stu_fees' component={Yearoffee}/>
<PrivateRoute path='/Fee_master' component={Feemaster}/>
<PrivateRoute path='/Discounttype' component={Discountfee}/>
<PrivateRoute path='/Academicyear' component={Year}/>
<PrivateRoute path='/Grade_section' component={Grade}/>
<PrivateRoute path='/studentprofile' component={StudentProfile}/>
<PrivateRoute path='/StudentprofileSearch' component={StudentprofileSearch}/>
</Switch>
</BrowserRouter>
    )

}
export default Routers