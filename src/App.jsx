import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import ProductList from './components/ProductList';
import CartItem from './components/CartItem';
import './App.css';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const totalQuantity = useSelector(state => state.cart.totalQuantity);

  const handleGetStarted = () => {
    setCurrentPage('products');
  };

  return (
    <div className="app">
      <nav className="navbar">
        <div className="nav-links">
          <span onClick={() => setCurrentPage('home')} className="nav-link">Home</span>
          <span onClick={() => setCurrentPage('products')} className="nav-link">Plants</span>
          <span onClick={() => setCurrentPage('cart')} className="nav-link">
            Cart ({totalQuantity})
          </span>
        </div>
      </nav>

      {currentPage === 'home' && (
        <div className="landing-page">
          <h1>Paradise Nursery</h1>
          <p>Your one-stop shop for beautiful houseplants</p>
          <button onClick={handleGetStarted}>Get Started</button>
        </div>
      )}

      {currentPage === 'products' && <ProductList setCurrentPage={setCurrentPage} />}

      {currentPage === 'cart' && <CartItem setCurrentPage={setCurrentPage} />}
    </div>
  );
};

export default App;