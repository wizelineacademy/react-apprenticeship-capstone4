import React from 'react';
import { useSelector } from 'react-redux';
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
      <Titulo data-testid="name-product">{name}</Titulo>
      <Description>{shortDescription}</Description>
      <Price>${price}</Price>
      {!!tags && tags.map((tag) => <label key={tag}>{tag}</label>)}
      <label>{stock}</label>
      <Table />
    </DetailsContainer>
  );
}

export default Details;
