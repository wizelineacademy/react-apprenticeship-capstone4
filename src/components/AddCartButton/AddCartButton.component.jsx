import React from 'react';
import {
  AddButton,
  AddCartContainer,
  NumberProducts,
} from './themes/addcartbutton.style';
function AddCartButton() {
  return (
    <AddCartContainer>
      <NumberProducts type="number" />
      <AddButton>Add to cart</AddButton>
    </AddCartContainer>
  );
}

export default AddCartButton;
