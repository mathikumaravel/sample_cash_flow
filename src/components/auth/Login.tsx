import React from 'react'
import axios from "axios";
import { useState,useEffect } from "react";
import { baseUrl } from '../../index';
import { useHistory } from "react-router-dom";



const Login = (props:any) =>{
    let history = useHistory<any>();

  const [username, setUsername] = useState<any>('');
  const [password, setPassword] = useState<any>('');

  useEffect(() => {
    const unloadCallback = (event:any) => {
      event.preventDefault();
      event.returnValue = "";
      return "";
    };
    window.addEventListener("beforeunload", unloadCallback);
    return () => window.removeEventListener("beforeunload", unloadCallback);
  }, []);

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    try {
    const res:any = await axios.post(`${baseUrl}sessions/login`, { email:username,  password:password }).then((res:any) => {
        console.log(res);
        localStorage.setItem('AccessToken', res.data.auth_token);
        history.push('/Student')
    });
    } catch (err) {
    alert("Incorrect Username and Password");
    }
    };


    return(
    <div className="container">
    
        <div className="row justify-content-center">

            <div className="col-xl-6 col-lg-12 col-md-5">

                <div className="card o-hidden border-0 shadow-lg my-5">
                    <div className="card-body p-0">
                      
                        <div className="row">
                            
                            <div>
                                <div className="p-5">
                                    <div className="text-center">
                                        <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                                    </div>
                                    <form className="user">
                                        <div className="form-group">
                                            <input type="email" className="form-control form-control-user"
                                                id="exampleInputEmail" aria-describedby="emailHelp"
                                                placeholder="Enter Email Address..." onChange={(e) => setUsername(e.target.value)} />
                                        </div>
                                        <div className="form-group">
                                            <input type="password" className="form-control form-control-user"
                                                id="exampleInputPassword" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
                                        </div>
                                        <div className="form-group">
                                            <div className="custom-control custom-checkbox small">
                                                <input type="checkbox" className="custom-control-input" id="customCheck" />
                                                <label className="custom-control-label" id="customCheck">Remember
                                                    Me</label>
                                            </div>
                                        </div>
                                        <button onClick={handleSubmit} className="btn btn-primary btn-user btn-block">
                                        Login
                                        </button>
                                           
                                        
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>

    
    </div>
    )

}

export default Login;

