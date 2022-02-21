import React from 'react';
import Footer from '../components/Footer/Footer.component';
import GridCategories from '../components/GridCategories/GridCategories.component';
import Products from '../components/FeaturedProducts/Products.component';
import Slider from '../components/Slider';
import './themes/home.style.js';
import { HomeContainer } from './themes/home.style.js';
import { Button } from './themes/productList.style';
import { useHistory } from 'react-router-dom';
import { useFeaturedCategories } from '../utils/hooks/useFeaturedCategories';
import { useFeaturedBanners } from '../utils/hooks/useFeaturedBanners';
import { useFeaturedProducts } from '../utils/hooks/useFeaturedProducts';
import FeaturedProducts from '../components/FeaturedProducts/FeaturedProducts.component';
import { useSelector } from 'react-redux';
import Loading from '../components/Alerts/Loading.component';

function HomePage() {
  useFeaturedProducts();
  useFeaturedCategories();
  useFeaturedBanners();
  const history = useHistory();
  const handleButton = () => {
    history.push('/products');
  };
  const { products } = useSelector((state) => state.ui);
  return (
    <HomeContainer>
      <Products />
      <Slider />
      <GridCategories />
      {products.loading && <Loading />}
      <FeaturedProducts />
      <Button data-testid="button" onClick={handleButton}>
        View all products
      </Button>
      <Footer />
    </HomeContainer>
  );
}

export default HomePage;
