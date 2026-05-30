import React, { useState } from 'react';
import { useOrderContext } from '../context/OrderModalContext';
import './ProductsShowcase.css';

export default function ProductsShowcase() {
  const { openModal } = useOrderContext();
  const [addedToCart, setAddedToCart] = useState(null);

  const products = [
    {
      id: 1,
      name: 'Custom Notepad',
      description: 'A5 personalized notepads perfect for daily notes',
      price: 14.99,
      icon: '📝'
    },
    {
      id: 2,
      name: 'Personalized Notebook',
      description: 'Hardcover journal with your pet on the cover',
      price: 24.99,
      icon: '📔'
    },
    {
      id: 3,
      name: 'Gift Cards Set',
      description: 'Cute pet-themed greeting cards (6-pack)',
      price: 19.99,
      icon: '🎁'
    },
    {
      id: 4,
      name: 'Memo Cards',
      description: 'Sticky notes with your pet design (100-pack)',
      price: 9.99,
      icon: '📎'
    },
    {
      id: 5,
      name: 'Greeting Cards',
      description: 'Folded cards perfect for any occasion',
      price: 12.99,
      icon: '💌'
    },
    {
      id: 6,
      name: 'Sticker Sheets',
      description: 'Weather-resistant vinyl stickers (3-pack)',
      price: 7.99,
      icon: '🎨'
    }
  ];

  const handleOrderClick = (product) => {
    openModal(product);
  };

  const handleAddToCart = (productId) => {
    setAddedToCart(productId);
    setTimeout(() => setAddedToCart(null), 1500);
  };

  return (
    <section id="products" className="products-showcase light">
      <div className="container">
        <h2 className="text-center">Our Products</h2>
        <p className="section-subtitle">Explore our collection of adorable custom stationery</p>
        
        <div className="grid grid-3">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-icon">{product.icon}</div>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <div className="product-price">From ${product.price}</div>
              
              <div className="product-actions">
                <button
                  className="btn btn-primary"
                  onClick={() => handleOrderClick(product)}
                >
                  Order Now
                </button>
                <button
                  className={`btn-quick-view ${addedToCart === product.id ? 'added' : ''}`}
                  onClick={() => handleAddToCart(product.id)}
                >
                  {addedToCart === product.id ? '✓ Added!' : 'Quick View'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
