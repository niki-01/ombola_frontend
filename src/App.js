import './App.css';
import './Components/Products';
import Products from './Components/Products';
import AddProduct from './Components/AddProduct';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Component } from 'react';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Products}  />
          <Route path="/add_product" component={AddProduct} />
        </Switch>
      </BrowserRouter>

  );
}
}
export default App;