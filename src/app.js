import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Bleh from './components/Bleh/Bleh';
import List from './components/List/List';
import products from './dataApi/schoolProducts';
import Product from './components/Product/Product';

class App extends Component {
  render() {
    let productList = products.map(item => (
      <Product key={item.id} product={item} />
    ));
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">This is where it all is</p>
        <p>another test of text</p>
        <Bleh />
        <List />
        <h2>Products</h2>
        {productList}
      </div>
    );
  }
}

export default App;
