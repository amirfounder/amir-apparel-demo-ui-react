import { Route, Switch } from 'react-router-dom';
import { Footer } from '../Footer';
import { Header } from '../Header';
import {
  AboutPage,
  ContactPage,
  HomePage,
  LoginPage,
  RegisterPage,
  CartPage,
  ShopPage
} from '../pages';
import { ProductPage } from '../pages/ProductPage';

export const App = () => {
  return (
    <div data-testid="app">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/cart" component={CartPage} />
        <Route exact path="/p/:productNameAndId" component={ProductPage} />
        <Route exact path="/contact" component={ContactPage} />
        <Route exact path="/register" component={RegisterPage} />
        <Route exact path="/login" component={LoginPage} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
