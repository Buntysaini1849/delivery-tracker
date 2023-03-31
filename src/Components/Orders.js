import React, { useState} from "react";
import Sidebar from "./Sidebar";
import { useNavigate } from "react-router-dom";


export default function Orders() {
  const [form, setForm] = useState(false);
 

 
  const navigate = useNavigate();

  const navigateform = (event) => {
    navigate("/OrderForm");
  };



  


  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div className="container-fluid">
        <div className="row d-flex">
          <div className="col-md-8 col-sm-4">
            <div className="container-fluid mt-5">
              <div
                className="row d-flex"
                style={{
                  background: "#fff",
                  padding: "10px",
                  borderRadius: "15px",
                  width: "100%",
                }}
              >
                <div className="col-md-6 col-sm-6">
                  <p
                    className="mt-3"
                    style={{
                      fontStyle: "normal",
                      fontWeight: "500",
                      fontSize: "15px",
                    }}
                  >
                    Total Products :{" "}
                    <span style={{ fontWeight: "bold" }}> 5</span>
                  </p>
                </div>
                <div
                  className="col-md-6 col-sm-6"
                  style={{ display: "flex", justifyContent: "end" }}
                >
                  <button
                    className="btn btn-sm btn-primary"
                    onClick={navigateform}
                    style={{ height: "36px", marginTop: "9px" }}
                  >
                    Add Order
                  </button>
                </div>
              </div>
            </div>

            <div
              className="container mt-5 d-flex table-responsive"
              style={{
                justifyContent: "start",
                padding: "15px",
                background: "#fff",
                borderRadius: "15px",
              }}
            >
              <table
                className="table table-hover mt-1"
                style={{ width: "100%" }}
              >
                <thead>
                  <tr>
                    <th scope="col">SN</th>
                    <th scope="col">Order Id</th>
                    <th scope="col">Customer Name</th>
                    <th scope="col">Item</th>
                    <th scope="col">Qty</th>
                    <th scope="col">Price</th>
                    <th scope="col">GST</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>


               
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>DN12345</td>
                      <td>Dinesh</td>
                      <td>Basket</td>
                      <td>2</td>
                      <td>1000</td>
                      <td>2%</td>
                      <td><button
                    className="btn btn-sm btn-primary"
                    style={{ height: "30px"}}
                  >
                    Edit
                  </button></td>
                  <td><button
                    className="btn btn-sm btn-danger"
                    style={{ height: "30px"}}
                  >
                    Delete
                  </button></td>
                    </tr>
                  </tbody>
               
              </table>
            </div>
          </div>

        
        </div>
      </div>
    </div>
  );
}
