import React from 'react';
import { useSelector } from 'react-redux';
import './themes/checkouttable.style';
import { CheckoutTableContainer, Head } from './themes/checkouttable.style';

function CheckoutTable() {
  const { cart } = useSelector((state) => state.cart);
  const products = Object.values(cart);
  return (
    <CheckoutTableContainer>
      <table id="customers">
        <thead>
          <tr>
            <Head>Name</Head>
            <Head>Quantity</Head>
            <Head>Subtotal</Head>
          </tr>
        </thead>
        <tbody>
          {products.map(({ product, quantity }) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{quantity}</td>
              <td>${product.price * Number(quantity)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </CheckoutTableContainer>
  );
}

export default CheckoutTable;
