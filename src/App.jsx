import {BrowserRouter as Router,Switch,Route,Redirect} from 'react-router-dom';
import Home from './pages/Home';
import Product from './pages/Product';
import ProductList from './pages/ProductList';
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';
import Success from './pages/Success';

const App = () => {
  const user=true;
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
        </Switch>
        <Switch>
          <Route path="/products/:category">
            <ProductList />
          </Route>
        </Switch>
        <Switch>
          <Route path="/product/:productId">
            <Product />
          </Route>
        </Switch>
        <Switch>
          <Route path="/register">
            {user ? <Redirect to="/" /> : <Register />}
          </Route>
        </Switch>
        <Switch>
          <Route path="/login">
            {user ? <Redirect to="/" /> : <Login />}
          </Route>
        </Switch>
        <Switch>
          <Route path="/cart">
            <Cart />
          </Route>
        </Switch>
        <Switch>
          <Route path="/success">
            <Success />
          </Route>
      </Switch>
      </Router>
    </>
  );
};

export default App;