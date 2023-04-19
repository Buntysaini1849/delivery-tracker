import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { BsFillPlusSquareFill } from "react-icons/bs";

export default function Orders(props) {
  const [form, setForm] = useState(false);
  const [formData, setFormData] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");
  const [contwidth, setContwidth] = useState(false);
  const [orderid,setOrderId]= useState("");
  const [customer, setCustomer] = useState("");
  const [date,setDate] = useState("");
  const [item,setItem] = useState("");
  const [qty, setQty] = useState(0);
  const [price, setPrice] = useState(0);
  const [gst, setGst] = useState(0);
  const [inputs, setInputs] = useState([{ index: 1, value: '' }]);
  const [showinput, setshowinput] = useState(false);
  const gst_rate = 0.02;
  const final_gst = qty * price * gst_rate;
  const totalprice = qty * price + final_gst;



  const handlebtn = () => {
    setForm(true);
    setContwidth(true);
  };


  const options = [
    { value: "", label: "---Select customer---" },
    { value: "Bunty", label: "Bunty", name: "Bunty" },
    { value: "Dinesh", label: "Dinesh", name: "Dinesh" },
    { value: "Mukul", label: "Mukul", name: "Mukul" }
  ];

  const handlecustomer = (e) => {
    const selectedOption = e.target.value;
    setSelectedOption(selectedOption);
    setCustomer(selectedOption);
    console.log(selectedOption);
  };





  const handlesubmit = (e) => {
    e.preventDefault();
    const data = formData;
    data.push({orderid,customer,date,item,qty,price,gst});
    setFormData(data);
    localStorage.setItem("formData", JSON.stringify(data));
    console.log(data);
    setOrderId("");
    setCustomer("");
    setDate("");
    setItem("");
    setQty("");
    setPrice("");
    setQty("");
  };

  const handleAddInput = () => {
    const newIndex = inputs.length+1;
    setInputs([...inputs,{ index: newIndex, value: '' }]);
    setshowinput(true);
  };

  const handleInputChange = (event, index) => {
    const newInputs = [...inputs];
    newInputs[index].value = event.target.value;
    setInputs(newInputs);
  };



  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div
        className="container-fluid"
        style={{ width: contwidth ? "50%" : "100%", transition: "2s ease" }}
      >
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
                  Total Orders : <span style={{ fontWeight: "bold" }}> 5</span>
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
            className="container mt-5 d-flex table-responsive"
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
                  <th scope="col">Order Id</th>
                  <th scope="col">Customer Name</th>
                  <th scope="col">Order Date</th>
                  <th scope="col">Item</th>
                  <th scope="col">Qty</th>
                  <th scope="col">Price</th>
                  <th scope="col">GST</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>

              <tbody>
              {formData?.map((items,index) => (
                <tr key={index}>
                  <th scope="row">{index+1}</th>
                  <td>{items.orderid}</td>
                  <td>{items.customer}</td>
                  <td>{items.date}</td>
                  <td>{items.item}</td>
                  <td>{items.qty}</td>
                  <td>{items.price}</td>
                  <td>{items.gst}</td>
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
      </div>

      <div
        className="container-fluid"
        style={{ width: form ? "40%" : "0px", transition: "2s ease" }}
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
            Add Order
          </p>

          <div className="row">
            <div className="col">
              <div className="form-group mt-1">
                <label style={{ fontSize: "14px", fontFamily: " verdana" }}>
                  Order Id
                </label>
                <input
                  disabled
                  type="text"
                  className="form-control"
                  id="order_id"
                  placeholder="Order Id...."
                  value={orderid}
                  style={{ fontSize: "13px" }}
                />
              </div>
            </div>

            <div className="col">
              <div className="form-group mt-2">
                <label style={{ fontSize: "14px", fontFamily: " verdana" }}>
                  Select Customer
                </label>
                <select
                  name="customer_name"
                  id="customer_name"
                  placeholder="Select customer..."
                  className="form-control"
                  key={selectedOption}
                  value={selectedOption}
                  onChange={handlecustomer}
                >
                  {options.map((option) => (
                      <option
                          key={option.value}
                          value={option.value}
                          name={option.name}
                          style={{ fontSize: "12px" }}
                       >
                         {option.label}
                      </option>
                    ))}
                </select>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <div className="form-group mt-2">
                <label style={{ fontSize: "14px", fontFamily: " verdana" }}>
                  Item
                </label>
                <select
                  name="item"
                  id="item"
                  placeholder="Select item..."
                  className="form-control"
                >
                  <option value="" style={{ fontSize: "13px" }}>
                    Bucket Set
                  </option>
                  <option value="" style={{ fontSize: "13px" }}>
                    AB Wheel Roller
                  </option>
                </select>
              </div>
            </div>

            <div className="col">
              <div className="form-group mt-2">
                <label style={{ fontSize: "14px", fontFamily: " verdana" }}>
                  Order Date
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="order_date"
                  placeholder="Select date of order..."
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <div className="form-group mt-2">
                <label style={{ fontSize: "14px", fontFamily: " verdana" }}>
                  Quantity
                </label>
                <input
                  type="number"
                  className="form-control"
                  onChange={(ev) => setQty(Number(ev.target.value))}
                  id="product_qty"
                  placeholder="Enter quantity...."
                  style={{ fontSize: "13px" }}
                />
              </div>
            </div>

            <div className="col">
              <div className="form-group mt-2">
                <label style={{ fontSize: "14px", fontFamily: " verdana" }}>
                  Unit
                </label>
                <select
                  name="unit"
                  id="unit"
                  placeholder="Select unit..."
                  className="form-control"
                >
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

            <div className="col">
              <div className="form-group mt-2">
                <label style={{ fontSize: "14px", fontFamily: " verdana" }}>
                  Price
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="price"
                  onChange={(ev) => setPrice(Number(ev.target.value))}
                  placeholder="Enter price...."
                  style={{ fontSize: "13px" }}
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <div className="form-group mt-2">
                <label style={{ fontSize: "14px", fontFamily: " verdana" }}>
                  GST
                </label>
                <input
                  disabled
                  className="form-control"
                  value={final_gst}
                  id="gst"
                  name="gst"
                  style={{ fontSize: "13px" }}
                />
              </div>
            </div>

            <div className="col">
              <div className="form-group mt-2">
                <label style={{ fontSize: "14px", fontFamily: " verdana" }}>
                  Total Price
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="total_price"
                  value={totalprice}
                  placeholder="Enter total price...."
                  style={{ fontSize: "13px" }}
                />
              </div>
            </div>
          </div>

          <div className="row mt-2">
            <div className="col">
              <div className="form-group mt-2">
                <label
                  style={{
                    fontSize: "14px",
                    fontFamily: " verdana",
                    position: "relative",
                  }}
                >
                  Address
                  <span>
                    <BsFillPlusSquareFill
                      className="plus-icon"
                      onClick={handleAddInput}
                    />
                  </span>
                </label>

              </div>
            </div>
          </div>


          <div className="container-fluid shadow-sm mt-3 pb-3">
            <div className="row">
              <div className="col">
              {inputs.map(input => (
              <div key={input.index}>
                <p
                  className="pt-2"
                  style={{ fontSize: "12px", fontWeight: "600" }}
                >
                  {`Address : ${input.index}`}
                </p>
                <input
                  type="text"
                  id="address"
                  placeholder="add address..."
                  key={input.index}
                  value={input.value}
                  className="form-control pb-3"
                  style={{ fontSize: "12px" }}
                  onChange={(event) => handleInputChange(event, input.index)}
                />
              </div>
            ))}
              </div>
            </div>
            
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="btn btn-primary btn-md mt-4"
              style={{ width: "100%" }}
              onClick={handlesubmit}
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
