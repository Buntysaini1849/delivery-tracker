import React, { useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import  loginimg from "../images/loginimg.jpg";


export default function Login() {

  const userDetails = {
    username:"Dinesh",
    email:"dineshsaini123@admin.com",
    password:"dinesh123"
   };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [messageerror, setMessageError] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  

  const navigate = useNavigate();

  const login = (e) => {
    if (email !== userDetails.email) {
      setMessageError("email did not match");
      console.log("email did not match");
      setIsAuthenticated(false);
      navigate("/");
    } 

    
    else if (password !== userDetails.password){
      setMessageError("password did not match");
      console.log("password did not match");
      setIsAuthenticated(false);
      navigate("/");
    }

    
    else{
      console.log("login done");
      navigate("");
    }

  };


  return (
    <div className="loginheader">
   <br/>
   <br/>
   <div className="container logincont mt-5 p-0">
    <div className="row d-flex login-row p-0 ml-0">
      <div className="col-md-6 p-0">
        
          <img src={loginimg} className="img-fluid loginimage" alt="image" />
        
      </div>
      <div className="col-md-6">
        <div className="login-form shadow-sm">
      <form className="p-4 mt-5 ">
        <h2 className="logintop-head mb-5">Login To Your Account</h2>
        <div className="form-group mt-3">
          <label className="label">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group mt-3">
          <label className="label">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

     <div className="row d-flex mt-4">
      <div className="col-md-6">
      <button
          type="submit"
          onClick={login}
          style={{background:"rgb(108,100,251)"}}
          className="btn login-btn mt-1"
        >
          Login
        </button>
      </div>

      <div className="col-md-6 text-center">
      <a href="" className="fgt-pswd ml-3 ">forgot password?</a>
      </div>

     </div>
        
      </form>
      </div>
      </div>
    </div>
   </div>
    </div>
  );
}
