import { Route, Switch } from 'react-router';
import { ShopProvider } from '../../context/ShopContext';
import { Footer } from '../Footer';
import { Header } from '../Header';
import {
  AboutPage,
  ContactPage,
  HomePage,
  LoginPage,
  RegisterPage,
  ShopPage
} from '../pages';
import { ProductPage } from '../pages/ProductPage';

export const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/about" component={AboutPage} />
        <ShopProvider>
          <Route exact path="/shop" component={ShopPage} />
        </ShopProvider>
        <Route exact path="/contact" component={ContactPage} />
        <Route exact path="/register" component={RegisterPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/p/:nameAndId" component={ProductPage} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
