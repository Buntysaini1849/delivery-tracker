import React, { useState, useEffect, useRef } from "react";
import Sidebar from "./Sidebar";
import { addProduct, addItem } from ".././state/actions/action";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  MdCancel,
  MdOutlineEditCalendar,
  MdOutlineDelete,
} from "react-icons/md";
import { PRODUCTLIST_API, CATEGORYLIST_API, UNITLIST_API } from "./apiUrls";

export default function Products() {
  const [productData, setProductData] = useState([]);

  const [options, setOptions] = useState([]);

  const [unitOptions, setUnitOptions] = useState([]);

  const [form, setForm] = useState(false);
  const [itemform, setItemForm] = useState(false);
  const [producttable, setProductTable] = useState(true);
  const [itemtable, setItemTable] = useState(false);
  const [productformData, setProductFormData] = useState([]);
  const [values, setValues] = useState([]);
  const [itemformData, setItemFormData] = useState([]);
  const [data, setData] = useState([]);
  const [cards, setCards] = useState(false);
  const [itembox, setItembox] = useState(false);
  const [contwidth, setContwidth] = useState(false);
  const [box, setBox] = useState(false);
  const [gstrate, setGstrate] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [text, setText] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productname, setProductname] = useState("");
  const [product, setProduct] = useState("");
  const [producthsn, setProducthsn] = useState("");
  const [productcode, setProductcode] = useState("");
  const [unit, setUnit] = useState("");
  const [saleprice, setSalePrice] = useState("");
  const [mrpprice, setMrpPrice] = useState("");
  const [totalqty, setTotalQty] = useState(0);
  const [availableqty, setAvailableQty] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [images, setImages] = useState([]);
  const [productdescription, setProductDescription] = useState("");
  const [image, setImage] = useState(null);
  const [gst, setGst] = useState("");
  const [selectedItem, setSelectedItem] = useState("");
  // const [gstvalue, setGstValue] = useState('');
  const [formstyle, setFormStyle] = useState({ right: "-100%" });

  const dispatch = useDispatch();
  // const products = useSelector((state) => state.product.products);
  const items = useSelector((state) => state.item.items);

  //Ref section start

  const formRef = useRef();

  const productCategoryRef = useRef(null);
  const productnameRef = useRef(null);
  const producthsnRef = useRef(null);
  const productcodeRef = useRef(null);
  const gstRef = useRef(null);
  const imageRef = useRef(null);
  const valuesRef = useRef(null);
  const productdescriptionRef = useRef(null);
  const keywordRef = useRef(null);
  const productimageRef = useRef(null);
  const productRef = useRef(null);
  const unitRef = useRef(null);
  const salepriceRef = useRef(null);
  const mrppriceRef = useRef(null);
  const totalqtyRef = useRef(null);
  const availableqtyRef = useRef(null);
  const discountRef = useRef(null);
  const imagesRef = useRef(null);
  const btnRef = useRef(null);
  const submitbtn1Ref = useRef(null);
  const submitbtn2Ref = useRef(null);

  //Ref section ends

  const handleformdisplay = () => {
    // Slide the form back to -600px first
    setFormStyle({ right: "-100%"});

    // After a brief delay (you can adjust the delay as needed), set display to 'none'
    setTimeout(() => {
      setFormStyle({ right: "-100%"});
    }, 800); // Adjust the delay as needed (500ms in this example)
  };

  const handlebtn = () => {
    setItemForm(false);
    setItemTable(false);
    setProductTable(true);
    setForm(true);
    setContwidth(true);
    setFormStyle({ right: "0" });
  };

  const handleitembtn = () => {
    setForm(false);
    setProductTable(false);
    setItemTable(true);
    setItemForm(true);
    setContwidth(true);
    setFormStyle({ right: "0" });
  };

  const handlebox = () => setBox(true);

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  const handleAddClick = (e) => {
    e.preventDefault();
    setValues([...values, text]);
    setText("");
  };

  // const options = [
  //   { value: "Electronics", label: "Electronics", name: "Electronics" },
  //   { value: "Grocery", label: "Grocery", name: "Grocery" },
  //   { value: "HomeItems", label: "Home Items", name: "HomeItems" },
  // ];

  // const unitoptions = [
  //   { value: "Pcs", label: "Pcs", name: "Pcs" },
  //   { value: "Kg", label: "Kg", name: "Kg" },
  //   { value: "Kgs", label: "Kgs", name: "Kgs" },
  //   { value: "LItre", label: "Litre", name: "Litre" },
  // ];

  const handledata = (e) => {
    const selectedOption = e.target.value;
    setSelectedOption(selectedOption);
    setProductCategory(selectedOption);
    console.log(selectedOption);
    productnameRef.current.focus();
  };

  const handleitembox = (event) => {
    setProductname(event.target.value);
    if (event.target.value === "showInput") {
      setItembox(true);
    } else {
      setItembox(false);
    }
  };

  // product fetch api start ***************

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(PRODUCTLIST_API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "view" }),
      });
      const responseData = await response.json();

      if (
        responseData &&
        responseData.data &&
        Array.isArray(responseData.data) &&
        responseData.data.length > 0
      ) {
        for (let i = 0; i < responseData.data.length; i++) {
          console.log(responseData.data);
          setProductData(responseData.data);
          console.log(productData, "this is product data");
        }
      } else {
        console.error("Error: Invalid data structure");
      }
    }
    fetchData();
  }, [PRODUCTLIST_API, setProductData]);

  // product fetch api end ******************

  // caterogy fetch api start ***********

  useEffect(() => {
    async function fetchCategoryData() {
      const response = await fetch(CATEGORYLIST_API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "view" }),
      });
      const responseData = await response.json();

      if (
        responseData &&
        responseData.data &&
        Array.isArray(responseData.data) &&
        responseData.data.length > 0
      ) {
        for (let i = 0; i < responseData.data.length; i++) {
          console.log(responseData.data);
          setOptions(responseData.data);
          console.log(productData, "this is category data");
        }
      } else {
        console.error("Error: Invalid data structure");
      }
    }
    fetchCategoryData();
  }, [CATEGORYLIST_API, setOptions]);

  //category fetch api end ****************

  //unit fetch api start ****************

  useEffect(() => {
    async function fetchUnitData() {
      const response = await fetch(UNITLIST_API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "view" }),
      });
      const responseData = await response.json();

      if (
        responseData &&
        responseData.data &&
        Array.isArray(responseData.data) &&
        responseData.data.length > 0
      ) {
        for (let i = 0; i < responseData.data.length; i++) {
          console.log(responseData.data);
          setUnitOptions(responseData.data);
          console.log(unitOptions, "this is unit data");
        }
      } else {
        console.error("Error: Invalid data structure");
      }
    }
    fetchUnitData();
  }, [UNITLIST_API, setUnitOptions]);

  //unit

  // const handleproductsubmitform = (event) => {
  //   event.preventDefault();
  //   const dataas = dispatch(
  //     addProduct({
  //       productCategory,
  //       productname,
  //       producthsn,
  //       productcode,
  //       gst,
  //       productdescription,
  //       values,
  //     })
  //   );

  //   console.log(dataas.payload);

  //   setSelectedOption("");
  //   setProductname("");
  //   setProducthsn("");
  //   setProductcode("");
  //   setGst("");
  //   setProductDescription("");
  //   setValues("");

  //   formRef.current.reset();
  // };

  // const handleitemsubmitform = (e) => {
  //   e.preventDefault();

  //   const itemdatas = dispatch(
  //     addItem({
  //       product,
  //       unit,
  //       saleprice,
  //       mrpprice,
  //       totalqty,
  //       availableqty,
  //       discount,
  //       gst,
  //       images,
  //     })
  //   );

  //   console.log(itemdatas.payload);

  //   setSelectedItem("");
  //   setUnit("");
  //   setSalePrice("");
  //   setMrpPrice("");
  //   setTotalQty("");
  //   setAvailableQty("");
  //   setDiscount("");
  //   setGst("");
  //   setImages("");
  //   formRef.current.reset();
  // };

  function handleKeyPress(event, inputRef) {
    if (event.key === "Enter") {
      event.preventDefault();
      inputRef.current.focus();
      console.log(inputRef.current.value);
    }
  }

  const handledelete = (index) => {
    const updatedFormData = [...productformData];
    updatedFormData.splice(index, 1);
    setProductFormData(updatedFormData);
    localStorage.setItem("productformData", JSON.stringify(updatedFormData));
  };

  const handledeleteitem = (index) => {
    const updateditemsData = [...itemformData];
    updateditemsData.splice(index, 1);
    setItemFormData(updateditemsData);
    localStorage.setItem("itemformData", JSON.stringify(updateditemsData));
  };

  useEffect((id) => {
    const data = localStorage.getItem("productformData", id);
    if (data) {
      setProductFormData(JSON.parse(data));
    }
  }, []);

  const hidecard = () => {
    setCards(true);
  };

  // useEffect(() => {
  //   fetch("http://ecommerce.techiecy.com/inventory/products/", {
  //     method: "POST",
  //   })
  //     .then((res) => res.json())
  //     .then((data) => setData(data.data));
  //   console.log(data);
  // }, []);

  const handleItemChange = (event) => {
    setProduct(event.target.value);
    const selectedItem = event.target.value;
    setSelectedItem(selectedItem);

    const selectedGst = productData.find(
      (item) => item.productname === selectedItem
    ).gst;
    setGst(selectedGst);
    unitRef.current.focus();
  };

  const handleunit = (e) => {
    setUnit(e.target.value);
    salepriceRef.current.focus();
  };

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <div className="container-fluid pro-topcont">
        <div
          className="container-fluid pro-leftsection"
          style={{ transition: "2s ease" }}
        >
          <div className="container-fluid mt-5">
            <div
              className="row d-flex shadow-sm"
              style={{
                background: "#fff",
                padding: "10px",
                width: "100%",
                justifyContent: "space-between",
                marginLeft: "0px",
              }}
            >
              <div className="col-md-6 col-sm-6">
                <div className="row d-flex">
                  <div className="col-md-6 col-sm-6">
                    <p
                      className="mt-3"
                      style={{
                        fontStyle: "normal",
                        fontWeight: "600",
                        fontSize: "15px",
                        color: "rgb(70, 68, 68)",
                      }}
                    >
                      Total Products :{" "}
                      <span style={{ fontWeight: "bold" }}> 5</span>
                    </p>
                  </div>

                  <div className="col-md-6 col-sm-6">
                    <p
                      className="mt-3"
                      style={{
                        fontStyle: "normal",
                        fontWeight: "600",
                        fontSize: "15px",
                        color: "rgb(70, 68, 68)",
                      }}
                    >
                      Total Items :{" "}
                      <span style={{ fontWeight: "bold" }}> 5</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className=" col-md-4 col-sm-4">
                <div className="row d-flex">
                  <div
                    className="col-md-6 col-sm-6"
                    style={{ display: "flex", justifyContent: "end" }}
                  >
                    <button
                      className="btn btn-sm btn-primary  buttons"
                      onClick={handlebtn}
                      style={{ marginTop: "9px" }}
                    >
                      Add Product
                    </button>
                  </div>

                  <div
                    className="col-md-6 col-sm-6"
                    style={{ display: "flex", justifyContent: "end" }}
                  >
                    <button
                      className="btn btn-sm btn-primary  buttons"
                      onClick={handleitembtn}
                      style={{ marginTop: "9px" }}
                    >
                      Add Item
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="container-fluid mt-3  table-responsive"
            style={{
              padding: "15px",
              // height: "75vh",
              overflowY: "scroll",
            }}
          >
            <div
              className="card main-card"
              style={{
                background: "#fff",
                height: "70vh",
                position: "relative",
              }}
            >
              <div
                className="card-header card-header-p"
                style={{
                  padding: "20px 30px",
                  border: "0px",
                  background: "#e4e4e4",
                }}
              >
                <h6
                  className="cb-font"
                  style={{ display: producttable ? "block" : "none" }}
                >
                  Products
                </h6>
                <h6
                  className="cb-font"
                  style={{ display: itemtable ? "block" : "none" }}
                >
                  Items
                </h6>
              </div>
              <div className="card-body py-0 px-0">
                {productData ? (
                  <table
                    className="table table-hover table-striped table-bordered table-responsive mt-0"
                    style={{
                      width: "100%",
                      display: producttable ? "inline-table" : "none",
                      borderRadius: "0px",
                    }}
                  >
                    <thead>
                      <tr>
                        <th scope="col">SN</th>
                        {/* <th scope="col">Image</th> */}
                        <th scope="col">Category</th>
                        <th scope="col">Name</th>
                        <th scope="col">HSN</th>
                        <th scope="col">Product Code</th>
                        <th scope="col">Gst %</th>
                        {/* <th scope="col">Description</th> */}
                        {/* <th scope="col">Keywords</th> */}
                        <th scope="col">Rating</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>

                    <tbody>
                      {Array.isArray(productData) &&
                        productData.map((items, index) => (
                          <tr key={index}>
                            <td>{index + 1}</td>
                            {/* <td>
                      <img src={items.image} alt={items.productname} style={{maxWidth:"100px"}} />
                    </td> */}
                            <td>{items.category}</td>
                            <td>{items.name}</td>
                            <td>{items.hsn}</td>
                            <td>{items.code}</td>
                            <td>{items.gst}</td>
                            {/* <td>{items.productdescription}</td> */}
                            {/* <td>{items.values}</td> */}
                            <td>5</td>
                            <td>
                              <div className="d-flex" style={{justifyContent:"space-evenly"}}>
                              <MdOutlineEditCalendar className="md-edit-btn" />

                              <MdOutlineDelete
                                className="md-del-btn"
                                onClick={() => handledelete(index)}
                              />
                              </div>
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                ) : (
                  <p>No data available.</p>
                )}

                <table
                  className="table table-bordered table-responsive table-striped mt-1 "
                  style={{
                    display: itemtable ? "inline-table" : "none",
                    width: "100%",
                  }}
                >
                  <thead>
                    <tr>
                      <th scope="col">SN</th>
                      <th scope="col">Product</th>
                      <th scope="col">Unit</th>
                      <th scope="col">Sale Price</th>
                      <th scope="col">MRP Price</th>
                      <th scope="col">Total Qty</th>
                      <th scope="col">Available Qty</th>
                      <th scope="col">Discount %</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>

                  <tbody>
                    {items?.map((itemdata, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{itemdata.product}</td>
                        <td>{itemdata.unit}</td>
                        <td>{itemdata.saleprice}</td>
                        <td>{itemdata.mrpprice}</td>
                        <td>{itemdata.totalqty}</td>
                        <td>{itemdata.availableqty}</td>
                        <td>{itemdata.discount}</td>

                        <td>
                              <div className="d-flex" style={{justifyContent:"space-evenly"}}>
                              <MdOutlineEditCalendar className="md-edit-btn" />

                              <MdOutlineDelete
                                className="md-del-btn"
                                onClick={() => handledeleteitem(index)}
                              />
                              </div>
                            </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid pro-rightsection" style={formstyle}>
          <form
            className="mt-5 p-4 shadow productform"
            style={{
              background: "#fff",
              borderRadius: "12px",
              display: form ? "block" : "none",
              transition: "2s ease !important",
              position: "relative",
            }}
            ref={formRef}
          >
            <MdCancel className="close-icon" onClick={handleformdisplay} />
            <p
              className="d-flex"
              style={{
                justifyContent: "center",
                fontSize: "18px",
                fontWeight: "600",
                color: "#111",
              }}
            >
              ADD PRODUCT
            </p>

            <div className="row mt-2">
              <div className="col">
                <div className="form-group">
                  <label className="pro-label">Category</label>
                  <select
                    id="productcategory"
                    name="productcategory"
                    className="form-control"
                    key={selectedOption}
                    value={selectedOption}
                    onChange={handledata}
                    ref={productCategoryRef}
                    style={{ fontSize: "13px" }}
                  >
                    <option selected={true}>
                      <p>--Select Category--</p>
                    </option>
                    {options.map((option) => (
                      <option
                        key={option.id}
                        value={option.name}
                        name={option.name}
                        style={{ fontSize: "12px" }}
                      >
                        {option.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="col">
                <div className="form-group">
                  <label className="pro-label">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="productname"
                    name="productname"
                    placeholder="Enter product name...."
                    style={{ fontSize: "13px" }}
                    value={productname}
                    onChange={(ev) => setProductname(ev.target.value)}
                    ref={productnameRef}
                    onKeyDown={(event) => handleKeyPress(event, producthsnRef)}
                  />
                </div>
              </div>
            </div>

            <div class="row mt-3">
              <div className="col">
                <div className="form-group">
                  <label className="pro-label">HSN</label>
                  <input
                    type="text"
                    className="form-control"
                    id="producthsn"
                    name="producthsn"
                    placeholder="Enter product HSN...."
                    value={producthsn}
                    style={{ fontSize: "13px" }}
                    onChange={(e) => setProducthsn(e.target.value)}
                    ref={producthsnRef}
                    onKeyDown={(event) => handleKeyPress(event, productcodeRef)}
                  />
                </div>
              </div>
              <div className="col">
                <div className="form-group">
                  <label className="pro-label">Product Code</label>
                  <input
                    type="text"
                    className="form-control"
                    id="productcode"
                    name="productcode"
                    value={productcode}
                    placeholder="Enter product code...."
                    style={{ fontSize: "13px" }}
                    onChange={(e) => setProductcode(e.target.value)}
                    ref={productcodeRef}
                    onKeyDown={(event) => handleKeyPress(event, gstRef)}
                  />
                </div>
              </div>
            </div>

            <div className="row mt-3">
              <div className="col">
                <div className="form-group">
                  <label className="pro-label">GST %</label>
                  <input
                    type="number"
                    className="form-control"
                    id="gst"
                    name="gst"
                    onChange={(e) => setGst(e.target.value)}
                    placeholder="Enter GST (in %)...."
                    style={{ fontSize: "13px" }}
                    title="GST"
                    value={gst}
                    ref={gstRef}
                    onKeyDown={(event) =>
                      handleKeyPress(event, productdescriptionRef)
                    }
                  />
                </div>
              </div>

              <div className="col">
                <div className="form-group">
                  <label className="pro-label">Product Description</label>
                  <input
                    type="text"
                    className="form-control"
                    id="Productdescription"
                    name="productDescription"
                    placeholder="Enter description...."
                    style={{ fontSize: "13px" }}
                    value={productdescription}
                    title="Description"
                    onChange={(e) => setProductDescription(e.target.value)}
                    ref={productdescriptionRef}
                    onKeyDown={(event) => handleKeyPress(event, keywordRef)}
                  />
                </div>
              </div>
            </div>

            <div className="row mt-3">
              <div className="col-md-6 col-sm-6">
                <div className="form-group">
                  <label className="pro-label">Keywords</label>
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
                    ref={keywordRef}
                    onKeyDown={(event) => handleKeyPress(event, btnRef)}
                    value={text}
                  />
                </div>
              </div>

              <div className="col-md-6 col-sm-6">
                <button
                  type="submit"
                  className="btn-sm mt-4 btn-secondary keyword-btn"
                  style={{ width: "100%" }}
                  onClick={handleAddClick}
                  ref={btnRef}
                  onKeyDown={(event) => handleKeyPress(event, imageRef)}
                >
                  Add
                </button>
              </div>
            </div>

            <div className="row mt-3">
              {/* <div className="col-md-6 col-sm-6">
                <div className="form-group">
                  <label className="pro-label">
                    Product Image
                  </label>
                  <input
                    type="file"
                    className="form-control"
                    id="image"
                    name="image"
                    onChange={(e) => setImage(e.target.files[0])}
                    ref={imageRef}
                    onKeyDown={(event) => handleKeyPress(event,valuesRef)}
                  />
                </div>
              </div> */}

              <div className="col-md-6 col-sm-6 mt-4">
                <input
                  type="text"
                  id="output"
                  className="form-control"
                  value={values}
                  ref={valuesRef}
                  onKeyDown={(event) => handleKeyPress(event, submitbtn1Ref)}
                  readonly
                />
              </div>
            </div>

            <button
              type="submit"
              className="btn buttons mt-4 shadow-lg"
              style={{ width: "100%" }}
              ref={submitbtn1Ref}
              // onKeyDown={handleproductsubmitform}
              // onClick={handleproductsubmitform}
            >
              Add
            </button>
          </form>

          <form
            className="mt-5 p-4 shadow"
            style={{
              background: "#fff",
              borderRadius: "12px",
              display: itemform ? "block" : "none",
            }}
            ref={formRef}
          >
            <MdCancel className="close-icon1" onClick={handleformdisplay} />
            <p
              className="d-flex"
              style={{
                justifyContent: "center",
                fontStyle: "normal",
                fontWeight: "600",
                fontSize: "18px",
                color: "#111",
              }}
            >
              ADD ITEM
            </p>

            <div className="row mt-4">
              <div className="col-md-6 col-sm-6">
                <div className="form-group">
                  <label className="pro-label">Product</label>

                  <select
                    id="product"
                    name="product"
                    className="form-control"
                    value={selectedItem}
                    // onChange={(e) => setProduct(e.target.value)}
                    onChange={handleItemChange}
                    ref={productRef}
                    style={{ fontSize: "13px" }}
                  >
                    <option selected={true}>--Select Product--</option>
                    {productData.map((option) => (
                      <option
                        key={option.productname}
                        value={option.productname}
                        style={{ fontSize: "12px" }}
                      >
                        {option.productname}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="col-md-6 col-sm-6">
                <div className="form-group d-grid">
                  <label className="pro-label">Unit</label>

                  <select
                    id="unit"
                    name="unit"
                    title="Unit Type"
                    className="form-control"
                    // onChange={(e) => setUnit(e.target.value)}
                    onChange={handleunit}
                    ref={unitRef}
                    style={{ fontSize: "13px", marginTop: "5px" }}
                  >
                    <option selected={true}>--Select unit--</option>
                    {Array.isArray(unitOptions) &&
                      unitOptions.map((option) => (
                        <option
                          key={option.id}
                          value={option.name}
                          name={option.name}
                          style={{ fontSize: "12px" }}
                        >
                          {option.name}
                        </option>
                      ))}
                  </select>
                </div>
              </div>

              <div className="col" style={{ display: "none" }}>
                <div className="form-group">
                  <label className="pro-label">GST %</label>
                  <input
                    type="number"
                    className="form-control"
                    value={gst}
                    readOnly
                  />
                </div>
              </div>
            </div>

            <div className="row mt-3">
              <div className="col-md-6 col-xl-6 col-sm-4">
                <div className="form-group">
                  <label className="pro-label">Sale Price</label>
                  <input
                    type="number"
                    className="form-control"
                    id="sale_price"
                    name="sale_price"
                    placeholder="Enter Sale Price...."
                    onChange={(ev) => setSalePrice(Number(ev.target.value))}
                    ref={salepriceRef}
                    onKeyDown={(event) => handleKeyPress(event, mrppriceRef)}
                    style={{ fontSize: "13px" }}
                  />
                </div>
              </div>

              <div className="col-md-6 col-sm-4">
                <div className="form-group">
                  <label className="pro-label">MRP Price</label>
                  <input
                    type="number"
                    className="form-control"
                    id="mrp_price"
                    name="mrp_price"
                    placeholder="Enter MRP Price...."
                    onChange={(ev) => setMrpPrice(Number(ev.target.value))}
                    ref={mrppriceRef}
                    onKeyDown={(event) => handleKeyPress(event, totalqtyRef)}
                    style={{ fontSize: "13px" }}
                  />
                </div>
              </div>

              <div className="col-md-12 col-sm-4 mt-3">
                <div className="form-group">
                  <label className="pro-label">Total Qty</label>
                  <input
                    type="number"
                    className="form-control"
                    id="total_qty"
                    name="total_qty"
                    placeholder="Total Qty...."
                    onChange={(ev) => setTotalQty(Number(ev.target.value))}
                    ref={totalqtyRef}
                    onKeyDown={(event) =>
                      handleKeyPress(event, availableqtyRef)
                    }
                    style={{ fontSize: "13px" }}
                  />
                </div>
              </div>
            </div>

            <div className="row mt-3">
              <div className="col-md-6 col-sm-4">
                <div className="form-group">
                  <label className="pro-label">Available Qty</label>
                  <input
                    className="form-control"
                    id="available_Qty"
                    name="available_Qty"
                    onChange={(ev) => setAvailableQty(Number(ev.target.value))}
                    ref={availableqtyRef}
                    onKeyDown={(event) => handleKeyPress(event, discountRef)}
                    placeholder="Enter Qty"
                    style={{ fontSize: "13px" }}
                    title="Available Qty"
                  />
                </div>
              </div>

              <div className="col-md-6 col-sm-4">
                <div className="form-group">
                  <label className="pro-label">Discount %</label>
                  <input
                    type="number"
                    className="form-control"
                    id="discount_no"
                    name="discount_no"
                    onChange={(e) => setDiscount(e.target.value)}
                    ref={discountRef}
                    onKeyDown={(event) => handleKeyPress(event, imagesRef)}
                    placeholder="Enter Discount (in %)"
                    style={{ fontSize: "13px" }}
                  />
                </div>
              </div>
              {/* <div className="col-md-12 col-sm-6 mt-3">
                <div className="form-group">
                  <label className="pro-label">
                    Product Images
                  </label>
                  <input
                    multiple
                    type="file"
                    className="form-control"
                    id="productimages"
                    name="productimages[]"
                    ref={imagesRef}
                    onKeyDown={(event) => handleKeyPress(event,submitbtn2Ref)}
       
                  />
                </div>
              </div> */}
            </div>

            <button
              type="submit"
              className="btn buttons mt-4"
              style={{ width: "100%" }}
              ref={submitbtn2Ref}
              // onClick={handleitemsubmitform}
              // onKeyDown={handleitemsubmitform}
            >
              Add
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
