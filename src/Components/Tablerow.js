import React, { useState } from "react";
import { useSelector } from "react-redux";

function TableRow({ id }) {
  const items = useSelector((state) => state.item.items);
  const products = useSelector((state) => state.product.products);
  const [product, setProduct] = useState("");
  const [price, setPrice] = useState("");
  const [units, setUnits] = useState("");
  const [gst, setGst] = useState("");

  const handleProductChange = (e) => {
    const selectedProduct = items.find((p) => p.product === e.target.value);
    if (selectedProduct) {
      setProduct(selectedProduct.product);
      setPrice(selectedProduct.saleprice);
      setUnits(selectedProduct.unit);
      setGst(selectedProduct.gst);
    }
  };

  return (
    <tr key={id}>
      <td className="invoice-td">{id}</td>
      <td className="invoice-td invoice-td-item" style={{width:"20%"}}>
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
          style={{width:"100%"}}
        />
      </td>
      <td className="invoice-td text-center" style={{width:"10%",fontWeight:"bold"}}>{units}</td>
      <td className="invoice-td" name="gst">
        <input
          type="number"
          value={gst}
          className="invoice-input form-control invoice-input-gst text-center"
        />
      </td>
      <td className="invoice-td" name="price">
        <input
          type="number"
          value={price}
          className="invoice-input form-control invoice-input-price text-center"
        />
      </td>
      <td className="invoice-td" name="amount">
        <input
          type="number"
          className="invoice-input form-control invoice-input-amount text-center"
        />
      </td>
    </tr>
  );
}

export default TableRow;
