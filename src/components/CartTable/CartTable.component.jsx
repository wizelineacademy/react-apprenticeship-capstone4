import React from 'react';
import { useSelector } from 'react-redux';
import ChangeButton from '../ChangeButton/ChangeButton.component';
import DeleteProduct from '../DeleteProduct/DeleteProduct';
import './themes/table.style';
import { CartTableContainer, Head, Image } from './themes/table.style';

function CartTable() {
  const { cart } = useSelector((state) => state.cart);
  const products = Object.values(cart);
  return (
    <CartTableContainer>
      <table id="customers">
        <thead>
          <tr>
            <Head>Image</Head>
            <Head>Name</Head>
            <Head>Price</Head>
            <Head>Quantity</Head>
            <Head>Subtotal</Head>
            <Head>Remove</Head>
          </tr>
        </thead>
        <tbody>
          {products.map(({ product, quantity }) => (
            <tr key={product.id}>
              <td>
                <Image src={product.image} alt="" />
              </td>
              <td>{product.name}</td>
              <td>${product.price}</td>
              <td>
                <ChangeButton id={product.id} />
              </td>
              <td>${product.price * Number(quantity)}</td>
              <td>
                <DeleteProduct id={product.id} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </CartTableContainer>
  );
}

export default CartTable;
