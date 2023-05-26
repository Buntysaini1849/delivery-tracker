import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import Sidebar from "./Sidebar";


function OrderHistory() {
  const [orders, setOrders] = useState([
    {
      orderNo: 1,
      trackingNo: "ABCD123456",
      customerName: "Dinesh",
      amount: "₹500.00",
      paymentMode: "Cash on Delivery",
      totalItems: "5 items",
      deliveryBoy: "",
      selected: false
    },
    {
      orderNo: 2,
      trackingNo: "EFGH789012",
      customerName: "Bunty",
      amount: "₹1000.00",
      paymentMode: "Credit Card",
      totalItems: "10 items",
      deliveryBoy: "",
      selected: false
    }
  ]);

  const [deliveryBoys, setDeliveryBoys] = useState([
    "Amit",
    "Kunal",
    "Naveen",
  ]);

  const [selectedOrders, setSelectedOrders] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modalOrder, setModalOrder] = useState({});


  function handleResetClick() {
    setOrders(prevOrders => prevOrders.map(order => ({ ...order, item: '', qty: '' })));
  }
  

  const handleSelectOrder = (index) => {
    const newOrders = [...orders];
    newOrders[index].selected = !newOrders[index].selected;
    if (!newOrders[index].selected) {
      newOrders[index].deliveryBoy = "";
    }
    setOrders(newOrders);
    const selectedOrders = newOrders.filter(order => order.selected);
    setSelectedOrders(selectedOrders);
  };

  const handleAssignDeliveryBoy = (deliveryBoy) => {
    const updatedOrders = selectedOrders.map((order) => ({
      ...order,
      deliveryBoy: deliveryBoy,
      selected: false
    }));
    const newOrders = orders.map((order) =>
      updatedOrders.find((o) => o.orderNo === order.orderNo) || order
    );
    setOrders(newOrders);
    setSelectedOrders([]);
  };

  const handleViewDetails = (order) => {
    setShowModal(true);
    setModalOrder(order);
  };

  return (
     <div style={{display:"flex"}}>
      <Sidebar />

      <div className="container-fluid mt-5">
        <h3 style={{display:"flex",justifyContent:"center",fontSize:"16px",fontWeight:"600"}}>Order History</h3>
        <div className="container mt-5 p-3" style={{background:"#fff",overflowY:"scroll",height:'400px'}}>
      <table className="table table-striped table-bordered bg-light orderh-table mt-3">
        <thead>
          <tr>
            <th>Select</th>
            <th>Order No.</th>
            <th>Tracking No.</th>
            <th>Customer Name</th>
            <th>Amount</th>
            <th>Payment Mode</th>
            <th>Details</th>
            <th>Delivery Boy</th>
            <th>Action</th>
            
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={order.orderNo}>
              <td>
                <input
                  type="checkbox"
                  checked={order.selected}
                  onChange={() => handleSelectOrder(index)}
                />
              </td>
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
                {order.deliveryBoy ? (
                  order.deliveryBoy
                ) : (
                  <p></p>
                )}
              </td>
              <td><button onClick={handleResetClick}>Reset</button></td>
     
            </tr>
          ))}
        </tbody>
      </table>
    
  
      <div className="container">
      
                  <select
                    value=""
                    onChange={(e) => handleAssignDeliveryBoy(e.target.value)}
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
    

      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
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
            <strong>Details: </strong>
            {modalOrder.details}
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
    
  );
}

export default OrderHistory;
