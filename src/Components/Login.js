import React, { useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import  loginimg from "../images/loginimg.jpg";


export default function Login() {

  const userDetails = {
    username:"admin",
    email:"admin",
    password:"admin"
   };

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [messageerror, setMessageError] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [showinput, SetShowinput]=useState(false);
  const [buttonText, SetButtonText] = useState("Send Otp");
  const [disabled, setDisabled] = useState(false);
  const [shownewinput, SetShownewinput]=useState(false);
  const [disabledotp, setDisabledotp] = useState(true);


  const showhidediv = (e) =>{

    e.preventDefault(); 
     SetShowinput(true);
     SetButtonText("Resend OTP");
     setDisabled(true);

     setTimeout(() => {
      setDisabled(false);
      console.log('This will run after 1 second!')
    }, 10000);

    
  
  }



  const showhidenewdiv = (e) =>{
    e.preventDefault();
    SetShownewinput(true);
  }
   





 

  const setdefaultbox = () => {
    window.location.reload(false);
  }

  const navigate = useNavigate();

  const login = (e) => {
    if (username !== userDetails.username) {
      setMessageError("username did not match");
      console.log("username did not match");
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
      navigate("/dashboard");
    }

  };






  return (
    <div className="loginheader">
   <br/>
   <br/>
   <br/>
   <div className="container logincont mt-5 p-0">
    <div className="row d-flex login-row p-0 ml-0">
      <div className="col-md-6 p-0">
        
          <img src={loginimg} className="img-fluid loginimage" alt="image" />
        
      </div>
      <div className="col-md-6">
        <div className="container p-4">
      <form className="login-form shadow-sm p-4 mt-2">
        <h2 className="logintop-head mb-4">Login To Your Account</h2>
        <div className="form-group mt-1">
          <label className="label">Username</label>
          <input
            type="text"
            className="form-control"
            id="username"
            name="username"
            onChange={(e) => setUsername(e.target.value)}
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

      <div className="col-md-6 text-center mt-2">
      <a href="" className="fgt-pswd ml-3" data-bs-toggle="modal" data-bs-target="#exampleModal">forgot password?</a>
      
      </div>

     </div>
        
      </form>
      </div>
      </div>
    </div>
   </div>

   <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
          <label className="label" style={{fontWeight:"600"}}>Email</label>
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
            <button className="btn btn-sm btn-success mt-4 sendotp-btn" onClick={showhidediv} disabled={disabled}>{buttonText}</button>
            </div>
        
          </div>

          
         </div>
         {showinput ?

         <div className="row d-flex">

          <div className="col-md-6">
          <div className="form-group mt-2">
          <label className="label" style={{fontWeight:"600"}}> Enter OTP</label>
          <input
            type="number"
            className="form-control"
            id="otp"
            name="number"
            onClick={()=>setDisabledotp(false)}
          />
          </div>
          </div>

          <div className="col-md-6 col-sm-6">
         
            <div className="otp-div mt-2">
            <button className="btn btn-sm btn-success mt-4"  onClick={showhidenewdiv} disabled={disabledotp}>Verify OTP</button>
            </div>
        
        
          </div>
         </div>:null}
          
          {shownewinput ?
          <div className="form-group mt-2">
          <label className="label" style={{fontWeight:"600"}}>New Password</label>
          <input
            type="password"
            className="form-control"
            id="passwprd"
            name="password"
            style={{width:"48%"}}
          />
          </div>:null}
        </form>
      </div>
      <div className="modal-footer">
        <button type="submit" className="btn btn-primary">Save changes</button>
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={setdefaultbox}>Close</button>
      </div>
    </div>
  </div>
</div>
    </div>
  );
}
