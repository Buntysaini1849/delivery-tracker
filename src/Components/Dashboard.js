import React, { useState, useEffect } from "react";
import { FaSignOutAlt } from "react-icons/fa";
import { BsFullscreen, BsFullscreenExit } from "react-icons/bs";
import { HiOutlineArrowUp } from "react-icons/hi";
import Sidebar from "./Sidebar";
import Products from "./Products";
import { useNavigate } from "react-router-dom";
import avatars from "../images/avatars.jpeg";
import deliveryboy from "../images/deliveryboy.png";

export default function Dashboard() {
  // const [isDarkMode, setIsDarkMode] = useState( JSON.parse(localStorage.getItem('isDarkMode')) || false);

  // useEffect(() => {
  //   localStorage.setItem('isDarkMode', JSON.stringify(isDarkMode));
  //   document.body.style.backgroundColor = isDarkMode ? '#212121' : '#e8e8e8';
  //   document.documentElement.style.setProperty('--slider-color', isDarkMode ? '#263544' : '#00073D');
  //   document.documentElement.style.setProperty('--loghead-color', isDarkMode ? '#ffffff' : '#000000');
  //   document.documentElement.style.setProperty('--li-color', isDarkMode ? '#2f3ea8' : '#3f6791');
  // }, [isDarkMode]);

  // const handletoggle = () => {
  //   setIsDarkMode(!isDarkMode);
  //   document.body.style.backgroundColor = isDarkMode ? '#212121' : '#e8e8e8';
  //   document.documentElement.style.setProperty('--slider-color', isDarkMode ? '#263544' : '#00073D');
  //   document.documentElement.style.setProperty('--loghead-color', isDarkMode ? '#ffffff' : '#000000');
  //   document.documentElement.style.setProperty('--li-color', isDarkMode ? '#2f3ea8' : '#3f6791');

  // };
  const [productCount, setProductCount] = useState(0);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const handleProductCountChange = (count) => {
    setProductCount(count);
  };

  let navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("email", "password");
    navigate("/");
  };

  const handleFullScreen = () => {
    const doc = window.document;
    const docEl = doc.documentElement;

    if (isFullScreen) {
      exitFullScreen();
    } else {
      enterFullScreen();
    }
  };

  const enterFullScreen = () => {
    const docEl = document.documentElement;

    if (docEl.requestFullscreen) {
      docEl.requestFullscreen();
    } else if (docEl.webkitRequestFullscreen) {
      docEl.webkitRequestFullscreen();
    } else if (docEl.mozRequestFullScreen) {
      docEl.mozRequestFullScreen();
    } else if (docEl.msRequestFullscreen) {
      docEl.msRequestFullscreen();
    }

    setIsFullScreen(true);
  };

  const exitFullScreen = () => {
    const doc = window.document;

    if (doc.exitFullscreen) {
      doc.exitFullscreen();
    } else if (doc.webkitExitFullscreen) {
      doc.webkitExitFullscreen();
    } else if (doc.mozCancelFullScreen) {
      doc.mozCancelFullScreen();
    } else if (doc.msExitFullscreen) {
      doc.msExitFullscreen();
    }

    setIsFullScreen(false);
  };

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div className="container-fluid" style={{ padding: "0px" }}>
        <nav className="container-fluid signout-head p-1">
          <div className="dashbox p-1">
            {/* <h5 style={{fontWeight:"400",fontSize:"18px"}} className="logheadtab">Dashboard</h5> */}
            <button onClick={handleFullScreen} className="transparent-btn my-1">
              {isFullScreen ? (
                <BsFullscreenExit
                  style={{ color: "#fff", marginLeft: "20px" }}
                />
              ) : (
                <BsFullscreen style={{ color: "#fff", marginLeft: "20px" }} />
              )}
            </button>
          </div>

          <div
            className="box d-flex  mt-2"
            style={{ marginRight: "20px", color: "#fff" }}
          >
            <p style={{ fontWeight: "500", lineHeight: "30px" }}>
              Welcome : <span>Dinesh</span> !
            </p>
            <FaSignOutAlt
              className="Signout-icon"
              style={{ marginTop: "3px", marginLeft: "10px", color: "#fff" }}
              alt="signout"
              onClick={logout}
            />
          </div>
        </nav>

        <div className="container-fluid mt-3">
          <div className="row d-flex">
            <div className="col-12">
              <div className="page-header-dash mt-1">
                <h5
                  className="page-header-title"
                  style={{ marginLeft: "10px" }}
                >
                  Dashboard
                </h5>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="container mb-5">
          <div className="card">
          <div
            className="row mt-5"
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
                className="card w-50  mt-2 dashboard-cards"
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
                className="card w-50  mt-2 dashboard-cards"
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
                className="card w-50  mt-2 dashboard-cards"
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
        
        </div> */}
        <div className="container-fluid mt-2">
          <div className="main-body">
            <div className="page-wrapper">
              <div className="row">
                <div className="col-xl-4 col-md-6">
                  <div className="card main-card mt-4">
                    <div className="card-body" style={{ padding: "35px 30px" }}>
                      <h6 className="cb-font">Total Users</h6>
                      <div className="row d-flex align-items-center mt-3">
                        <div className="col-9">
                          <h3
                            class="d-flex align-items-center m-b-0"
                            style={{
                              fontWeight: "300",
                              color: "#111",
                              fontSize: "26px",
                            }}
                          >
                            <HiOutlineArrowUp className="text-c-green" /> 5000
                          </h3>
                        </div>
                        <div className="col-3 text-right">
                          <p className="mb-0">50%</p>
                        </div>
                      </div>
                      <div className="progress mt-4" style={{ height: "7px" }}>
                        <div
                          className="progress-bar progress-c-theme"
                          role="progressbar"
                          aria-valuenow="50"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          style={{ width: "50%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-md-6">
                  <div className="card main-card mt-4">
                    <div className="card-body" style={{ padding: "35px 30px" }}>
                      <h6 className="cb-font">Total Products</h6>
                      <div className="row d-flex align-items-center mt-3">
                        <div className="col-9">
                          <h3
                            class="d-flex align-items-center m-b-0"
                            style={{
                              fontWeight: "300",
                              color: "#111",
                              fontSize: "26px",
                            }}
                          >
                            <HiOutlineArrowUp className="text-c-green" /> 500
                          </h3>
                        </div>
                        <div className="col-3 text-right">
                          <p className="mb-0">36%</p>
                        </div>
                      </div>
                      <div className="progress mt-4" style={{ height: "7px" }}>
                        <div
                          className="progress-bar progress-c-theme2"
                          role="progressbar"
                          aria-valuenow="30"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          style={{ width: "35%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-md-6">
                  <div className="card main-card mt-4">
                    <div className="card-body" style={{ padding: "35px 30px" }}>
                      <h6 className="cb-font">Total Sales</h6>
                      <div className="row d-flex align-items-center mt-3">
                        <div className="col-9">
                          <h3
                            class="d-flex align-items-center m-b-0"
                            style={{
                              fontWeight: "300",
                              color: "#111",
                              fontSize: "26px",
                            }}
                          >
                            <HiOutlineArrowUp className="text-c-green" /> ₹50000
                          </h3>
                        </div>
                        <div className="col-3 text-right">
                          <p className="mb-0">70%</p>
                        </div>
                      </div>
                      <div className="progress mt-4" style={{ height: "7px" }}>
                        <div
                          className="progress-bar progress-c-theme"
                          role="progressbar"
                          aria-valuenow="90"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          style={{ width: "70%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-8 col-md-6">
                  <div className="card main-card mt-4">
                    <div
                      className="card-header"
                      style={{ padding: "35px 30px" }}
                    >
                      <h6 className="cb-font">Pending Users</h6>
                    </div>
                    <div className="card-body py-2 px-0">
                      <div className="table-responsive">
                        <table className="table table-hover">
                          <tbody>
                            <tr className="unread">
                              <td>
                                <img
                                  src={avatars}
                                  alt="Avatar"
                                  className="rounded-circle-img mb-1"
                                />
                              </td>
                              <td>
                                <h6 className="mt-2">Dinesh</h6>
                              </td>
                              <td>
                                <h6 className="mt-2">8888888888</h6>
                              </td>
                              <td>
                                <h6 className="mt-2">abc@gmail.com</h6>
                              </td>
                              <td>
                                <h6 className="mt-2">Jind, Haryana</h6>
                              </td>
                              <td>
                                <div className="btnbox mt-2">
                                  <a
                                    href="#!"
                                    className="label theme-bg2 text-white"
                                  >
                                    Reject
                                  </a>
                                  <a
                                    href="#!"
                                    className="label theme-bg text-white"
                                  >
                                    Approve
                                  </a>
                                </div>
                              </td>
                            </tr>
                            <tr className="unread">
                              <td>
                                <img
                                  src={avatars}
                                  alt="Avatar"
                                  className="rounded-circle-img mb-1"
                                />
                              </td>
                              <td>
                                <h6 className="mt-2">Bunty</h6>
                              </td>
                              <td>
                                <h6 className="mt-2">8888888888</h6>
                              </td>
                              <td>
                                <h6 className="mt-2">abc@gmail.com</h6>
                              </td>
                              <td>
                                <h6 className="mt-2">Jind, Haryana</h6>
                              </td>
                              <td>
                                <div className="btnbox mt-2">
                                  <a
                                    href="#!"
                                    className="label theme-bg2 text-white"
                                  >
                                    Reject
                                  </a>
                                  <a
                                    href="#!"
                                    className="label theme-bg text-white"
                                  >
                                    Approve
                                  </a>
                                </div>
                              </td>
                            </tr>
                            <tr className="unread">
                              <td>
                                <img
                                  src={avatars}
                                  alt="Avatar"
                                  className="rounded-circle-img mb-1"
                                />
                              </td>
                              <td>
                                <h6 className="mt-2">Mukul</h6>
                              </td>
                              <td>
                                <h6 className="mt-2">8888888888</h6>
                              </td>
                              <td>
                                <h6 className="mt-2">abc@gmail.com</h6>
                              </td>
                              <td>
                                <h6 className="mt-2">Jind, Haryana</h6>
                              </td>
                              <td>
                                <div className="btnbox mt-2">
                                  <a
                                    href="#!"
                                    className="label theme-bg2 text-white"
                                  >
                                    Reject
                                  </a>
                                  <a
                                    href="#!"
                                    className="label theme-bg text-white"
                                  >
                                    Approve
                                  </a>
                                </div>
                              </td>
                            </tr>
                            <tr className="unread">
                              <td>
                                <img
                                  src={avatars}
                                  alt="Avatar"
                                  className="rounded-circle-img mb-1"
                                />
                              </td>
                              <td>
                                <h6 className="mt-2">Parmod</h6>
                              </td>
                              <td>
                                <h6 className="mt-2">8888888888</h6>
                              </td>
                              <td>
                                <h6 className="mt-2">abc@gmail.com</h6>
                              </td>
                              <td>
                                <h6 className="mt-2">Jind, Haryana</h6>
                              </td>
                              <td>
                                <div className="btnbox mt-2">
                                  <a
                                    href="#!"
                                    className="label theme-bg2 text-white"
                                  >
                                    Reject
                                  </a>
                                  <a
                                    href="#!"
                                    className="label theme-bg text-white"
                                  >
                                    Approve
                                  </a>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-md-6">
                  <div className="card main-card mt-4">
                    <div
                      className="card-header"
                      style={{ padding: "35px 30px" }}
                    >
                      <h6 className="cb-font">Total Delivery Boys</h6>
                    </div>
                    <div className="card-body py-2 px-0">
                      <div className="table-responsive">
                        <table className="table table-hover">
                          <tbody>
                            <tr className="unread">
                              <td>
                                <img
                                  src={deliveryboy}
                                  alt="Avatar"
                                  className="rounded-circle-img mb-1"
                                />
                              </td>
                              <td>
                                <h6 className="mt-2">Amit</h6>
                              </td>
                              <td>
                                <h6 className="mt-2">9999999999</h6>
                              </td>
                            </tr>
                            <tr className="unread">
                              <td>
                                <img
                                  src={deliveryboy}
                                  alt="Avatar"
                                  className="rounded-circle-img mb-1"
                                />
                              </td>
                              <td>
                                <h6 className="mt-2">Naveen</h6>
                              </td>
                              <td>
                                <h6 className="mt-2">9999999999</h6>
                              </td>
                            </tr>
                            <tr className="unread">
                              <td>
                                <img
                                  src={deliveryboy}
                                  alt="Avatar"
                                  className="rounded-circle-img mb-1"
                                />
                              </td>
                              <td>
                                <h6 className="mt-2">Ravi</h6>
                              </td>
                              <td>
                                <h6 className="mt-2">9999999999</h6>
                              </td>
                            </tr>
                            <tr className="unread">
                              <td>
                                <img
                                  src={deliveryboy}
                                  alt="Avatar"
                                  className="rounded-circle-img mb-1"
                                />
                              </td>
                              <td>
                                <h6 className="mt-2">Kunal</h6>
                              </td>
                              <td>
                                <h6 className="mt-2">9999999999</h6>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-8 col-md-6">
                  <div className="card main-card mt-4">
                    <div
                      className="card-header"
                      style={{ padding: "35px 30px" }}
                    >
                      <h6 className="cb-font">Location</h6>
                    </div>
                    <div className="card-body py-2 px-0">
                      {/* <MapComponent
                        isMarkerShown
                        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                        loadingElement={<div style={{ height: "100%" }} />}
                        containerElement={<div style={{ height: "400px" }} />}
                        mapElement={<div style={{ height: "100%" }} />}
                      /> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div
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
        </div> */}
      </div>
    </div>
  );
}
