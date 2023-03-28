import React, { useState} from "react";


export default function Form(props) {

  const [form, setForm] = useState(false);
  const [qty, setQty] = useState(0);
  const [price, setPrice] = useState(0);
  

  const gst_rate = 0.02
  const final_gst = qty*price*gst_rate

 
  const handlesubmit = (e) => {
    e.preventDefault();

  };


   const handlebtn = () => setForm(true);



  return (
    <div>
    
      

      <div className="container mt-5">
      <form
                className="mt-5 p-4"
                style={{
                  background: "#fff",
                  borderRadius: "20px",
                  
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

                <div className="form-group mt-1">
                  <label style={{ fontSize: "14px", fontFamily: " verdana" }}>
                    Order Id
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="order_id"
                    placeholder="Order Id...."
                    style={{ fontSize: "13px" }}
                  />
                </div>

                <div className="form-group mt-2">
                  <label style={{ fontSize: "14px", fontFamily: " verdana" }}>
                    Customer Name
                  </label>
                  <select name="customer_name" id="customer_name" placeholder="Select customer..." className="form-control">
                        <option value="" style={{ fontSize: "13px" }}>Dinesh</option>
                        <option value="" style={{ fontSize: "13px" }}>Bunty</option>
                      </select>
                </div>

                <div className="form-group mt-2">
                  <label style={{ fontSize: "14px", fontFamily: " verdana" }}>
                    Item
                  </label>
                  <select name="item" id="item" placeholder="Select item..." className="form-control">
                        <option value="" style={{ fontSize: "13px" }}>Bucket Set</option>
                        <option value="" style={{ fontSize: "13px" }}>AB Wheel Roller</option>
                      </select>
                </div>

                <div className="form-group mt-2">
                  <label style={{ fontSize: "14px", fontFamily: " verdana" }}>
                    Quantity
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    onChange ={(ev) => setQty(Number(ev.target.value))}
                    id="product_qty"
                    placeholder="Enter quantity...."
                    style={{ fontSize: "13px" }}
                  />
                </div>
 
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

                <div className="form-group mt-2">
                  <label style={{ fontSize: "14px", fontFamily: " verdana" }}>
                    GST %
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
