import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Sidebar from "./Sidebar";

function OrderHistory() {
  const [orders, setOrders] = useState([
    {
      orderNo: 111,
      trackingNo: "ABCD123456",
      date: new Date("05-02-2023"),
      customerName: "Dinesh",
      amount: "₹500.00",
      paymentMode: "Cash on Delivery",
      totalItems: "5 items",
      deliveryBoy: "",
      selected: false,
    },
    {
      orderNo: 112,
      trackingNo: "EFGH789012",
      date: new Date("09-02-2023"),
      customerName: "Bunty",
      amount: "₹1000.00",
      paymentMode: "Credit Card",
      totalItems: "10 items",
      deliveryBoy: "",
      selected: false,
    },
  ]);

  const [deliveryBoys, setDeliveryBoys] = useState(["Amit", "Kunal", "Naveen"]);
  const [selectedOrders, setSelectedOrders] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modalOrder, setModalOrder] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  function handleDateChange(date) {
    setStartDate(date);
  }
  function handleDateChanges(date) {
    setEndDate(date);
  }

  const handleSelectOrder = (index) => {
    const newOrders = [...orders];
    newOrders[index].selected = !newOrders[index].selected;
    if (!newOrders[index].selected) {
      newOrders[index].deliveryBoy = "";
    }
    setOrders(newOrders);
    const selectedOrders = newOrders.filter((order) => order.selected);
    setSelectedOrders(selectedOrders);
  };

  const handleAssignDeliveryBoy = (deliveryBoy) => {
    const updatedOrders = selectedOrders.map((order) => ({
      ...order,
      deliveryBoy: deliveryBoy,
      selected: false,
    }));
    const newOrders = orders.map(
      (order) => updatedOrders.find((o) => o.orderNo === order.orderNo) || order
    );
    setOrders(newOrders);
    setSelectedOrders([]);
  };

  const handleViewDetails = (order) => {
    setShowModal(true);
    setModalOrder(order);
  };

  const handleSearchInputChange = (event) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);
  };

  const filteredOrders = (orders, searchTerm) => {
    const filteredOrders = orders.filter((order) => {
      const searchTermMatched =
        !searchTerm.trim() ||
        order.orderNo?.toString().includes(searchTerm) ||
        order.trackingNo?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        order.customerName?.toLowerCase().includes(searchTerm.toLowerCase());

      return searchTermMatched;
    });

    return filteredOrders;
  };

  const filterOrdersByDateRange = (orders, startDate, endDate) => {
    const filteredOrders = orders.filter((order) => {
      const orderDate = new Date(order.date).getTime();

      if (startDate && endDate) {
        // Both start and end dates selected
        return orderDate >= startDate && orderDate <= endDate;
      } else if (startDate) {
        // Only start date selected
        return orderDate >= startDate;
      } else if (endDate) {
        // Only end date selected
        return orderDate <= endDate;
      } else {
        // No dates selected yet - return all orders
        return true;
      }
    });

    return filteredOrders;
  };

  const filteredData = filteredOrders(orders, searchTerm);
  const filteredDataWithDateRange = filterOrdersByDateRange(
    filteredData,
    startDate,
    endDate
  );

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <div className="container-fluid mt-5">
       
        <div className="card main-card">
          <div className="card-header" style={{ padding: "35px 30px" }}>
            <h6 className="cb-font">Order History</h6>
          </div>
          <div className="card-body py-2 px-0">
            <div
              className="container mt-2 p-3 card-header"
              style={{ height: "400px" }}
            >
              <div
                className="container d-flex"
                style={{
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div className="fromdate-box d-flex">
                  <label
                    style={{
                      fontSize: "15px",
                      color: "rgb(70, 68, 68)",
                      whiteSpace: "nowrap",
                      marginRight: "13px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    From Date :
                  </label>
                  <DatePicker
                    selected={startDate}
                    onChange={handleDateChange}
                    name="date"
                    id="from-date-picker"
                    className="form-control invoice-date"
                    placeholder="Select Date..."
                  />
                </div>
                <div className="todate-box d-flex">
                  <label
                    style={{
                      fontSize: "15px",
                      color: "rgb(70, 68, 68)",
                      fontWeight: "600",
                      whiteSpace: "nowrap",
                      marginRight: "13px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    To Date :
                  </label>
                  <DatePicker
                    selected={endDate}
                    onChange={handleDateChanges}
                    name="date"
                    id="to-date-picker"
                    className="form-control invoice-date"
                    placeholder="Select Date..."
                  />
                </div>
                <div className="search-box">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={handleSearchInputChange}
                  />
                </div>
              </div>
              <div className="container-fluid mt-3 d-flex">
                <div className="container p-0">
                  <select
                    value=""
                    onChange={(e) => handleAssignDeliveryBoy(e.target.value)}
                    className="form-control"
                  >
                    <option disabled value="">
                      Select Delivery Boy
                    </option>
                    {deliveryBoys.map((deliveryBoy) => (
                      <option key={deliveryBoy} value={deliveryBoy}>
                        {deliveryBoy}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="container">
                  <button className="btn buttons">Assign</button>
                </div>
              </div>
              <div
                className="container-fluid mt-2"
                style={{ overflow: "scroll", overflowX: "auto" }}
              >
                <table className="table table-striped table-bordered bg-light orderh-table mt-2">
                  <thead>
                    <tr>
                      <th>Select</th>
                      <th>Order Date</th>
                      <th>Order No.</th>
                      <th>Tracking No.</th>
                      <th>Customer Name</th>
                      <th>Amount</th>
                      <th>Payment Mode</th>
                      <th>Details</th>
                      <th>Delivery Boy</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredDataWithDateRange.map((order, index) => (
                      <tr key={order.orderNo}>
                        <td>
                          <input
                            type="checkbox"
                            checked={order.selected}
                            onChange={() => handleSelectOrder(index)}
                          />
                        </td>
                        <td>{order.date.toLocaleDateString()}</td>
                        <td>{order.orderNo}</td>
                        <td>{order.trackingNo}</td>
                        <td>{order.customerName}</td>
                        <td>{order.amount}</td>
                        <td>{order.paymentMode}</td>
                        <td>
                          <Button
                            variant="primary"
                            onClick={() => handleViewDetails(order)}
                            className="details-btn"
                          >
                            View Details
                          </Button>
                        </td>
                        <td>
                          {order.deliveryBoy ? order.deliveryBoy : <p></p>}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <Modal
                show={showModal}
                onHide={() => setShowModal(false)}
                centered
              >
                <Modal.Header closeButton>
                  <Modal.Title>Order Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <p>
                    <strong>Order No.: </strong>
                    {modalOrder.orderNo}
                  </p>
                  <p>
                    <strong>Tracking No.: </strong>
                    {modalOrder.trackingNo}
                  </p>
                  <p>
                    <strong>Customer Name: </strong>
                    {modalOrder.customerName}
                  </p>
                  <p>
                    <strong>Amount: </strong>
                    {modalOrder.amount}
                  </p>
                  <p>
                    <strong>Payment Mode: </strong>
                    {modalOrder.paymentMode}
                  </p>
                  <p>
                    <strong>Delivery Boy: </strong>
                    {modalOrder.deliveryBoy || "Not Assigned"}
                  </p>
                </Modal.Body>
              </Modal>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderHistory;
