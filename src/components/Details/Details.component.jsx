import React from 'react';
import { useSelector } from 'react-redux';
import AddCartButton from '../AddCartButton/AddCartButton.component';
import Table from '../Table/Table.component';
import './themes/details.styles';
import {
  DetailsContainer,
  Titulo,
  Description,
  Price,
} from './themes/details.styles';
function Details() {
  const {
    product: { name, shortDescription, price, stock, tags },
  } = useSelector((state) => state.cart);
  return (
    <DetailsContainer>
      <Titulo>{name}</Titulo>
      <Description>{shortDescription}</Description>
      <Price>${price}</Price>
      {!!tags && tags.map((tag) => <label key={tag}>{tag}</label>)}
      <label>{stock}</label>
      <AddCartButton />
      <Table />
    </DetailsContainer>
  );
}

export default Details;
