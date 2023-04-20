import React, { useState, createContext, useEffect } from "react";
import Sidebar from "./Sidebar";
import Orders from "./Orders";

/*const gstdata = {
  option1: {
    gstrate: 0.05,
  },
  option2: {
    gstrate: 0.2,
  },
  option3: {
    gstrate: 0.03,
  },
}; */

export default function Products() {
  const [form, setForm] = useState(false);
  const [itemform, setItemForm] = useState(false);
  const [formData, setFormData] = useState([]);
  const [data, setData] = useState([]);
  const [cards, setCards] = useState(false);
  const [itembox, setItembox] = useState(false);
  const [keyword_data, setKeyword_data] = useState("");
  const [contwidth, setContwidth] = useState(false);
  const [box, setBox] = useState(false);
  const [qty, setQty] = useState(0);
  const [prices, setPrices] = useState(0);
  const [gstrate, setGstrate] = useState('');
  const [selectedOption, setSelectedOption] = useState("");
  const [relatedOptions, setRelatedOptions] = useState([]);
  const [text, setText] = useState("");
  const [list, setList] = useState([]);
  const [productCategory, setProductCategory] = useState("");
  const [productitem, setProductItem] = useState("");
  const [otheritem, setOtherItem] = useState("");
  const [productname, setProductname] = useState("");
  const [producthsn, setProducthsn] = useState("");
  const [productcode, setProductcode] = useState("");
  const [unit, setUnit] = useState("");
  const [priceperunit, setPricePerUnit] = useState("");
  const [fgst, setFgst] = useState('');
  const [productdescription, setProductDescription] = useState("");
  const [keywords, setKeywords] = useState("");

  const final_gst = qty * priceperunit * gstrate;
  const totalprice = qty * priceperunit + final_gst;

  const handlebtn = () => {
    setItemForm(false);
    setForm(true);
    setContwidth(true);
  };

  const handleitembtn = () => {
    setForm(false);
    setItemForm(true);
    setContwidth(true);
  };


  const handlebox = () => setBox(true);

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  const handleAddClick = (e) => {
    e.preventDefault();
    setList([...list, text]);
    setText("");
  };

  const options = [
    { value: "", label: "---Select product category---" },
    { value: "Electronics", label: "Electronics", name: "Electronics" },
    { value: "Grocery", label: "Grocery", name: "Grocery" },
    { value: "HomeItems", label: "Home Items", name: "HomeItems" },
  ];

  const optionRelatedMap = {
    Electronics: [
      "Mobiles",
      "LED",
      "Refridgerator",
      "Washing Machine",
      "LED Bulb",
    ],
    Grocery: ["Wheat Flour", "Oil", "Spices"],
    HomeItems: ["Spoon", "Sofa", "Chair", "Tables"],
  };

  const handledata = (e) => {
    const selectedOption = e.target.value;
    setSelectedOption(selectedOption);
    setProductCategory(selectedOption);
    setRelatedOptions(optionRelatedMap[selectedOption]);
    console.log(selectedOption);
  };

  const handleitembox = (event) => {
    setProductname(event.target.value);
    if (event.target.value === "showInput") {
      setItembox(true);
    } else {
      setItembox(false);
    }
  };

  /*const handlegstrate = (value) => {
    setGstrate(gstdata[value].gstrate);
  }; */

  const handlesubmit = (e) => {
    e.preventDefault();
    const data = formData;
    data.push({
      productCategory,
      productitem,
      productname,
      producthsn,
      productcode,
      qty,
      unit,
      priceperunit,
      prices,
      gstrate,
      fgst,
      productdescription,
      keywords,
    });
    setFormData(data);
    localStorage.setItem("formData", JSON.stringify(data));
    console.log(data);
    setProductCategory("");
    setProductItem("");
    setProductname("");
    setProducthsn("");
    setProductItem("");
    setQty("");
    setUnit("");
    setPricePerUnit("");
    setKeywords("");
    setProductDescription("");
  };

  const handledelete = (e) => {
    e.preventDefault();
    localStorage.clear();
    alert("Local Storage cleared successfully!");
  };

  useEffect(() => {
    const data = localStorage.getItem("formData");
    if (data) {
      setFormData(JSON.parse(data));
    }
  }, []);

  const hidecard = () => {
    setCards(true);
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
      <div
        className="container-fluid"
        style={{ width: contwidth ? "55%" : "100%", transition: "3s ease" }}
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
            <div className="col-md-9 col-sm-9">
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
            <div className=" col-md-3 col-sm-3">
              <div className="row d-flex">
                <div
                  className="col-md-6 col-sm-6"
                  style={{ display: "flex", justifyContent: "end" }}
                >
                  <button
                    className="btn btn-sm btn-primary"
                    onClick={handlebtn}
                    style={{marginTop: "9px" }}
                  >
                    Add Product
                  </button>
                </div>

                <div
                  className="col-md-6 col-sm-6"
                  style={{ display: "flex", justifyContent: "end" }}
                >
                  <button
                    className="btn btn-sm btn-primary"
                    onClick={handleitembtn}
                    style={{marginTop: "9px" }}
                  >
                    Add Item
                  </button>
                </div>
              </div>
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
            height: "auto",
            overflowY: "scroll",
          }}
        >
          <table className="table table-hover mt-1 " style={{ width: "100%" }}>
            <thead>
              <tr>
                <th scope="col">SN</th>
                <th scope="col">Product Category</th>
                <th scope="col">Product Item</th>
                <th scope="col">Product Name</th>
                <th scope="col">Product HSN</th>
                <th scope="col">Product Code</th>
                <th scope="col">Qty</th>
                <th scope="col">Price Per Unit</th>
                <th scope="col">Gst Rate</th>
                <th scope="col">FGST</th>
                <th scope="col">Price</th>
                <th scope="col">Product Description</th>
                <th scope="col">Keywords</th>
                <th scope="col">Action</th>
              </tr>
            </thead>

            {formData.length > 0 && (
              <tbody>
                {formData?.map((items, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{items.productCategory}</td>
                    <td>{items.productitem}</td>
                    <td>{items.productname}</td>
                    <td>{items.producthsn}</td>
                    <td>{items.productcode}</td>
                    <td>{items.qty}</td>
                    <td>{items.priceperunit}</td>
                    <td>{items.gstrate}</td>
                    <td>{items.fgst}</td>
                    <td>{items.prices}</td>
                    <td>{items.productdescription}</td>
                    <td>{items.keywords}</td>
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
                        onClick={handledelete}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            )}
          </table>
        </div>
      </div>

      <div
        className="container-fluid"
        style={{ width: form || itemform ? "100%" : "0px", transition: "3s ease" }}
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
                  id="productcategory"
                  name="productcategory"
                  className="form-control"
                  key={selectedOption}
                  value={selectedOption}
                  onChange={handledata}
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


            <div className="col">
              <div className="form-group">
                <label style={{ fontSize: "14px", fontFamily: " verdana" }}>
                  Product Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="productname"
                  name="productname"
                  placeholder="Enter product name...."
                  style={{ fontSize: "13px" }}
                  onChange={(ev) => setProductname(ev.target.value)}
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
                  id="producthsn"
                  name="producthsn"
                  placeholder="Enter product HSN...."
                  style={{ fontSize: "13px" }}
                  onChange={(e) => setProducthsn(e.target.value)}
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
                  id="productcode"
                  name="productcode"
                  placeholder="Enter product code...."
                  style={{ fontSize: "13px" }}
                  onChange={(e) => setProductcode(e.target.value)}
                />
              </div>
            </div>
          </div>


          <div className="row mt-3">
            <div className="col">
              <div className="form-group">
                <label style={{ fontSize: "14px", fontFamily: "verdana" }}>
                  GST %
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="fgst"
                  name="fgst"
                  onChange={(e) => setFgst(e.target.value)}
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
                  Product Description
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="Productdescription"
                  name="productDescription"
                  placeholder="Enter description...."
                  style={{ fontSize: "13px" }}
                  title="Description"
                  onChange={(e) => setProductDescription(e.target.value)}
                />
              </div>
            </div>

          </div>

          <div className="row mt-3">
          

            <div className="col-md-4 col-sm-4">
              <div className="form-group">
                <label style={{ fontSize: "14px", fontFamily: " verdana" }}>
                  Keywords
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter keyword...."
                  style={{ fontSize: "13px" }}
                  onClick={handlebox}
                  id="keyword"
                  name="keyword"
                  title="Keyword"
                  onChange={handleInputChange}
                  value={text}
                />
              </div>
            </div>

            <div className="col-md-4 col-sm-4">
              <button
                type="submit"
                className="btn btn-sm mt-4 keyword-btn"
                style={{ width: "100%" }}
                onClick={handleAddClick}
              >
                Add
              </button>
            </div>

            <div className="col-md-4 col-sm-4">
              <div
                className="container"
                style={{
                  border: "1px solid grey",
                  height: "110px",
                  overflowY: "scroll",
                  display: box ? "block" : "none",
                }}
              >
                <div
                  className="container my-2 card-container"
                  style={{ display: "flex" }}
                >
                  {list.map((item, index) => (
                    <div
                      className="card align-items-center text-white  mt-2 shadow-sm keyword-card mx-2"
                      role="alert"
                      aria-live="assertive"
                      aria-atomic="true"
                      style={{
                        display: cards ? "none" : "block",
                        marginLeft: "10px!important",
                      }}
                    >
                      <div className="d-inherit">
                        <div
                          key={index}
                          className="card-body keyword-card-body pt-1 pb-1"
                          id="keywords"
                          name="keywords"
                          onChange={(e) => setKeywords(e.target.value)}
                        >
                          {item}
                        </div>

                        {/*}    <button
                        type="button"
                        className="btn-close keyword-card-btn"
                        onClick={hidecard}
                        aria-label="Close"
                ></button> */}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
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
                  id="productimage"
                  name="productimage"
                />
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



        <form
          className="mt-5 p-4"
          style={{
            background: "#fff",
            borderRadius: "20px",
            display: itemform ? "block" : "none",
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
            Add Item
          </p>

          <div className="row mt-2">
            <div className="col-md-6 col-sm-6">
              <div className="form-group">
                <label style={{ fontSize: "14px", fontFamily: " verdana" }}>
                  Select Product
                </label>
                <select
                  id="productcategory"
                  name="productcategory"
                  className="form-control"
                  key={selectedOption}
                  value={selectedOption}
                  onChange={handledata}
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
            <div className="col-md-6 col-sm-6">
              <div className="form-group d-grid">
                <label style={{ fontSize: "14px", fontFamily: "verdana" }}>
                  Unit
                </label>

                <select
                  id="unit"
                  name="unit"
                  title="Unit Type"
                  className="form-control"
                  onChange={(e) => setUnit(e.target.value)}
                >
                   <option value="" style={{ fontSize: "13px" }} disabled>
                    ---Select Unit---
                  </option>
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

          </div>

          <div className="row mt-3">
          <div className="col-md-4 col-sm-4">
              <div className="form-group">
                <label style={{ fontSize: "14px", fontFamily: " verdana" }}>
                 Sale Price
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="sale_price"
                  name="sale_price"
                  placeholder="Enter Sale Price...."
                  onChange={(ev) => setQty(Number(ev.target.value))}
                  style={{ fontSize: "13px" }}
                />
              </div>
            </div>

            <div className="col-md-4 col-sm-4">
              <div className="form-group">
                <label style={{ fontSize: "14px", fontFamily: " verdana" }}>
                 MRP Price
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="mrp_price"
                  name="mrp_price"
                  placeholder="Enter MRP Price...."
                  onChange={(ev) => setQty(Number(ev.target.value))}
                  style={{ fontSize: "13px" }}
                />
              </div>
            </div>

            <div className="col-md-4 col-sm-4">
              <div className="form-group">
                <label style={{ fontSize: "14px", fontFamily: " verdana" }}>
                 Total Qty
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="total_qty"
                  name="total_qty"
                  placeholder="Total Qty...."
                  onChange={(ev) => setQty(Number(ev.target.value))}
                  style={{ fontSize: "13px" }}
                />
              </div>
            </div>
          </div>

          <div className="row mt-3">
            <div className="col">
              <div className="form-group">
                <label style={{ fontSize: "14px", fontFamily: "verdana" }}>
                  Available Qty
                </label>
                <input
                  className="form-control"
                  id="availableQty"
                  name="availableQty"
                  onChange={(ev) => setGstrate(Number(ev.target.value))}
                  placeholder="Enter Qty"
                  style={{ fontSize: "13px" }}
                  title="Available Qty"
                />
              </div>
            </div>

            <div className="col">
              <div className="form-group">
                <label style={{ fontSize: "14px", fontFamily: "verdana" }}>
                  Discount %
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="discount"
                  name="discount"
                  onChange={(e) => setFgst(e.target.value)}
                  placeholder="Enter Discount (in %)"
                  style={{ fontSize: "13px" }}
                />
              </div>
            </div>
            <div className="col-md-6 col-sm-6">
              <div className="form-group">
                <label style={{ fontSize: "14px", fontFamily: " verdana" }}>
                  Product Images
                </label>
                <input
                  multiple
                  type="file"
                  className="form-control"
                  id="productimages"
                  name="productimages"
                />
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
