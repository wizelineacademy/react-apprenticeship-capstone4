import React from 'react';
import Footer from '../components/Footer/Footer.component';
import GridCategories from '../components/GridCategories/GridCategories.component';
import GridProducts from '../components/GridProducts/GridProducts.component';
import Products from '../components/GridProducts/Products.component';
import Slider from '../components/Slider';
import Navbar from '../components/Ui/Navbar.component';
import './themes/home.style.js';
import { HomeContainer } from './themes/home.style.js';
function HomePage() {
  return (
    <>
      <Navbar />
      <HomeContainer>
        <Products />
        <Slider />
        <GridCategories />
        <GridProducts />
        <Footer />
      </HomeContainer>
    </>
  );
}

export default HomePage;
