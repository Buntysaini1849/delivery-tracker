import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import { useMemo } from "react";
import { addProduct, addItem } from ".././state/actions/action";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

export default function Products() {
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
  const [productimage, setProductImage] = useState([]);
  const [selectedProductName, setSelectedProductName] = useState("");
  const [gst, setGst] = useState('');
  const [itemgst, setItemGst] = useState('');
  const [itemproduct, setItemProduct] = useState('');



  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  const items = useSelector((state) => state.item.items);

  const handlebtn = () => {
    setItemForm(false);
    setItemTable(false);
    setProductTable(true);
    setForm(true);
    setContwidth(true);
  };

  const handleitembtn = () => {
    setForm(false);
    setProductTable(false);
    setItemTable(true);
    setItemForm(true);
    setContwidth(true);
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

  const options = [
    { value: "Electronics", label: "Electronics", name: "Electronics" },
    { value: "Grocery", label: "Grocery", name: "Grocery" },
    { value: "HomeItems", label: "Home Items", name: "HomeItems" },
  ];

  const unitoptions = [
    { value: "Pcs", label: "Pcs", name: "Pcs" },
    { value: "Kg", label: "Kg", name: "Kg" },
    { value: "Kgs", label: "Kgs", name: "Kgs" },
    { value: "LItre", label: "Litre", name: "Litre" },
  ];

  const handledata = (e) => {
    const selectedOption = e.target.value;
    setSelectedOption(selectedOption);
    setProductCategory(selectedOption);
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


  const handleproductsubmitform = (event) => {
    event.preventDefault();


    const dataas = dispatch(
      addProduct({
        productCategory,
        productname,
        producthsn,
        productcode,
        gst,
        productdescription,
        values,
      })
    );

    console.log(dataas.payload);


    setProductCategory("");
    setProductname("");
    setProducthsn("");
    setGst("");
    setProductDescription("");
    setValues("");
  };

  const handleitemsubmitform = (e) => {
    e.preventDefault();


    const itemdatas = dispatch(
      addItem({
        product,
        unit,
        saleprice,
        mrpprice,
        totalqty,
        availableqty,
        discount,
        images,
      })
    );

    console.log(itemdatas.payload);

    setProduct("");
    setUnit("");
    setSalePrice("");
    setMrpPrice("");
    setTotalQty("");
    setAvailableQty("");
    setDiscount("");
    setImages("");
  };

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

  useEffect(() => {
    fetch("http://ecommerce.techiecy.com/inventory/products/", {
      method: "POST",
    })
      .then((res) => res.json())
      .then((data) => setData(data.data));
    console.log(data);
  }, []);

  const handleProductChange = (event) => {
    const productname = event.target.value;
    setItemProduct(productname);
    const selectedProduct = products.find(
      (product) => product.productname === productname
    );
    if (selectedProduct) {
      setSelectedProductName(selectedProduct);
      setItemGst(selectedProduct.itemgst);
    } else {
      setSelectedProductName("");
      setItemGst("");
    }
    
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
                justifyContent: "space-between",
              }}
            >
              <div className="col-md-6 col-sm-6">
                <div className="row d-flex">
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

                  <div className="col-md-6 col-sm-6">
                    <p
                      className="mt-3"
                      style={{
                        fontStyle: "normal",
                        fontWeight: "500",
                        fontSize: "15px",
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
                      className="btn btn-sm btn-primary"
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
                      className="btn btn-sm btn-primary"
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
            <table
              className="table table-hover mt-1 "
              style={{
                width: "100%",
                display: producttable ? "block" : "none",
              }}
            >
              <thead>
                <tr>
                  <th scope="col">SN</th>
                  <th scope="col">Image</th>
                  <th scope="col">Product Category</th>
                  <th scope="col">Product Name</th>
                  <th scope="col">Product HSN</th>
                  <th scope="col">Product Code</th>
                  <th scope="col">Gst %</th>
                  <th scope="col">Description</th>
                  <th scope="col">Keywords</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>

              <tbody>
                {products?.map((items, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>
                      <img src={items.file} />
                    </td>
                    <td>{items.productCategory}</td>
                    <td>{items.productname}</td>
                    <td>{items.producthsn}</td>
                    <td>{items.productcode}</td>
                    <td>{items.gst}</td>
                    <td>{items.productdescription}</td>
                    <td>{items.values}</td>
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
                        onClick={() => handledelete(index)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <table
              className="table table-hover mt-1 "
              style={{ display: itemtable ? "block" : "none", width: "100%" }}
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
                        onClick={() => handledeleteitem(index)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div
          className="container-fluid pro-rightsection"
          style={{
            width: form || itemform ? "40%" : "0px",
            transition: "3s ease",
          }}
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
                    <option selected={true}>--Select Category--</option>
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
                    value={productname}
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
                    id="gst"
                    name="gst"
                    onChange={(e) => setGst(e.target.value)}
                    placeholder="Enter GST (in %)...."
                    style={{ fontSize: "13px" }}
                    title="GST"
                    value={gst}
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
              <div className="col-md-6 col-sm-6">
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

              <div className="col-md-6 col-sm-6">
                <button
                  type="submit"
                  className="btn btn-sm mt-4 keyword-btn"
                  style={{ width: "100%" }}
                  onClick={handleAddClick}
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
                    id="productimage"
                    name="productimage"
                    onChange={(e) => setProductImage(e.target.files[0])}
                  />
                </div>
              </div>

              <div className="col-md-6 col-sm-6 mt-4">
                <input
                  type="text"
                  id="output"
                  className="form-control"
                  value={values}
                  readonly
                />
              </div>
            </div>

            <button
              type="submit"
              className="btn btn-primary mt-4"
              style={{ width: "100%" }}
              onClick={handleproductsubmitform}
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
                  id="product"
                  name="product"
                  className="form-control"
                  value={itemproduct}
                  onChange={handleProductChange}
                  >
                    <option selected={true}>--Select Product--</option>
                    {products.map((option) => (
                      <option
                        key={option.productname}
                        value={option.productname}
                        style={{ fontSize: "12px" }}
                      >
                        {option.productname}
                      </option>
                    ))}
                    ,
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
                    <option selected={true}>--Select unit--</option>
                    {unitoptions.map((option) => (
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

              <div className="col" style={{display:"block"}}>
             
                <div className="form-group">
                  <label style={{ fontSize: "14px", fontFamily: "verdana" }}>
                    GST %
                  </label>
                  {selectedProductName && (
                  <input
                    type="number"
                    className="form-control"
                    value={itemgst}
                    readOnly

                  />
                  )}
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
                    onChange={(ev) => setSalePrice(Number(ev.target.value))}
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
                    onChange={(ev) => setMrpPrice(Number(ev.target.value))}
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
                    onChange={(ev) => setTotalQty(Number(ev.target.value))}
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
                    id="available_Qty"
                    name="available_Qty"
                    onChange={(ev) => setAvailableQty(Number(ev.target.value))}
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
                    id="discount_no"
                    name="discount_no"
                    onChange={(e) => setDiscount(e.target.value)}
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
                    name="productimages[]"
                  />
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="btn btn-primary mt-4"
              style={{ width: "100%" }}
              onClick={handleitemsubmitform}
            >
              Add
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
