import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../redux/CartSlice';

const categories = [
  {
    name: 'Air Purifying',
    plants: [
      { id: 1, name: 'Snake Plant', price: 15.99, image: 'https://via.placeholder.com/150/008000/FFFFFF?text=Snake' },
      { id: 2, name: 'Spider Plant', price: 12.99, image: 'https://via.placeholder.com/150/008000/FFFFFF?text=Spider' },
      { id: 3, name: 'Peace Lily', price: 18.99, image: 'https://via.placeholder.com/150/008000/FFFFFF?text=Peace' },
      { id: 4, name: 'Aloe Vera', price: 10.99, image: 'https://via.placeholder.com/150/008000/FFFFFF?text=Aloe' },
      { id: 5, name: 'Bamboo Palm', price: 22.99, image: 'https://via.placeholder.com/150/008000/FFFFFF?text=Bamboo' },
      { id: 6, name: 'Rubber Plant', price: 19.99, image: 'https://via.placeholder.com/150/008000/FFFFFF?text=Rubber' },
    ],
  },
  {
    name: 'Low Light',
    plants: [
      { id: 7, name: 'ZZ Plant', price: 16.99, image: 'https://via.placeholder.com/150/3b5998/FFFFFF?text=ZZ' },
      { id: 8, name: 'Pothos', price: 11.99, image: 'https://via.placeholder.com/150/3b5998/FFFFFF?text=Pothos' },
      { id: 9, name: 'Philodendron', price: 14.99, image: 'https://via.placeholder.com/150/3b5998/FFFFFF?text=Philodendron' },
      { id: 10, name: 'Cast Iron Plant', price: 20.99, image: 'https://via.placeholder.com/150/3b5998/FFFFFF?text=Cast+Iron' },
      { id: 11, name: 'Dracaena', price: 17.99, image: 'https://via.placeholder.com/150/3b5998/FFFFFF?text=Dracaena' },
      { id: 12, name: 'Chinese Evergreen', price: 13.99, image: 'https://via.placeholder.com/150/3b5998/FFFFFF?text=Chinese+Evergreen' },
    ],
  },
  {
    name: 'Pet Friendly',
    plants: [
      { id: 13, name: 'Boston Fern', price: 9.99, image: 'https://via.placeholder.com/150/ff6347/FFFFFF?text=Fern' },
      { id: 14, name: 'Parlor Palm', price: 21.99, image: 'https://via.placeholder.com/150/ff6347/FFFFFF?text=Parlor+Palm' },
      { id: 15, name: 'Areca Palm', price: 23.99, image: 'https://via.placeholder.com/150/ff6347/FFFFFF?text=Areca+Palm' },
      { id: 16, name: 'Calathea', price: 24.99, image: 'https://via.placeholder.com/150/ff6347/FFFFFF?text=Calathea' },
      { id: 17, name: 'Money Tree', price: 25.99, image: 'https://via.placeholder.com/150/ff6347/FFFFFF?text=Money+Tree' },
      { id: 18, name: 'Prayer Plant', price: 19.99, image: 'https://via.placeholder.com/150/ff6347/FFFFFF?text=Prayer' },
    ],
  },
];

const ProductList = ({ setCurrentPage }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  const isInCart = (plantId) => cartItems.some(item => item.id === plantId);

  return (
    <div className="product-list">
      <h1>Our Plants</h1>
      {categories.map(category => (
        <div key={category.name} className="category-section">
          <h2>{category.name}</h2>
          <div className="plants-grid">
            {category.plants.map(plant => (
              <div key={plant.id} className="plant-card">
                <img src={plant.image} alt={plant.name} className="plant-thumbnail" />
                <h3>{plant.name}</h3>
                <p className="price">${plant.price.toFixed(2)}</p>
                <button
                  onClick={() => handleAddToCart(plant)}
                  disabled={isInCart(plant.id)}
                  className="add-to-cart-btn"
                >
                  {isInCart(plant.id) ? 'Added' : 'Add to Cart'}
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;