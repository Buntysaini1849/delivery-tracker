import React, { useState, useRef } from "react";
import Sidebar from "./Sidebar";
import { AiFillDelete } from "react-icons/ai";

export default function Invoice() {
  const [rows, setRows] = useState([
    {
      item: "",
      quantity: 0,
      unit: "",
      gst: 0,
      price: 0,
      amount: 0,
    },
  ]);

  const addRow = () => {
    setRows((prevRows) => [
      ...prevRows,
      {
        item: "",
        quantity: 0,
        unit: "",
        gst: 0,
        price: 0,
        amount: 0,
      },
    ]);
  };

  const divRef = useRef(null);

  const printDiv = () => {
    const printContent = divRef.current.innerHTML;
    const originalContent = document.body.innerHTML;

    document.body.innerHTML = printContent;
    window.print();
    document.body.innerHTML = originalContent;
  };

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <div className="container-fluid mt-2">
        <div
          className="container-fluid mt-2"
          style={{ background: "#fff" }}
          ref={divRef}
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
            className="container mt-3"
            style={{ display: "flex", justifyContent: "end" }}
          >
            <button className="btn btn-md rowadd-btn" onClick={printDiv}>
              Print
            </button>
          </div>
          <div
            className="container p-2 mt-3"
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
                  className="form-control"
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
                  className="form-control"
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
                  className="form-control"
                  placeholder="Customer Name..."
                />
              </div>
            </div>

            <div
              className="container-fluid mt-5"
              style={{ display: "flex", justifyContent: "end" }}
            >
              <button className="btn btn-md rowadd-btn" onClick={addRow}>
                Add Row
              </button>
            </div>

            <div
              className="table-responsive p-2 mt-2"
              style={{
                justifyContent: "center",
                border: "1px solid lightgrey",
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
                  {rows.map((row, index) => (
                    <tr key={index}>
                      <td
                        style={{ textAlign: "right", fontWeight: "bold" }}
                        className="invoice-td"
                      >
                        {index + 1}
                      </td>
                      <td className="invoice-td invoice-td-item">
                        <select
                          name={`item-${index}`}
                          className="invoice-input form-control"
                        >
                          <option value="item1">item1</option>
                          <option value="item2">Item 2</option>
                          <option value="item3">Item 3</option>
                        </select>
                      </td>
                      <td className="invoice-td">
                        <input
                          type="number"
                          name={`quantity-${index}`}
                          className="invoice-input invoice-input-qty"
                        />
                      </td>
                      <td className="invoice-td">
                        <input
                          type="text"
                          name={`unit-${index}`}
                          className="invoice-input form-control"
                        />
                      </td>
                      <td className="invoice-td">
                        <input
                          type="number"
                          name={`gst-${index}`}
                          className="invoice-input form-control"
                        />
                      </td>
                      <td className="invoice-td">
                        <input
                          type="number"
                          name={`price-${index}`}
                          className="invoice-input form-control"
                        />
                      </td>
                      <td className="invoice-td">
                        <input
                          type="number"
                          name={`amount-${index}`}
                          className="invoice-input form-control invoice-input-amount"
                          disabled
                        />
                      </td>
                    </tr>
                  ))}
                  <tr>
                    <td
                      className="total-amount-text"
                      colspan="6"
                      style={{ fontWeight: "600", fontSize: "1rem" }}
                    >
                      Total Amount
                    </td>
                    <td className="total-amount-input invoice-td">
                      <input
                        type="number"
                        name="total-amount"
                        className="invoice-input form-control invoice-input-amount"
                        disabled
                      />
                    </td>
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
