import React, { useState} from "react";
import Sidebar from "./Sidebar";
import { useSelector } from "react-redux";

export default function Invoice() {
  const rowadds = Array.from({length: 100}, (_, index) => index);

   const products = useSelector((state) => state.product.products);
  const items = useSelector((state) => state.item.items);
  // const [rows, setRows] = useState([
  //   {
  //     item: "",
  //     quantity: 0,
  //     unit: "",
  //     gst: 0,
  //     price: 0,
  //     amount: 0,
  //   },
  // ]);

  // const addRow = () => {
  //   setRows((prevRows) => [
  //     ...prevRows,
  //     {
  //       item: "",
  //       quantity: 0,
  //       unit: "",
  //       gst: 0,
  //       price: 0,
  //       amount: 0,
  //     },
  //   ]);
  // };


  const printDiv = () => {
    window.print();

  };

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <div className="container-fluid mt-2 invoice-topcont">
        <div
          className="container-fluid mt-1 p-3"
          style={{ background: "#fff" }}
        >
          <p
            style={{
              textAlign: "center",
              fontSize: "20px",
              fontWeight: "600",
              padding: "20px",
            }}
          >
            Invoice
          </p>

          <div
            className="container mt-1"
            style={{ display: "flex", justifyContent: "end" }}
          >
            <button className="btn btn-md rowadd-btn" onClick={printDiv}>
              Print
            </button>
          </div>
          <div
            className="container p-2 mt-3 topcontainer-invoice"
            style={{ border: "1px solid lightgrey" }}
          >
            <div className="row d-flex invoicetop">
              <div
                className="col-md-3 col-sm-6 col-lg-3 d-flex mt-3"
                style={{ height: "40px" }}
              >
                <label
                  style={{ fontWeight: "600", fontSize: "1rem" }}
                  className="mx-2 mt-2"
                >
                  Date
                </label>
                <input
                  type="date"
                  name="date"
                  className="form-control invoice-date"
                  placeholder="Select Date..."
                />
              </div>
              <div
                className="col-md-4 col-sm-6 col-lg-4 d-flex mt-3"
                style={{ height: "40px" }}
              >
                <label
                  style={{ fontWeight: "600", fontSize: "1rem" }}
                  className="mx-2"
                >
                  Invoice Number
                </label>
                <input
                  type="text"
                  name="invoice-num"
                  className="form-control invoice-number"
                  placeholder="Invoice number..."
                />
              </div>
              <div
                className="col-md-4 col-sm-6 col-lg-4 d-flex mt-3"
                style={{ height: "40px" }}
              >
                <label
                  style={{ fontWeight: "600", fontSize: "1rem" }}
                  className="mx-2"
                >
                  Customer Name
                </label>
                <input
                  type="text"
                  name="customer-name"
                  className="form-control invoice-customer"
                  placeholder="Customer Name..."
                />
              </div>
            </div>

            {/* <div
              className="container-fluid mt-5 invoice-table-container"
              style={{ display: "flex", justifyContent: "end" }}
            >
              <button className="btn btn-md rowadd-btn" onClick={addRow}>
                Add Row
              </button>
            </div> */}

            <div
              className="table-responsive p-3 mt-2 d-flex"
              style={{
                justifyContent: "center",
                border: "1px solid lightgrey",
                height:"393px"
              }}
            >

              <table style={{ borderSpacing: "0", overflowY: "scroll" }}>
                <thead>
                  <tr>
                    <th className="invoice-th">S.N.</th>
                    <th className="invoice-th">Item</th>
                    <th className="invoice-th">Quantity</th>
                    <th className="invoice-th">Unit</th>
                    <th className="invoice-th">GST</th>
                    <th className="invoice-th">Price</th>
                    <th className="invoice-th">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  
                  {/* {rows.map((row, index) => ( */}
                  {rowadds.map((row, index) => (
                    <tr key={index}>
                      <td
                        style={{ textAlign: "right", fontWeight: "bold" }}
                        className="invoice-td text-center"
                      >
                        {index + 1}
                      </td>
                      <td className="invoice-td invoice-td-item">
                        <select
                          // name={`item-${index}`}
                          name="item"
                          className="invoice-input form-control invoice-input-item text-center"
                          style={{width:"200px"}}
                        >
                          <option value=""></option>
                          <option value="item1">item1</option>
                          <option value="item2">Item2</option>
                          <option value="item3">Item3</option>
                        </select>
                      </td>
                      <td className="invoice-td">
                        <input
                          type="number"
                          // name={`quantity-${index}`}
                          name="quantity"
                          className="invoice-input invoice-input-qty text-center"
                        />
                      </td>
                      <td className="invoice-td">
                        <input
                          type="text"
                          // name={`unit-${index}`}
                          name="unit"
                          className="invoice-input form-control invoice-input-unit text-center"
                        />
                      </td>
                      <td className="invoice-td">
                        <input
                          type="number"
                          // name={`gst-${index}`}
                          name="gst"
                          className="invoice-input form-control invoice-input-gst text-center"
                        />
                      </td>
                      <td className="invoice-td">
                        <input
                          type="number"
                          // name={`price-${index}`}
                          name="price"
                          className="invoice-input form-control invoice-input-price text-center"
                        />
                      </td>
                      <td className="invoice-td">
                        <input
                          type="number"
                          // name={`amount-${index}`}
                          name="amount"
                          className="invoice-input form-control invoice-input-amount text-center"
                        />
                      </td>
                    </tr>
                 
                  ))}
                  
                </tbody>
              </table>
              
            </div>
          </div>
          <div className="container d-flex mx-4" style={{justifyContent:"flex-end"}}>
             
                    <label
                      className="total-amount-text mt-2"
                      style={{ fontWeight: "600", fontSize: "1rem" }}
                    >
                      Total Amount
                    </label>
                    <div className="total-amount-input invoice-td">
                      <input
                        type="number"
                        name="total-amount"
                        className="invoice-input form-control invoice-input-amount text-center"  
                      />
                    </div>
              </div>
        </div>
      </div>
    </div>
  );
}
