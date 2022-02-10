import React from 'react';
import Footer from '../components/Footer/Footer.component';
import GridCategories from '../components/GridCategories/GridCategories.component';
import GridProducts from '../components/GridProducts/GridProducts.component';
import Products from '../components/GridProducts/Products.component';
import Slider from '../components/Slider';
import Navbar from '../components/Ui/Navbar.component';
import { useRouterContext } from '../providers/Router.provider';
import './themes/home.style.js';
import { HomeContainer } from './themes/home.style.js';
import { Button } from './themes/productList.style';
function HomePage() {
  const {
    router: { navigate },
  } = useRouterContext();
  const handleButton = () => {
    navigate('/productlist', navigate);
  };
  return (
    <>
      <Navbar />
      <HomeContainer>
        <Products />
        <Slider />
        <GridCategories />
        <GridProducts />
        <Button data-testid="button" onClick={handleButton}>
          View all products
        </Button>
        <Footer />
      </HomeContainer>
    </>
  );
}

export default HomePage;
