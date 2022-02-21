import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { baseUrl } from "../../index";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button } from "react-bootstrap";


const Login = (props: any) => {
	let history = useHistory<any>();

	const [username, setUsername] = useState<any>("");
	const [password, setPassword] = useState<any>("");

	const notify = () => toast("Wow so easy!");

	useEffect(() => {
		if(sessionStorage.getItem("AccessToken")){
			history.push("/studentrecord");
		}

		const unloadCallback = (event: any) => {
			event.preventDefault();
			event.returnValue = "";
			return "";
		};
		window.addEventListener("beforeunload", unloadCallback);
		return () => window.removeEventListener("beforeunload", unloadCallback);
	
	}, []);

	const handleSubmit = async (e: any) => {
		e.preventDefault();
		if (username.length <= 0 || password <= 0) {
			if (username.length <= 0 || username.includes('@')==false || username.includes('.')==false) {
                toast.error('Please Enter Email Address', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    });
			} else {
                toast.error('Please Enter Password', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    });
			}
		} else {
			try {
				const res: any = await axios.post(`${baseUrl}login`, { email: username, password: password }).then((res: any) => {
					console.log(res);
                    toast.success('Welcome', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        });
					sessionStorage.setItem("AccessToken", res.data.token);
					history.push("/studentrecord");

				});
			} catch (err: any) {
				console.log(err.response.data.error_message);
                toast.error('Incorrect Username and Password', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    });
			}
		}
	};



	return (
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-xl-6 col-lg-12 col-md-5">
					<div className="card o-hidden border-0 shadow-lg my-5">
						<div className="card-body p-0">
							<div className="row">
								<div>
									<div className="p-5">
										<div className="text-center">
											<h1 className="h4 text-gray-900 mb-4 cashflow-heading">₹ Cash Flow</h1>
										</div>
										<form className="user">
											<div className="form-group">
												<input
													type="email"
													className="form-control form-control-user"
													id="exampleInputEmail"
													aria-describedby="emailHelp"
													placeholder="Enter Email Address..."
													onChange={(e) => setUsername(e.target.value)}
												/>
											</div>
											<div className="form-group">
												<input
													type="password"
													className="form-control form-control-user"
													id="exampleInputPassword"
													placeholder="Password"
													onChange={(e) => setPassword(e.target.value)}
												/>
											</div>
										
											<button onClick={handleSubmit} className="btn btn-primary btn-user btn-block">
												Login
											</button>
								
											<ToastContainer
												position="top-right"
												autoClose={5000}
												hideProgressBar={false}
												newestOnTop={false}
												closeOnClick
												rtl={false}
												pauseOnFocusLoss
												draggable
												pauseOnHover
											/>
										</form>
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

export default Login;
