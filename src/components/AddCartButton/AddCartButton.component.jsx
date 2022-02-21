import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import {
  addToCart,
  calculateTotalCart,
  calculateTotalProducts,
} from '../../actions/cart';
import { useForm } from '../../utils/hooks/useForm/useForm';
import {
  AddButton,
  AddCartContainer,
  NumberProducts,
} from './themes/addcartbutton.style';
function AddCartButton({ id }) {
  const dispatch = useDispatch();
  const {
    product: { stock },
    product,
  } = useSelector((state) => state.cart);
  const [{ cart }, handleInputChange] = useForm({
    cart: 0,
  });
  const handleButton = () => {
    dispatch(addToCart(id, product, cart));
    dispatch(calculateTotalCart());
    dispatch(calculateTotalProducts());
  };
  return (
    <>
      {cart > stock && <b>Select another number of items, please</b>}
      <AddCartContainer>
        <NumberProducts
          type="number"
          name="cart"
          value={cart}
          onChange={handleInputChange}
        />
        <AddButton
          disabled={cart <= stock ? false : true}
          onClick={handleButton}
        >
          Add to cart
        </AddButton>
      </AddCartContainer>
    </>
  );
}

export default AddCartButton;
