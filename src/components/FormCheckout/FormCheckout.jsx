import React from 'styled-components';
import {
  CustomerEmail,
  CustomerName,
  FormCheckoutContainer,
  Notes,
  ZipCode,
} from './themes/formcheckout.style';

function FormCheckout() {
  return (
    <FormCheckoutContainer>
      Name
      <CustomerName />
      Email
      <CustomerEmail />
      Zip code
      <ZipCode />
      Comments
      <Notes />
    </FormCheckoutContainer>
  );
}

export default FormCheckout;
