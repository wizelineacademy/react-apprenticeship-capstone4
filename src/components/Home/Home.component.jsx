import React from 'react';

import BannersDataUs from '../../mocks/en-us/featured-banners.json';
import CategoriesDataUs from '../../mocks/en-us/product-categories.json';
import ProductsDataUs from '../../mocks/en-us/featured-products.json';

import Slider from '../Slider';
import Carousel from '../Carousel';
import Grid from '../Grid';

import { HomeContainer } from './StyledHome';

function Home() {
  return (
    <HomeContainer>
      <Slider sliderItems={BannersDataUs.results} />
      <br />
      <Carousel carouselItems={CategoriesDataUs.results} />
      <br />
      <Grid gridItems={ProductsDataUs.results} />
    </HomeContainer>
  );
}

export default Home;
