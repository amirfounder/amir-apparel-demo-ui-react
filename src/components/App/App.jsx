import { Route, Switch } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Footer } from '../Footer';
import {
  NavigationHeader,
  PurchaseFlowHeader
} from '../headers';
import { AccountHeader } from '../headers/AccountHeader/AccountHeader';
import {
  AboutPage,
  ContactPage,
  CheckoutPage,
  HomePage,
  LoginPage,
  RegisterPage,
  CartPage,
  ShopPage,
  ProductPage,
  ThankYouPage,
} from '../pages';

export const App = () => {

  const location = useLocation()
  const purchaseFlowPathnames = ['/cart', '/checkout']

  console.log(location)

  return (
    <div data-testid="app">
      {
        purchaseFlowPathnames.includes(location.pathname)
          ? <PurchaseFlowHeader />
          : (
            <>
              <AccountHeader />
              <NavigationHeader />
            </>
          )
      }
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/cart" component={CartPage} />
        <Route exact path="/p/:productNameAndId" component={ProductPage} />
        <Route exact path="/contact" component={ContactPage} />
        <Route exact path="/register" component={RegisterPage} />
        <Route exact path="/checkout" component={CheckoutPage} />
        <Route exact path="/checkout/thank-you" component={ThankYouPage} />
        <Route exact path="/login" component={LoginPage} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
