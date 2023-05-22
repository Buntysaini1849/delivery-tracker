import React, { useState, useRef } from "react";
import Sidebar from "./Sidebar";
import TableRow from "./Tablerow";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function Invoice() {
  const [totalamount, setTotalAmount] = useState(0);
  const [selectedDate, setSelectedDate] = useState(null);

  const invoiceRef = useRef();

  const customerRef = useRef(null);
  const invoicenumRef = useRef(null);
  const dateRef = useRef(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleDataFromChild = (data) => {
    setTotalAmount(data);
  };

  // const rows = Array.from({ length: 50 }, (_, index) => {
  //   return <TableRow index={index} id={index + 1}  sendDataToParent={handleDataFromChild} rows={rows}/>;
  // });

  const rows = [];
  for (let i = 0; i < 7; i++) {
    rows.push(
      <TableRow
        index={i}
        id={i + 1}
        sendDataToParent={handleDataFromChild}
        rows={rows}
      />
    );
  }

  function handleKeyPress(event) {
    if (event.keyCode === 13 && !event.shiftKey) {
      event.preventDefault();
      if (event.target === customerRef.current) {
        invoicenumRef.current.focus();
      } else if (event.target === invoicenumRef.current) {
        dateRef.current.setFocus();
      }
    }
  }

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
          <div
            className="container-fluid d-flex"
            style={{ justifyContent: "flex-end" }}
          >
            <div
              className="box"
              style={{ width: "100%", display: "flex", justifyContent: "end" }}
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
            </div>

            <div
              className="box mt-3"
              style={{
                width: "100%",
                height: "40px",
                display: "flex",
                justifyContent: "end",
              }}
            >
              <button
                type="button"
                className="btn btn-md rowadd-btn"
                data-bs-toggle="modal"
                data-bs-target="#exampleModalCenter"
              >
                Add Customer
              </button>
            </div>
          </div>

          <div
            className="container mt-5"
            style={{ display: "flex", justifyContent: "end" }}
          >
            <button className="btn btn-md rowadd-btn" onClick={printDiv}>
              Print invoice
            </button>
          </div>
          <div
            className="container p-2 mt-3 topcontainer-invoice"
            style={{ border: "1px solid lightgrey" }}
          >
            <div className="row d-flex invoicetop">
              <div
                className="col-md-4 col-sm-6 col-lg-4 d-flex mt-3"
                style={{ height: "40px" }}
                ref={invoiceRef}
              >
                <label
                  style={{ fontWeight: "600", fontSize: "1rem" }}
                  className="mx-2"
                >
                  Customer Name
                </label>
                <input
                  type="search"
                  name="customer-name"
                  className="form-control invoice-customer"
                  placeholder="Customer Name..."
                  ref={customerRef}
                  onKeyDown={handleKeyPress}
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
                <label class="input-group">
                  <input
                    type="text"
                    name="invoice-num"
                    className="form-control invoice-number"
                    placeholder="Invoice number..."
                    ref={invoicenumRef}
                    onKeyDown={handleKeyPress}
                  />
                </label>
              </div>
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

                <DatePicker
                  selected={selectedDate}
                  onChange={handleDateChange}
                  name="date"
                  id="datepicker"
                  className="form-control invoice-date"
                  placeholder="Select Date..."
                  ref={dateRef}
                  onKeyDown={handleKeyPress}
                />

                {/* <input
                  type="date"
                  name="date"
                  id="datepicker"
                  className="form-control invoice-date"
                  placeholder="Select Date..."
                  onClick={handledatePick}
                  ref={dateRef}
                /> */}
              </div>
            </div>

            <div
              className="table-responsive p-3 mt-2 d-flex"
              style={{
                justifyContent: "center",
                border: "1px solid lightgrey",
                height: "350px",
              }}
            >
              <table
                style={{
                  borderSpacing: "0",
                  overflowY: "scroll",
                  width: "100%",
                }}
                ref={invoiceRef}
              >
                <thead>
                  <tr>
                    <th className="invoice-th">S.N.</th>
                    <th className="invoice-th">Item</th>
                    <th className="invoice-th">Quantity</th>
                    <th className="invoice-th">Unit</th>
                    <th className="invoice-th">GST %</th>
                    <th className="invoice-th">Price</th>
                    <th className="invoice-th">Amount</th>
                  </tr>
                </thead>

                <tbody>{rows}</tbody>
              </table>
            </div>
          </div>
          <div
            className="container d-flex mx-4"
            style={{ justifyContent: "flex-end" }}
          >
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
                value={totalamount}
                className="invoice-input form-control invoice-input-amount text-center"
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="exampleModalCenter"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">
                Add Customer
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="container-fluid">
              <form>
              <div class="form-group">
                <div class="col">
                  <input type="text" class="form-control" placeholder="City" />
                </div>
                <div class="col">
                  <input type="text" class="form-control" placeholder="State" />
                </div>
                <div class="col">
                  <input type="text" class="form-control" placeholder="Zip" />
                </div>
              </div>
              </form>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
