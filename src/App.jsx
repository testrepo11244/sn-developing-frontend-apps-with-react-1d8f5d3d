import React, { useState } from 'react';
import { Provider, useSelector } from 'react-redux';
import store from './store';
import ProductList from './components/ProductList';
import CartItem from './components/CartItem';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const totalQuantity = useSelector(state =>
    state.cart.items.reduce((sum, item) => sum + item.quantity, 0)
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <Provider store={store}>
      <div>
        {currentPage === 'home' && (
          <div className="landing-page">
            <h1>Paradise Nursery</h1>
            <p>Your one‑stop shop for houseplants</p>
            <button onClick={() => handlePageChange('products')}>Get Started</button>
          </div>
        )}
        {currentPage !== 'home' && (
          <nav>
            <button onClick={() => handlePageChange('home')}>Home</button>
            <button onClick={() => handlePageChange('products')}>Plants</button>
            <button onClick={() => handlePageChange('cart')}>
              🛒 Cart ({totalQuantity})
            </button>
          </nav>
        )}
        {currentPage === 'products' && <ProductList />}
        {currentPage === 'cart' && (
          <CartItem onContinueShopping={() => handlePageChange('products')} />
        )}
      </div>
    </Provider>
  );
}

export default App;