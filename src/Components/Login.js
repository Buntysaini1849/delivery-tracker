import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import { BiKey } from "react-icons/bi";
import axios from 'axios';
import { LOGIN_API } from "./apiUrls";

import { useDispatch } from 'react-redux';
import { SET_AUTH_TOKEN, setAuthToken } from "../state/actions/action";

import Cookies from "js-cookie";


export default function Login() {
  const dispatch = useDispatch();

  const inputRef = useRef();
  const [messageerror, setMessageError] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [showinput, SetShowinput] = useState(false);
  const [buttonText, SetButtonText] = useState("Send Otp");
  const [disabled, setDisabled] = useState(false);
  const [shownewinput, SetShownewinput] = useState(false);
  const [disabledotp, setDisabledotp] = useState(true);
  const [error, setError] = useState("");
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const showhidediv = (e) => {
    e.preventDefault();
    SetShowinput(true);
    SetButtonText("Resend OTP");
    setDisabled(true);

    setTimeout(() => {
      setDisabled(false);
      console.log("This will run after 1 second!");
    }, 10000);
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const showhidenewdiv = (e) => {
    e.preventDefault();
    SetShownewinput(true);
  };

  const setdefaultbox = () => {
    window.location.reload(false);
  };

  const navigate = useNavigate();



  
//   function handleSubmit(event) {
//     event.preventDefault();
//     const username = document.getElementById("username").value;
//     const password = document.getElementById("password").value;

//     // Input Validation
//     if (!username || !password) {
//         console.log("Please enter both  username and password.");
//         return;
//     }

//     // Authentication Check
//     if (username === formData.username && password === formData.password) {
//         console.log("Login successful!");
//         navigate("/dashboard");
//     } else {
//         console.log("Login failed. Please check your credentials and try again.");
//         setError("Login failed. Please try again");
//     }
// }
  
const handleChange = (e) => {
  const { name, value } = e.target;
  if (name === 'username') {
    setUsername(value);
  } else if (name === 'password') {
    setPassword(value);
  }
};

const loginData = {
  username: username,
  password: password,
};

// const handleSubmit = async (e) => {
//   e.preventDefault();
//   try {
//     const response = await fetch(LOGIN_API, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(loginData),
//     });

//     if (response.ok) {
//       const responseData = await response.json();
//       const auth = responseData.auth_token;
//       // dispatch({ type: SET_AUTH_TOKEN, payload: authToken });
//       console.log('Login successful, Auth Token:', responseData);
//       Cookies.set("token", auth, { expires: 1});
//       navigate("/dashboard");
//     } else {
//       setMessageError("Invalid credentials");
//     }
//   } catch (errorMessage) {
//     setError(errorMessage || 'Invalid username or password.');
//   }
// };

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    // Make API call to get the authToken
    const response = await fetch(LOGIN_API, {
      method: "POST",
      body: JSON.stringify(loginData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      const data = await response.json();

      const auth = data.auth_token;
      console.log("Auth token:", auth);
      Cookies.set("token", auth, { expires: 1 });

      dispatch({ type: SET_AUTH_TOKEN, payload: auth });
      navigate("/dashboard");
      setUsername("");
      setPassword("");
  
    } else if (response.status === 401) {
      // Status code 401 indicates unauthorized access (invalid username or password)
      console.log("Invalid username or password");
    } else {
      // Handle other error cases here
      console.log("Login failed with status:", response.status);
    }
  } catch (error) {
    console.error("Login error:", error);
  }
};



  return (
    <div className="loginheader">
      <h3 className="login-titles pt-3">Delivery Management System</h3>
      <br />
      <br />
      <br />
      <br />
      
      <div
        className="container-fluid p-4"
        style={{ display: "flex", justifyContent: "center" }}
      >
        
        <form
          className="login-form p-4 mt-2"
          style={{ width: "30%"}}
        >
          <div className="container">
      <div className="alert alert-danger alert-dismissible fade show p-0" role="alert"  style={{display: error ? "block" : "none"}}>
          {error && <p className="mt-3" style={{padding:"2px"}}>{error}</p>} 
          <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>
      </div>
          
          <h2 className="logintop-head mb-4">Login To Your Account</h2>
          <div className="form-group mt-1" style={{position:"relative"}}>
            <label className="label">Username</label>
            <input
              type="username"
              className="form-control login-input"
              id="username"
              name="username"
              ref={inputRef}
              value={username}
              onChange={handleChange}
              required={true}
            />
            <FaUserAlt className="usericon" />
          </div>
          <div className="form-group mt-3" style={{position:"relative"}}>
            <label className="label">Password</label>
            <input
              type="password"
              className="form-control login-input"
              id="password"
              name="password"
              value={password}
              onChange={handleChange}
              required={true}
            />
            <BiKey className="keyicon" />
          </div>

          <div className="row d-flex mt-4">
            <div className="col-md-6">
              <button
                type="submit"
                style={{ background: "rgb(108,100,251)" }}
                className="btn login-btn mt-1 shadow-lg"
                onClick={handleSubmit}
              >
                Login
              </button>
            </div>

            <div className="col-md-6 text-center mt-2">
              <a
                href=""
                className="fgt-pswd ml-3"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                forgot password?
              </a>
            </div>
          </div>
        
        </form>
      </div>

      
      

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Forget Password</h5>
            </div>
            <div className="modal-body">
              <form>
                <div className="row d-flex">
                  <div className="col-md-6 col-sm-6">
                    <div className="form-group mt-2">
                      <label className="label" style={{ fontWeight: "600" }}>
                        Email
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                      />
                    </div>
                  </div>

                  <div className="col-md-6 col-sm-6">
                    <div className="otp-div mt-2">
                      <button
                        className="btn btn-sm btn-success mt-4 sendotp-btn"
                        onClick={showhidediv}
                        disabled={disabled}
                      >
                        {buttonText}
                      </button>
                    </div>
                  </div>
                </div>
                {showinput ? (
                  <div className="row d-flex">
                    <div className="col-md-6">
                      <div className="form-group mt-2">
                        <label className="label" style={{ fontWeight: "600" }}>
                          {" "}
                          Enter OTP
                        </label>
                        <input
                          type="number"
                          className="form-control"
                          id="otp"
                          name="number"
                          onClick={() => setDisabledotp(false)}
                        />
                      </div>
                    </div>

                    <div className="col-md-6 col-sm-6">
                      <div className="otp-div mt-2">
                        <button
                          className="btn btn-sm btn-success mt-4"
                          onClick={showhidenewdiv}
                          disabled={disabledotp}
                        >
                          Verify OTP
                        </button>
                      </div>
                    </div>
                  </div>
                ) : null}

                {shownewinput ? (
                  <div className="form-group mt-2">
                    <label className="label" style={{ fontWeight: "600" }}>
                      New Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="passwprd"
                      name="password"
                      style={{ width: "48%" }}
                    />
                  </div>
                ) : null}
              </form>
            </div>
            <div className="modal-footer">
              <button type="submit" className="btn btn-primary">
                Save changes
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={setdefaultbox}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}
