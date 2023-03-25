import React from "react";
import {FaSignOutAlt} from 'react-icons/fa';
import Sidebar from "./Sidebar";
import { useNavigate } from "react-router-dom";
import Login from "./Login";


export default function Dashboard() {

  let navigate=useNavigate();
  const logout = () => {

    localStorage.removeItem("email","password");
    navigate('/');
    
  }

  return (
   <div style={{display:"flex"}}>
     <Sidebar/>
    <div className="container-fluid">
      <div className="container-fluid signout-head mt-3">
        <p style={{color:"rebeccapurple",fontWeight:"bold"}}>Welcome : <span>Dinesh</span> !</p>
       <FaSignOutAlt className="Signout-icon ml-3" style={{marginTop:"1px"}} alt="signout" onClick={logout}/>
       
      </div>
      <div className="container mb-5">
        <div className="row mt-5" style={{backgroundColor:"#fff",padding:"30px",borderRadius:"25px"}}>
          <div
            className="col-md-4 col-sm-3 d-flex"
            style={{ justifyContent: "center" }}
          >
            <div
              className="card w-50 shadow mt-2"
              alt="Total Vendors"
              style={{
                height: "100px",
                borderRadius: "25px",
                backgroundColor: "#2F84FF",
              }}
            >
              <h5 className="card-titlename mt-4">Total Products</h5>
              <p className="counts">100</p>
            </div>
          </div>

          <div
            className="col-md-4 col-sm-3 d-flex"
            style={{ justifyContent: "center" }}
          >
            <div
              className="card w-50 shadow mt-2"
              style={{
                height: "100px",
                borderRadius: "25px",
                backgroundColor: "#BC5BFF",
              }}
            >
              <h5 className="card-titlename mt-4">Total Users</h5>
              <p className="counts">500</p>
            </div>
          </div>

          <div
            className="col-md-4 col-sm-3  d-flex"
            style={{ justifyContent: "center" }}
          >
            <div
              className="card w-50 shadow mt-2"
              style={{
                height: "100px",
                borderRadius: "25px",
                backgroundColor: "#FF3E4A",
              }}
            >
              <h5 className="card-titlename mt-4">Total Orders</h5>
              <p className="counts">15</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container" style={{marginTop:"50px",backgroundColor:"#fff",padding:"15px",borderRadius:"15px" }}>
        <table className="table table-hover mt-1">
        
          <thead>
            <tr>
              <th scope="col">SN</th>
              <th scope="col">Product Name</th>
              <th scope="col">Total Qty</th>
              <th scope="col">Pending Qty</th>
              <th scope="col">Last Purchase</th>
              <th scope="col">Last Order Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Chopper</td>
              <td>100</td>
              <td>50</td>
              <td>11-08-2022</td>
              <td>12-08-2022</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Slicer</td>
              <td>200</td>
              <td>70</td>
              <td>10-07-2022</td>
              <td>12-08-2022</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Weight Machine</td>
              <td>300</td>
              <td>90</td>
              <td>11-08-2022</td>
              <td>12-08-2022</td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>Shoes</td>
              <td>400</td>
              <td>90</td>
              <td>11-08-2022</td>
              <td>12-08-2022</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
}
