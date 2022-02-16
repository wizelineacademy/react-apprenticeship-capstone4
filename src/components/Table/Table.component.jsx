import React from 'react';
import { useSelector } from 'react-redux';
import './themes/table.style';

function Table() {
  const {
    product: { specs },
  } = useSelector((state) => state.cart);
  return (
    <table id="customers">
      <thead>
        <tr>
          {!!specs &&
            specs.map((spec, index) => <th key={index}>{spec.spec_name}</th>)}
        </tr>
      </thead>
      <tbody>
        <tr>
          {!!specs &&
            specs.map((spec, index) => <td key={index}>{spec.spec_value}</td>)}
        </tr>
      </tbody>
    </table>
  );
}

export default Table;

//name, price, stock, category -> labels
//tags list
//description
//number input
//add to cart button
//table with specifications
