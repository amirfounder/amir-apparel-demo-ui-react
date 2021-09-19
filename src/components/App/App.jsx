import { Route, Switch } from 'react-router';
import { Header } from '../Header';
import { Home } from '../pages/Home';
import styles from './App.module.css';

export const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </>
  );
}

export default App;
