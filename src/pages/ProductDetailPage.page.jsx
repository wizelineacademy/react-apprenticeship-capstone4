import React from 'react';
import { useParams } from 'react-router-dom';
import Details from '../components/Details/Details.component';
import Gallery from '../components/Gallery/Gallery.component';
import './themes/productDetail.styles';
import { ProductDetailContainer } from './themes/productDetail.styles';
import { useProduct } from '../utils/hooks/useProduct';
import AddCartButton from '../components/AddCartButton/AddCartButton.component';

function ProductDetail() {
  const { productId } = useParams();
  useProduct(productId);
  return (
    <>
      <ProductDetailContainer>
        <Gallery />
        <Details />
      </ProductDetailContainer>
      <AddCartButton id={productId} />
    </>
  );
}

export default ProductDetail;

//name, price, stock, category -> labels
//tags list
//description
//number input
//add to cart button
//table with specifications
