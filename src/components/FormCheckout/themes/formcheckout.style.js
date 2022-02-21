import styled from 'styled-components';

export const FormCheckoutContainer = styled.div`
  display: flex;
  font-family: 'lobster', cursive;
  flex-wrap: wrap;
  flex-direction: column;
  align-self: center;
  width: 400px;
`;

export const CustomerName = styled.input`
  height: 40px;
  border-radius: 8px;
  outline: none;
  cursor: pointer;
`;

export const CustomerEmail = CustomerName,
  ZipCode = CustomerName;

export const Notes = styled.textarea`
  height: 56px;
  resize: vertical;
  outline: none;
  cursor: pointer;
  border-style: solid;
  border-color: black;
  border-width: 2px;
`;
