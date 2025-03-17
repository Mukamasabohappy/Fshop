import React, { useState, useEffect } from 'react';
import '../Style/Men.css';

const mensClothingData = [
  {
    id: 1,
    name: 'Slim Fit Linen Shirt',
    price: 49.99,
    imageUrl: ' https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9nKT2423IRqe4y4G9NCnXfyCAtz3qDTVLog&s',
    description: 'Lightweight and breathable.',
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: 2,
    name: 'Modern Chino Shorts',
    price: 39.50,
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgo8rGq1lzB7OInkHXgIYhpq2EnBGLKGwkxA&s',
    description: 'Versatile shorts for a casual look.',
    sizes: ['30', '32', '34', '36'],
  },
  {
    id: 3,
    name: ' T-Shirt',
    price: 34.99,
    imageUrl: ' https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9nKT2423IRqe4y4G9NCnXfyCAtz3qDTVLog&s',
    description: 'Classic black and white striped t-shirt. Great for pirate, mime, or retro costumes.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
  },
  {
    id: 4,
    name: 'Premium Wool Blazer',
    price: 199.99,
    imageUrl: ' https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9nKT2423IRqe4y4G9NCnXfyCAtz3qDTVLog&s',
    description: 'Timeless blazer adds class to outfit.',
    sizes: ['38R', '40R', '42R', '44R'],
  },
  {
    id: 5,
    name: 'Classic Crew Neck Sweater',
    price: 59.00,
    imageUrl: ' https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9nKT2423IRqe4y4G9NCnXfyCAtz3qDTVLog&s',
    description: 'Versatile sweater for layering.',
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: 6,
    name: 'Dark Wash Jeans',
    price: 79.00,
    imageUrl: ' https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfzIx3wRwGXV3owwKDTasA6qHlKKoDDMzAjA&s',
    description: 'Versatile jeans for everyday wear.',
    sizes: ['30', '32', '34', '36'],
  },
  {
    id: 7,
    name: 'Leather Motorcycle Jacket',
    price: 279.00,
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjomBgWjldefQXNPO-SFXaO12OghIbqBcnWQ&s',
    description: 'A classic and edgy leather motorcycle jacket. A timeless piece for any wardrobe.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
  },
  {
    id: 8,
    name: 'Rugged Leather Belt',
    price: 52.00,
    imageUrl: ' https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9nKT2423IRqe4y4G9NCnXfyCAtz3qDTVLog&s',
    description: 'A durable and stylish leather belt to complete any outfit.',
    sizes: ['30', '32', '34', '36', '38', '40'],
  },
  {
    id: 9,
    name: 'Camo Cargo Pants',
    price: 69.50,
    imageUrl: ' https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfzIx3wRwGXV3owwKDTasA6qHlKKoDDMzAjA&s',
    description: 'Durable camo cargo pants.  Ideal for military, survivalist, or adventurer costumes.',
    sizes: ['30', '32', '34', '36', '38'],
  },
];

const WomensClothing = () => {
  const [clothingItems] = useState(mensClothingData);
  const [selectedSize, setSelectedSize] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error] = useState(null);
  const [quickViewItem, setQuickViewItem] = useState(null);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  const handleQuickView = (item) => {
    setQuickViewItem(item);
  };

  const closeQuickView = () => {
    setQuickViewItem(null);
  };

  if (isLoading) {
    return <div className="loading">Loading Men's Clothing...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  return (
    <div className="mens-clothing-container">
      <h1>Men's New Arrivals</h1>
      <div className="clothing-grid">
        {clothingItems.map((item) => (
          <div className="clothing-card" key={item.id}>
            <div className="image-container">
              <img src={item.imageUrl} alt={item.name} />
              <button className="quick-view-button" onClick={() => handleQuickView(item)}>
                Quick View
              </button>
            </div>
            <h2>{item.name}</h2>
            <p className="price">${item.price.toFixed(2)}</p>
            <p className="description">{item.description}</p>
            <div className="size-options">
              {item.sizes.map((size) => (
                <button
                  key={size}
                  className={`size-button ${selectedSize === size ? 'selected' : ''}`}
                  onClick={() => handleSizeSelect(size)}
                >
                  {size}
                </button>
              ))}
            </div>
            <button className="add-to-cart-button">Add to Cart</button>
          </div>
        ))}
      </div>

      {quickViewItem && (
        <div className="quick-view-modal">
          <div className="quick-view-content">
            <span className="close-button" onClick={closeQuickView}>
              ×
            </span>
            <img src={quickViewItem.imageUrl} alt={quickViewItem.name} />
            <h2>{quickViewItem.name}</h2>
            <p className="price">${quickViewItem.price.toFixed(2)}</p>
            <p className="description">{quickViewItem.description}</p>
            <div className="size-options">
              {quickViewItem.sizes.map((size) => (
                <button
                  key={size}
                  className={`size-button ${selectedSize === size ? 'selected' : ''}`}
                  onClick={() => handleSizeSelect(size)}
                >
                  {size}
                </button>
              ))}
            </div>
            <button className="add-to-cart-button">Add to Cart</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default WomensClothing;