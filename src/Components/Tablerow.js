import React, { useState } from "react";
import { useSelector } from "react-redux";



function TableRow(props) {
  const items = useSelector((state) => state.item.items);
  // const products = useSelector((state) => state.product.products);
  const [product, setProduct] = useState("");
  const [price, setPrice] = useState("");
  const [units, setUnits] = useState("");
  const [gstrate, setGstRate] = useState("");
  const [qty, setQty] = useState("");

  const amount = (qty * price * (1 + (gstrate / 100)));

  const handleClick = (e) => {

    if (e.key === 'Enter'){
      const data = amount;
      props.sendDataToParent(data);
    }
 
  }
  

  const handleQuantityChange = (event) => {
    setQty(parseInt(event.target.value));
  
  
  };

  const handlePriceChange = (event) => {
    setPrice(parseInt(event.target.value));
  };

  const handleGstChange = (event) => {
    setGstRate(parseFloat(event.target.value));
  };

  const handleProductChange = (e) => {
    const selectedProduct = items.find((p) => p.product === e.target.value);
    if (selectedProduct) {
      setProduct(selectedProduct.product);
      setPrice(selectedProduct.saleprice);
      setUnits(selectedProduct.unit);
      setGstRate(selectedProduct.gst);
    }
  };

 
  

  return (
    <>
      
      <tr key={props.id}>
        <td className="invoice-td">{props.ids}</td>
        <td className="invoice-td invoice-td-item" style={{ width: "20%" }}>
          <select
            value={product}
            onChange={handleProductChange}
            className="invoice-input form-control invoice-input-item text-center"
          >
            <option value="" disabled={true}></option>
            {items.map((p) => (
              <option key={p.product} value={p.product}>
                {p.product}
              </option>
            ))}
          </select>
        </td>
        <td className="invoice-td" name="quantity">
          <input
            type="number"
            className="invoice-input invoice-input-qty text-center"
            value={qty}
            onChange={handleQuantityChange}
            style={{ width: "100%" }}
          />
        </td>
        <td
          className="invoice-td text-center"
          style={{ width: "10%", fontWeight: "bold" }}
        >
          {units}
        </td>
        <td className="invoice-td" name="gst">
          <input
            type="number"
            value={gstrate}
            onChange={handleGstChange}
            className="invoice-input form-control invoice-input-gst text-center"
          />
        </td>
        <td className="invoice-td" name="price">
          <input
            type="number"
            value={price}
            onChange={handlePriceChange}
            className="invoice-input form-control invoice-input-price text-center"
          />
        </td>
        <td className="invoice-td" name="amount">
          <input
            type="number"
            value={amount}
            onKeyDown={handleClick}
            className="invoice-input form-control invoice-input-amount text-center"
          />
        </td>
      </tr>
      
    </>
  );
}

export default TableRow;
