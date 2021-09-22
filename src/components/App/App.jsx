import { Route, Switch } from 'react-router';
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
        <Route exact path="/contact" component={ContactPage} />
        <Route exact path="/register" component={RegisterPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/p/:nameAndId" component={ProductPage} />
      </Switch>
    </>
  );
}

export default App;
