import { Route, Switch } from 'react-router';
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
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/p/:nameAndId" component={ProductPage} />
        <Route exact path="/contact" component={ContactPage} />
        <Route exact path="/register" component={RegisterPage} />
        <Route exact path="/login" component={LoginPage} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
