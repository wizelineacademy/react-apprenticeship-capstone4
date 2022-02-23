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
  console.log(productId);
  useProduct(productId);
  return (
    <>
      <ProductDetailContainer>
        <Gallery />
        <Details />
      </ProductDetailContainer>
      <AddCartButton data-testid="button-details" id={productId} />
    </>
  );
}

export default ProductDetail;
