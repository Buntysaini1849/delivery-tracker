import React, { useState,useRef} from "react";
import { useSelector } from "react-redux";



function TableRow({index,id,sendDataToParent,rows,itemref}) {
   
  const items = useSelector((state) => state.item.items);
  // const products = useSelector((state) => state.product.products);
  const [product, setProduct] = useState("");
  const [price, setPrice] = useState("");
  const [units, setUnits] = useState("");
  const [gstrate, setGstRate] = useState("");
  const [qty, setQty] = useState("");
  const [totalamountdata,setTotalAmountData] = useState(0);

  const amount = (qty * price * (1 + (gstrate / 100)));



  const itemRef = useRef(null);
  const qtyRef = useRef(null);
  const amountRef = useRef(null);
  
  
  const handleClick = (e) => {
    if (e.key === 'Enter') {
      let rows = document.querySelectorAll("tr");
      let total = 0;
      rows.forEach((row,id) => {
        total += amount;
      });
      setTotalAmountData(total);
// This needs to be corrected ****************************

      const data = total;

 /// *************************************************    
      console.log(data);
      
      sendDataToParent(data);
    }
    else {
      console.log("error on key press")
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


  function handleKeyPress(event, inputRef) {
    if (event.key === 'Enter') {
      event.preventDefault();
      inputRef.current.focus();
      console.log(inputRef.current.value);
    }

   
  }
 
  

  return (
    <>
      
      <tr Key={id}>
        <td className="invoice-td text-center">{index+1}</td>
        <td className="invoice-td invoice-td-item" style={{ width: "20%" }}>
          <select
            value={product}
            onChange={handleProductChange}
            ref={itemRef}
            onKeyDown={(event) => handleKeyPress(event, qtyRef)}
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
            ref={qtyRef}
            onKeyDown={(event) => handleKeyPress(event, amountRef)}
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
            //onKeyDown={handleClick}
            onKeyDown={(event) => handleKeyPress(event, itemRef)}
            ref={amountRef}
            className="invoice-input form-control invoice-input-amount text-center"
          />
        </td>
      </tr>
      
    </>
  );
}

export default TableRow;
