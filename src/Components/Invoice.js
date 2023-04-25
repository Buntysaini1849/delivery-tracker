import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { AiFillDelete } from "react-icons/ai";

export default function Invoice() {
  const [form, setForm] = useState(false);
  const [invoicefromdata, setInvoiceFormData] = useState([]);
  const [contwidth, setContwidth] = useState(false);
  const [customerName, setCustomerName] = useState("");
  const [addressLine1, setAddressLine1] = useState("");
  const [addressLine2, setAddressLine2] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [postcode, setPostcode] = useState("");
  const [country, setCountry] = useState("");
  const [items, setItems] = useState([]);

  const handleAddItem = (e) => {
    e.preventDefault();
    setItems([...items, { name: "", description: "", quantity: 0, price: 0, date:"", voucher_no:"" }]);
  };

  const handleChange = (event, index) => {
    event.preventDefault();
    const { name, value } = event.target;
    const newItems = [...items];
    newItems[index][name] = value;
    setItems(newItems);
  };

  const handleRemoveItem = (index) => {
    setItems(items.filter((item, i) => i !== index));
  };

  const handleinvoicesubmit = (e) => {
    e.preventDefault();
    const data = invoicefromdata;
    data.push({
      customerName,
      addressLine1,
      addressLine2,
      city,
      state,
      postcode,
      country,

    });

    setInvoiceFormData(data);
    localStorage.setItem("invoiceformdata", JSON.stringify(data));
    console.log(data);
    setCustomerName("");
    setAddressLine1("");
    setCity("");
    setState("");
    setPostcode("");
    setCountry("");
    setItems("");
  };

  const handlebtn = () => {
    setForm(true);
    setContwidth(true);
  };

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <div className="container-fluid pro-topcont">
        <div
          className="container-fluid pro-leftsection"
          style={{ width: contwidth ? "60%" : "100%", transition: "2s ease" }}
        >
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
                  Total Invoice : <span style={{ fontWeight: "bold" }}> 5</span>
                </p>
              </div>
              <div
                className="col-md-6 col-sm-6"
                style={{ display: "flex", justifyContent: "end" }}
              >
                <button
                  className="btn btn-sm btn-primary"
                  style={{ height: "36px", marginTop: "9px" }}
                  onClick={handlebtn}
                >
                  Add Invoice
                </button>
              </div>
            </div>
          </div>

          <div
            className="container mt-5 table-cls table-responsive"
            style={{
              justifyContent: "start",
              padding: "15px",
              background: "#fff",
              borderRadius: "15px",
            }}
          >
            <table className="table table-hover mt-1" style={{ width: "100%" }}>
              <thead>
                <tr>
                  <th scope="col">SN</th>
                  <th scope="col">Date</th>
                  <th scope="col">Voucher Number</th>
                  <th scope="col">Customer</th>
                  <th scope="col">Item</th>
                  <th scope="col">Qty</th>
                  <th scope="col">Price</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {invoicefromdata?.map((datas,index) => (
                <tr key={index+1}>
                  <th scope="row">{index+1}</th>
                  <td>{datas.items}</td>
                  <td>{datas.items}</td>
                  <td>{datas.customerName}</td>
                  <td>{datas.items}</td>
                  <td>{datas.items}</td>
                  <td>{datas.items}</td>
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
                </tr>))}
              </tbody>
            </table>
          </div>
        </div>

        <div
          className="container-fluid pro-rightsection"
          style={{ width: form ? "40%" : "0px", transition: "3s ease" }}
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
              Create Invoice
            </p>
    <div className="container-fluid" style={{overflowY:"scroll", height:"480px"}}>
            <div className="row mt-2">
              <div className="col">
                <div className="form-group">
                  <label style={{ fontSize: "14px", fontFamily: " verdana" }}>
                    Customer Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="customer_name"
                    name="customer_name"
                    placeholder="Enter customer name...."
                    style={{ fontSize: "13px" }}
                    onChange={(ev) => setCustomerName(ev.target.value)}
                  />
                </div>
              </div>

              <div className="col">
                <div className="form-group">
                  <label style={{ fontSize: "14px", fontFamily: " verdana" }}>
                    Address Line 1
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="Address1"
                    name="Address1"
                    placeholder="Enter Address Line 1...."
                    style={{ fontSize: "13px" }}
                    onChange={(ev) => setAddressLine1(ev.target.value)}
                  />
                </div>
              </div>
            </div>

            <div class="row mt-3">
              <div className="col">
                <div className="form-group">
                  <label style={{ fontSize: "14px", fontFamily: " verdana" }}>
                    Address Line 2
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="Address2"
                    name="Address2"
                    placeholder="Enter Address Line 2...."
                    style={{ fontSize: "13px" }}
                    onChange={(ev) => setAddressLine2(ev.target.value)}
                  />
                </div>
              </div>
              <div className="col">
                <div className="form-group">
                  <label style={{ fontSize: "14px", fontFamily: " verdana" }}>
                    City
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="city"
                    name="city"
                    placeholder="Enter City...."
                    style={{ fontSize: "13px" }}
                    onChange={(e) => setCity(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="row mt-3">
              <div className="col">
                <div className="form-group">
                  <label style={{ fontSize: "14px", fontFamily: " verdana" }}>
                    State
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="state"
                    name="state"
                    placeholder="Enter State...."
                    style={{ fontSize: "13px" }}
                    onChange={(ev) => setState(ev.target.value)}
                  />
                </div>
              </div>

              <div className="col">
                <div className="form-group">
                  <label style={{ fontSize: "14px", fontFamily: " verdana" }}>
                    Postcode
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="postcode"
                    name="postcode"
                    placeholder="Enter Postal code...."
                    style={{ fontSize: "13px" }}
                    onChange={(e) => setPostcode(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="row mt-3">
              <div className="col-md-6 col-sm-6">
                <div className="form-group">
                  <label style={{ fontSize: "14px", fontFamily: " verdana" }}>
                    Country
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    id="country"
                    name="country"
                    placeholder="Enter Country Name...."
                    style={{ fontSize: "13px" }}
                    onChange={(e) => setCountry(e.target.value)}
                  />
                </div>
              </div>

              <div className="col-md-6 col-sm-6">
                <button
                  type="submit"
                  className="btn btn-sm mt-4 keyword-btn"
                  style={{ width: "100%" }}
                  onClick={handleAddItem}
                >
                  Add Items
                </button>
              </div>
            </div>

            
            <div className="container mt-4">
              {items.map((item, index) => (
                <div key={index} className="invoice-item-box mt-3">
                  <AiFillDelete className="del-icon" onClick={() => handleRemoveItem(index)}/>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                      <label style={{ fontSize: "14px", fontFamily: " verdana" }}>
                         Item Name
                      </label>
                        <input
                          type="text"
                          name="name"
                          className="form-control"
                          placeholder="Enter item name"
                          value={item.name}
                          style={{fontSize:"10px"}}
                          onChange={(e) => handleChange(e, index)}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                      <label style={{ fontSize: "14px", fontFamily: " verdana" }}>
                         Description
                      </label>
                      <input
                        type="text"
                        name="description"
                        className="form-control"
                        placeholder="Enter item description"
                        value={item.description}
                        style={{fontSize:"10px"}}
                        onChange={(e) => handleChange(e, index)}
                      />
                      </div>
                      
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <div className="form-group">
                      <label style={{ fontSize: "14px", fontFamily: " verdana" }}>
                         Date
                      </label>

                        <input
                          type="date"
                          name="date"
                          className="form-control"
                          placeholder="Date"
                          value={item.date}
                          style={{fontSize:"13px"}}
                          onChange={(e) => handleChange(e, index)}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                      <label style={{ fontSize: "14px", fontFamily: " verdana" }}>
                         Voucher No.
                      </label>
                      <input
                        type="number"
                        name="voucher_no"
                        className="form-control"
                        placeholder="Voucher no..."
                        value={item.voucher_no}
                        style={{fontSize:"13px"}}
                        onChange={(e) => handleChange(e, index)}
                      />
                      </div>
                      
                    </div>
                  </div>

                  <div className="row mt-3">
                    <div className="col-md-6">
                      <div className="form-group">
                      <label style={{ fontSize: "14px", fontFamily: " verdana" }}>
                         Quantity
                      </label>

                        <input
                          type="number"
                          name="quantity"
                          className="form-control"
                          placeholder="Quantity"
                          value={item.quantity}
                          style={{fontSize:"13px"}}
                          onChange={(e) => handleChange(e, index)}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                      <label style={{ fontSize: "14px", fontFamily: " verdana" }}>
                         Price
                      </label>
                      <input
                        type="number"
                        name="price"
                        className="form-control"
                        placeholder="Price"
                        value={item.price}
                        style={{fontSize:"13px"}}
                        onChange={(e) => handleChange(e, index)}
                      />
                      </div>
                      
                    </div>
                  </div>
                </div>
              ))}
            </div>

            </div>

            <button
              type="submit"
              className="btn btn-primary mt-4"
              style={{ width: "100%" }}
              onClick={handleinvoicesubmit}
            >
              Add
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
