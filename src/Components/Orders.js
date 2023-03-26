import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";

export default function Products() {
  const [form, setForm] = useState(false);
 

  const handlebtn = () => setForm(true);


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
                    onClick={handlebtn}
                    style={{ height: "36px", marginTop: "9px" }}
                  >
                    Add Order
                  </button>
                </div>
              </div>
            </div>

            <div
              className="container mt-5 d-flex"
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
                    <th scope="col">Customer Name</th>
                    <th scope="col">Product Name</th>
                    <th scope="col">Model</th>
                    <th scope="col">HSN</th>
                    <th scope="col">GST</th>
                    <th scope="col">Price</th>
                    <th scope="col">Stock</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>


               
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Dinesh</td>
                      <td>Basket</td>
                      <td>1215</td>
                      <td>5%</td>
                      <td>500</td>
                      <td>800</td>
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

          <div className="col-md-4 col-sm-4 mt-2">
            <div className="container-fluid">
              <form
                className="mt-5 p-4"
                style={{
                  background: "#fff",
                  borderRadius: "20px",
                  display: form ? "block" : "none",
                }}
              >
                <p
                  className="d-flex"
                  style={{
                    justifyContent: "center",
                    fontSize: "20px",
                    fontWeight: "bold",
                  }}
                >
                  Add Product
                </p>

                <div className="form-group">
                  <label style={{ fontSize: "14px", fontFamily: " verdana" }}>
                    Product Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="product_name"
                    placeholder="Enter product name...."
                    style={{ fontSize: "13px" }}
                  />
                </div>

                <div className="form-group">
                  <label style={{ fontSize: "14px", fontFamily: " verdana" }}>
                    Product Code
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="product_code"
                    placeholder="Enter product code...."
                    style={{ fontSize: "13px" }}
                  />
                </div>

                <div className="form-group">
                  <label style={{ fontSize: "14px", fontFamily: " verdana" }}>
                    Product HSN
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="product_hsn"
                    placeholder="Enter product HSN...."
                    style={{ fontSize: "13px" }}
                  />
                </div>

                <div className="form-group">
                  <label style={{ fontSize: "14px", fontFamily: " verdana" }}>
                    GST %
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="product_gst"
                    placeholder="Enter GST (in %)...."
                    style={{ fontSize: "13px" }}
                  />
                </div>

                <div className="form-group">
                  <label style={{ fontSize: "14px", fontFamily: " verdana" }}>
                    Total Quantity
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="product_qty"
                    placeholder="Enter total quantity...."
                    style={{ fontSize: "13px" }}
                  />
                </div>

                <div className="form-group">
                  <label style={{ fontSize: "14px", fontFamily: " verdana" }}>
                    Pending Qty
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="pending_qty"
                    placeholder="Enter pending quantity...."
                    style={{ fontSize: "13px" }}
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary mt-4"
                  style={{ width: "100%" }}
                >
                  Add
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
