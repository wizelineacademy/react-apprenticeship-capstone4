import React from 'react';
import BannersDataUs from '../../mocks/en-us/featured-banners.json';
import ProductsDataUs from '../../mocks/en-us/featured-products.json';
import CategoriesDataUs from '../../mocks/en-us/product-categories.json';
import Slider from '../Slider';
import Carousel from '../Carousel';
import Grid from '../Grid';

function Home() {
  return (
    <div>
      <Slider sliderItems={BannersDataUs.results} />
      <br />
      <Carousel carouselItems={ProductsDataUs.results} />
      <br />
      <Grid gridItems={CategoriesDataUs.results} />
    </div>
  );
}

export default Home;
