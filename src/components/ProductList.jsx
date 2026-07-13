import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../store/CartSlice';

const plants = [
  // Indoor Plants (6)
  { id: 1, name: 'Snake Plant',     price: 18.99, category: 'Indoor', thumbnail: 'https://picsum.photos/100/100?random=1' },
  { id: 2, name: 'Peace Lily',      price: 15.49, category: 'Indoor', thumbnail: 'https://picsum.photos/100/100?random=2' },
  { id: 3, name: 'Spider Plant',    price: 12.99, category: 'Indoor', thumbnail: 'https://picsum.photos/100/100?random=3' },
  { id: 4, name: 'Philodendron',    price: 14.99, category: 'Indoor', thumbnail: 'https://picsum.photos/100/100?random=4' },
  { id: 5, name: 'ZZ Plant',        price: 22.99, category: 'Indoor', thumbnail: 'https://picsum.photos/100/100?random=5' },
  { id: 6, name: 'Pothos',          price: 10.99, category: 'Indoor', thumbnail: 'https://picsum.photos/100/100?random=6' },
  // Outdoor Plants (6)
  { id: 7, name: 'Rose Bush',       price: 24.99, category: 'Outdoor', thumbnail: 'https://picsum.photos/100/100?random=7' },
  { id: 8, name: 'Lavender',        price: 16.99, category: 'Outdoor', thumbnail: 'https://picsum.photos/100/100?random=8' },
  { id: 9, name: 'Hibiscus',        price: 19.99, category: 'Outdoor', thumbnail: 'https://picsum.photos/100/100?random=9' },
  { id: 10, name: 'Marigold',       price: 8.99, category: 'Outdoor', thumbnail: 'https://picsum.photos/100/100?random=10' },
  { id: 11, name: 'Petunia',        price: 9.99, category: 'Outdoor', thumbnail: 'https://picsum.photos/100/100?random=11' },
  { id: 12, name: 'Sunflower',      price: 7.99, category: 'Outdoor', thumbnail: 'https://picsum.photos/100/100?random=12' },
  // Succulents (6)
  { id: 13, name: 'Aloe Vera',     price: 12.99, category: 'Succulents', thumbnail: 'https://picsum.photos/100/100?random=13' },
  { id: 14, name: 'Echeveria',     price: 9.99, category: 'Succulents', thumbnail: 'https://picsum.photos/100/100?random=14' },
  { id: 15, name: 'Jade Plant',    price: 11.99, category: 'Succulents', thumbnail: 'https://picsum.photos/100/100?random=15' },
  { id: 16, name: 'Haworthia',     price: 8.49, category: 'Succulents', thumbnail: 'https://picsum.photos/100/100?random=16' },
  { id: 17, name: 'Sedum',         price: 7.99, category: 'Succulents', thumbnail: 'https://picsum.photos/100/100?random=17' },
  { id: 18, name: 'Burro’s Tail',  price: 13.99, category: 'Succulents', thumbnail: 'https://picsum.photos/100/100?random=18' },
];

const categories = ['Indoor', 'Outdoor', 'Succulents'];

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  const isInCart = (plantId) => cartItems.some(item => item.id === plantId);

  return (
    <div className="product-list">
      <h2>Our Plants</h2>
      {categories.map(category => (
        <section key={category}>
          <h3>{category} Plants</h3>
          <div className="plant-grid">
            {plants
              .filter(p => p.category === category)
              .map(plant => (
                <div key={plant.id} className="plant-card">
                  <img src={plant.thumbnail} alt={plant.name} width="100" />
                  <h4>{plant.name}</h4>
                  <p>${plant.price.toFixed(2)}</p>
                  <button
                    disabled={isInCart(plant.id)}
                    onClick={() => dispatch(addItem(plant))}
                  >
                    {isInCart(plant.id) ? 'Added' : 'Add to Cart'}
                  </button>
                </div>
              ))}
          </div>
        </section>
      ))}
    </div>
  );
}

export default ProductList;