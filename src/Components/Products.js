import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";

const gstdata = {
  option1: {
    gstrate: 0.05,
  },
  option2: {
    gstrate: 0.2,
  },
  option3: {
    gstrate: 0.03,
  },
};

export default function Products() {
  const [form, setForm] = useState(false);
  const [data, setData] = useState([]);
  const [cards, setCards] = useState(false);
  const [keyword_data, setKeyword_data] = useState('');
  const [box, setBox] = useState(false);
  const [qty, setQty] = useState(0);
  const [prices, setPrices] = useState(0);
  const [gstrate, setGstrate] = useState(0);

  const final_gst = qty * prices * gstrate;
  const totalprice = qty * prices + final_gst;

  const handlebtn = () => setForm(true);
  const handlebox = () => setBox(true);

  const handlegstrate = (value) => {
    setGstrate(gstdata[value].gstrate);
  };

  const hidecard = () => {
    setCards(true);
  }

  const handlesubmit = (e) => {
    e.preventDefault();

  };



  useEffect(() => {
    fetch("http://ecommerce.techiecy.com/inventory/products/", {
      method: "POST",
    })
      .then((res) => res.json())
      .then((data) => setData(data.data));
    console.log(data);
  }, []);

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div className="container-fluid">
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
                Total Products : <span style={{ fontWeight: "bold" }}> 5</span>
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
                Add Product
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
          <table className="table table-hover mt-1 " style={{ width: "100%" }}>
            <thead>
              <tr>
                <th scope="col">SN</th>
                <th scope="col">Product Name</th>
                <th scope="col">Model</th>
                <th scope="col">HSN</th>
                <th scope="col">GST</th>
                <th scope="col">Price</th>
                <th scope="col">Stock</th>
                <th scope="col">Action</th>
              </tr>
            </thead>

            {data?.map((items) => (
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>{items.name}</td>
                  <td>{items.model}</td>
                  <td>{items.hsn}</td>
                  <td>{items.gst}</td>
                  <td>{items.price}</td>
                  <td>{items.stock}</td>
                  <td>
                    <button
                      className="btn btn-sm btn-primary"
                      style={{ height: "30px" }}
                    >
                      Edit
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-sm btn-danger"
                      style={{ height: "30px" }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>

      <div
        className="container-fluid"
        style={{ width: form ? "100%" : "0px", transition: "2s ease" }}
      >
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

          <div className="row mt-2">
            <div className="col">
              <div className="form-group">
                <label style={{ fontSize: "14px", fontFamily: " verdana" }}>
                  Product Category
                </label>
                <select
                  id="pro-cat"
                  placeholder="Select unit..."
                  className="form-control"
                  onChange={(e) => handlegstrate(e.currentTarget.value)}
                >
                  <option value="" style={{ fontSize: "13px" }}>
                    Select product category...
                  </option>
                  <option value="option1" style={{ fontSize: "13px" }}>
                    Electronics
                  </option>
                  <option value="option2" style={{ fontSize: "13px" }}>
                    Grocery
                  </option>
                  <option value="option3" style={{ fontSize: "13px" }}>
                    Home Items
                  </option>
                </select>
              </div>
            </div>

            <div className="col">
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
            </div>
          </div>

          <div class="row mt-3">
            <div className="col">
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
            </div>
            <div className="col">
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
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-md-4 col-sm-4">
              <div className="form-group">
                <label style={{ fontSize: "14px", fontFamily: " verdana" }}>
                  Qty
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="qty"
                  placeholder="Enter quantity...."
                  onChange={(ev) => setQty(Number(ev.target.value))}
                  style={{ fontSize: "13px" }}
                />
              </div>
            </div>

            <div className="col-md-2 col-sm-2">
              <div className="form-group">
                <label style={{ fontSize: "14px", fontFamily: "verdana" }}>
                  Unit
                </label>

                <select id="Unit_type" title="Unit Type">
                  <option value="" style={{ fontSize: "13px" }}>
                    Pcs
                  </option>
                  <option value="" style={{ fontSize: "13px" }}>
                    Gms.
                  </option>
                  <option value="" style={{ fontSize: "13px" }}>
                    Kg
                  </option>
                  <option value="" style={{ fontSize: "13px" }}>
                    Kgs.
                  </option>
                  <option value="" style={{ fontSize: "13px" }}>
                    Litre
                  </option>
                  <option value="" style={{ fontSize: "13px" }}>
                    Dozen
                  </option>
                  <option value="" style={{ fontSize: "13px" }}>
                    Metre
                  </option>
                  <option value="" style={{ fontSize: "13px" }}>
                    Tonne
                  </option>
                  <option value="" style={{ fontSize: "13px" }}>
                    Units
                  </option>
                </select>
              </div>
            </div>

            <div className="col-md-6 col-sm-6">
              <div className="form-group">
                <label style={{ fontSize: "14px", fontFamily: " verdana" }}>
                  Price per unit
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="price-unit"
                  placeholder="Price per unit...."
                  onChange={(ev) => setPrices(Number(ev.target.value))}
                  style={{ fontSize: "13px" }}
                  title="Price per unit"
                />
              </div>
            </div>
          </div>

          <div className="row mt-3">
            <div className="col">
              <div className="form-group">
                <label style={{ fontSize: "14px", fontFamily: "verdana" }}>
                  GST Rate
                </label>
                <input
                  disabled
                  className="form-control"
                  id="product_gst"
                  value={gstrate}
                  placeholder="Enter GST (in %)...."
                  style={{ fontSize: "13px" }}
                  title="GST Rate"
                />
              </div>
            </div>

            <div className="col">
              <div className="form-group">
                <label style={{ fontSize: "14px", fontFamily: "verdana" }}>
                  FGST
                </label>
                <input
                  disabled
                  className="form-control"
                  id="product_gst"
                  value={final_gst}
                  placeholder="Enter GST (in %)...."
                  style={{ fontSize: "13px" }}
                  title="GST"
                />
              </div>
            </div>

            <div className="col">
              <div className="form-group">
                <label style={{ fontSize: "14px", fontFamily: " verdana" }}>
                  Price
                </label>
                <input
                  disabled
                  type="number"
                  className="form-control"
                  id="price"
                  value={totalprice}
                  placeholder="Price...."
                  style={{ fontSize: "13px" }}
                  title="price"
                />
              </div>
            </div>
          </div>

          <div className="row mt-3">
            <div className="col">
              <div className="form-group">
                <label style={{ fontSize: "14px", fontFamily: " verdana" }}>
                  Product Description
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="Pro_desc"
                  placeholder="Enter description...."
                  style={{ fontSize: "13px" }}
                  title="Description"
                />
              </div>
            </div>

            <div className="col">
              <div className="form-group">
                <label style={{ fontSize: "14px", fontFamily: " verdana" }}>
                  Keywords
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="keywords"
                  placeholder="Enter keyword...."
                  style={{ fontSize: "13px" }}
                  onClick={handlebox}
                  title="Keywords"
                />
              </div>
            </div>

            <div className="col-md-2">
              <button
                type="submit"
                className="btn btn-sm mt-4 keyword-btn"
                style={{ width: "100%" }}
              >
                Add
              </button>
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-md-6 col-sm-6">
              <div className="form-group">
                <label style={{ fontSize: "14px", fontFamily: " verdana" }}>
                  Product Image
                </label>
                <input
                  type="file"
                  className="form-control"
                  id="product-image"
                />
              </div>
            </div>

            <div className="col-md-6 col-sm-6">
              <div
                className="container"
                style={{
                  border: "1px solid grey",
                  height: "100px",
                  display: box ? "block" : "none",
                }}
              >
           <div
                  className="card align-items-center text-white  mt-2 shadow-sm keyword-card"
                  role="alert"
                  aria-live="assertive"
                  aria-atomic="true"
                  style={{display: cards ? "none":"block"}}
                >
                  <div className="d-flex">
                    <div className="card-body keyword-card-body">item</div>
                    <button
                      type="button"
                      className="btn-close keyword-card-btn"
                      onClick={hidecard}
                      aria-label="Close"
                    ></button>
                  </div>
                </div>     
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="btn btn-primary mt-4"
            style={{ width: "100%" }}
            onClick={handlesubmit}
          >
            Add
          </button>
        </form>
      </div>
    </div>
  );
}
