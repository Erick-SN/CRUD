import React from 'react';
import Header from './components/Header';
import Products from './components/Products';
import NewProduct from './components/NewProduct';
import EditProduct from './components/Editproduct';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
function App() {
  return (
    <>
      <Router>
        <Header />
        <div className='container'>
          <Switch>
            <Route exact path='/' component={Products} />
            <Route exact path='/products/new' component={NewProduct} />
            <Route exact path='/products/edit/:id' component={EditProduct} />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
