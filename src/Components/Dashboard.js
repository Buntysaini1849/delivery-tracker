import React, { useState,useEffect } from "react";
import { FaHtml5, FaSignOutAlt } from "react-icons/fa";
import Sidebar from "./Sidebar";
import { useNavigate } from "react-router-dom";
import Login from "./Login";
import dashimg from "../images/dashimg.png";

export default function Dashboard() {
  const [isDarkMode, setIsDarkMode] = useState( JSON.parse(localStorage.getItem('isDarkMode')) || false);

  useEffect(() => {
    localStorage.setItem('isDarkMode', JSON.stringify(isDarkMode));
    document.body.style.backgroundColor = isDarkMode ? '#212121' : '#e8e8e8';
    document.documentElement.style.setProperty('--slider-color', isDarkMode ? '#263544' : '#00073D');
    document.documentElement.style.setProperty('--loghead-color', isDarkMode ? '#ffffff' : '#000000');
    document.documentElement.style.setProperty('--li-color', isDarkMode ? '#2f3ea8' : '#3f6791');
  }, [isDarkMode]);

  const handletoggle = () => {
    setIsDarkMode(!isDarkMode);
    document.body.style.backgroundColor = isDarkMode ? '#212121' : '#e8e8e8';
    document.documentElement.style.setProperty('--slider-color', isDarkMode ? '#263544' : '#00073D');
    document.documentElement.style.setProperty('--loghead-color', isDarkMode ? '#ffffff' : '#000000');
    document.documentElement.style.setProperty('--li-color', isDarkMode ? '#2f3ea8' : '#3f6791');

  };

  



  let navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("email", "password");
    navigate("/");
  };

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div className="container">
        
        <div className="container-fluid signout-head mt-3">
          <div className="dashbox">
          <h5 style={{fontWeight:"bold",fontSize:"27px"}} className="logheadtab">Dashboard</h5>
          </div>

          <div className="boxtops" style={{width:"72%",display:"flex",justifyContent:"end"}}>
          <label className="switch">
            <input type="checkbox" checked={isDarkMode} onChange={handletoggle}/>
            {isDarkMode ? 'ON' : 'OFF'}
            <span className="slider round"></span>
          </label>
          </div>
        
          <div className="box d-flex" style={{marginLeft:"35px"}}>

          <p style={{fontWeight: "bold",lineHeight:"30px" }} className="logheadtab">
            Welcome : <span>Dinesh</span> !
          </p>
          <FaSignOutAlt
            className="Signout-icon logheadtab"
            style={{ marginTop: "3px", marginLeft: "10px" }}
            alt="signout"
            onClick={logout}
          />
          </div>
          
        </div>
        <div className="container mb-5">
          <div
            className="row mt-5 dashboard-toprow"
            style={{
              backgroundColor: "#fff",
              padding: "30px",
              borderRadius: "25px",
            }}
          >
            <div
              className="col-md-4 col-sm-3 d-flex"
              style={{ justifyContent: "center" }}
            >
              <div
                className="card w-50 shadow mt-2 dashboard-cards"
                alt="Total Vendors"
                style={{
                  height: "100px",
                  borderRadius: "25px",
                  backgroundColor: "#2F84FF",
                  position: "relative",
                }}
              >
                <img
                  src={dashimg}
                  className="img-fluid dashimage"
                  alt="image"
                />
                <h5 className="card-titlename mt-4">Total Products</h5>
                <p className="counts">100</p>
              </div>
            </div>

            <div
              className="col-md-4 col-sm-3 d-flex"
              style={{ justifyContent: "center" }}
            >
              <div
                className="card w-50 shadow mt-2 dashboard-cards"
                style={{
                  height: "100px",
                  borderRadius: "25px",
                  backgroundColor: "#BC5BFF",
                  position: "relative",
                }}
              >
                <img
                  src={dashimg}
                  className="img-fluid dashimage"
                  alt="image"
                />
                <h5 className="card-titlename mt-4">Total Users</h5>
                <p className="counts">500</p>
              </div>
            </div>

            <div
              className="col-md-4 col-sm-3  d-flex"
              style={{ justifyContent: "center" }}
            >
              <div
                className="card w-50 shadow mt-2 dashboard-cards"
                style={{
                  height: "100px",
                  borderRadius: "25px",
                  backgroundColor: "#FF09AC",
                  position: "relative",
                }}
              >
                <img
                  src={dashimg}
                  className="img-fluid dashimage"
                  alt="image"
                />
                <h5 className="card-titlename mt-4">Total Orders</h5>
                <p className="counts">15</p>
              </div>
            </div>
          </div>
        </div>

        <div
          className="container table-responsive dashboard-table"
          style={{
            marginTop: "50px",
            backgroundColor: "#fff",
            padding: "15px",
            borderRadius: "15px",
          }}
        >
          <table className="table table-hover mt-1 table-responsive">
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
