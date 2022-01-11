import React from 'react';
import Sidenav from './components/Layouts/Sidenav';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Login from './components/auth/Login';
import Student from './components/studentdetails/Student';
import Dashboard from './components/Dashboard/Dashboard';
import Studentpay from './components/studentdetails/Studentpay';
import Studentadd from './components/New Admission/Studentadd';

function App() {
  return (
    <div>
        
<Router>
<Routes>
    <Route  path='/' element={< Login />}></Route>
    <Route path='/Dashboard' element={<Dashboard/>}></Route>
    <Route  path='/Student' element={< Student />}></Route>
    <Route path='/Stu_pay' element={<Studentpay/>}></Route>
    <Route path='/Stu_add' element={<Studentadd/>}></Route>
</Routes>
</Router>
       {/* Cashflow Ui color #e84118          */}
   
    </div>
  );
}

export default App;
