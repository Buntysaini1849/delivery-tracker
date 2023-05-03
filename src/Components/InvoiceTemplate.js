import React from 'react';

function InvoiceTemplate(props) {
  const { tableData } = props.location.state;

  return (
    <div>
      {/* Your invoice template content */}
      <table>
        <thead>
          <tr>
            <th>SN</th>
            <th>Item</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Unit</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((item) => (
            <tr key={item.sn}>
              <td>{item.sn}</td>
              <td>{item.item}</td>
              <td>{item.price}</td>
              <td>{item.quantity}</td>
              <td>{item.unit}</td>
              <td>{item.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default InvoiceTemplate;

