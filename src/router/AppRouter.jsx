import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from '../components/Ui/Navbar.component';
import CheckoutPage from '../pages/CheckoutPage.page';
import HomePage from '../pages/HomePage.page';
import ProductDetail from '../pages/ProductDetailPage.page';
import ProductList from '../pages/ProductListPage.page';
import SearchResults from '../pages/SearchResultsPage.page';
import ShoppingCart from '../pages/ShoppingCartPage.style';

function AppRouter() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/home" component={HomePage} />
        <Route exact path="/products/" component={ProductList} />
        <Route exact path="/products/:category" component={ProductList} />
        <Route exact path="/product/:productId" component={ProductDetail} />
        <Route exact path="/search" component={SearchResults} />
        <Route exact path="/cart" component={ShoppingCart} />
        <Route exact path="/checkout" component={CheckoutPage} />
      </Switch>
    </Router>
  );
}

export default AppRouter;
