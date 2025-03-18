import React, { useState, useEffect } from 'react';
import '../Style/Men.css';

const womensClothingData = [
  {
    id: 1,
    name: 'Floral Print Dress',
    price: 59.99,
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9nKT2423IRqe4y4G9NCnXfyCAtz3qDTVLog&s',
    description: 'Elegant floral dress for any occasion.',
    sizes: ['XS', 'S', 'M', 'L'],
  },
  {
    id: 2,
    name: 'High-Waisted Jeans',
    price: 69.50,
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgo8rGq1lzB7OInkHXgIYhpq2EnBGLKGwkxA&s',
    description: 'Comfortable and stylish high-waisted jeans.',
    sizes: ['24', '26', '28', '30'],
  },
  {
    id: 3,
    name: 'Striped T-Shirt',
    price: 24.99,
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9nKT2423IRqe4y4G9NCnXfyCAtz3qDTVLog&s',
    description: 'Classic striped t-shirt for a casual look.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
  },
  {
    id: 4,
    name: 'Tailored Blazer',
    price: 129.99,
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9nKT2423IRqe4y4G9NCnXfyCAtz3qDTVLog&s',
    description: 'Sophisticated tailored blazer for a professional style.',
    sizes: ['4', '6', '8', '10'],
  },
  {
    id: 5,
    name: 'Knit Sweater',
    price: 49.00,
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9nKT2423IRqe4y4G9NCnXfyCAtz3qDTVLog&s',
    description: 'Cozy knit sweater for cooler days.',
    sizes: ['XS', 'S', 'M', 'L'],
  },
  {
    id: 6,
    name: 'A-Line Skirt',
    price: 59.00,
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfzIx3wRwGXV3owwKDTasA6qHlKKoDDMzAjA&s',
    description: 'Flattering A-line skirt for any occasion.',
    sizes: ['2', '4', '6', '8'],
  },
  {
    id: 7,
    name: 'Leather Jacket',
    price: 199.00,
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjomBgWjldefQXNPO-SFXaO12OghIbqBcnWQ&s',
    description: 'Edgy leather jacket to complete any outfit.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
  },
  {
    id: 8,
    name: 'Wide Belt',
    price: 39.00,
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9nKT2423IRqe4y4G9NCnXfyCAtz3qDTVLog&s',
    description: 'Stylish wide belt to accessorize any look.',
    sizes: ['S', 'M', 'L'],
  },
  {
    id: 9,
    name: 'Cargo Pants',
    price: 59.50,
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfzIx3wRwGXV3owwKDTasA6qHlKKoDDMzAjA&s',
    description: 'Durable cargo pants for a casual and functional style.',
    sizes: ['26', '28', '30', '32'],
  },
];

const WomensClothing = () => {
  const [clothingItems, setClothingItems] = useState(womensClothingData);
  const [selectedSize, setSelectedSize] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error] = useState(null);
  const [quickViewItem, setQuickViewItem] = useState(null);
  const [cart, setCart] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    location: '',
    paymentMethod: 'credit_card',
  });

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

  const handleAddToCart = (item) => {
    if (!selectedSize) {
      alert("Please select a size before adding to cart.");
      return;
    }

    const existingCartItem = cart.find(
      (cartItem) => cartItem.id === item.id && cartItem.selectedSize === selectedSize
    );

    if (existingCartItem) {
      const updatedCart = cart.map((cartItem) =>
        cartItem.id === item.id && cartItem.selectedSize === selectedSize
          ? { ...cartItem, quantity: cartItem.quantity + quantity }
          : cartItem
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...item, selectedSize: selectedSize, quantity: quantity }]);
    }

    setSelectedSize('');
    setQuantity(1);
    alert(`${item.name} (Size: ${selectedSize}) added to cart!`);

    if (quickViewItem) {
      closeQuickView();
    }
  };

  const handleRemoveFromCart = (itemId, size) => {
    const updatedCart = cart.filter(
      (item) => !(item.id === itemId && item.selectedSize === size)
    );
    setCart(updatedCart);
  };

  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value, 10);
    setQuantity(newQuantity > 0 ? newQuantity : 1);
  };

  const openCartModal = () => {
    setIsCartOpen(true);
  };

  const closeCartModal = () => {
    setIsCartOpen(false);
  };

  const openCheckoutModal = () => {
    setIsCheckoutOpen(true);
    setIsCartOpen(false);
  };

  const closeCheckoutModal = () => {
    setIsCheckoutOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCheckoutSubmit = (e) => {
    e.preventDefault();

    alert(`Order placed successfully!
           Name: ${formData.fullName}
           Phone: ${formData.phoneNumber}
           Location: ${formData.location}
           Payment: ${formData.paymentMethod} (Placeholder - no real payment processing)`);

    setCart([]);
    setIsCheckoutOpen(false);
  };

  if (isLoading) {
    return <div className="loading">Loading Women's Clothing...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  return (
    <div className="mens-clothing-container"> {/* same CSS class as men */}
      <header className="header">
        <h1>Women's New Arrivals</h1>
        <button className="cart-button" onClick={openCartModal}>
          View Cart ({cart.length})
        </button>
      </header>

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
            <div className="quantity-selector">
              <label htmlFor={`quantity-${item.id}`}>Quantity:</label>
              <input
                type="number"
                id={`quantity-${item.id}`}
                value={quantity}
                min="1"
                onChange={handleQuantityChange}
              />
            </div>
            <button className="add-to-cart-button" onClick={() => handleAddToCart(item)}>Add to Cart</button>
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
            <div className="quantity-selector">
              <label htmlFor={`quantity-${quickViewItem.id}`}>Quantity:</label>
              <input
                type="number"
                id={`quantity-${quickViewItem.id}`}
                value={quantity}
                min="1"
                onChange={handleQuantityChange}
              />
            </div>
            <button className="add-to-cart-button" onClick={() => handleAddToCart(quickViewItem)}>Add to Cart</button>
          </div>
        </div>
      )}

      {/* Cart Modal */}
      {isCartOpen && (
        <div className="cart-modal">
          <div className="cart-modal-content">
            <span className="close-button" onClick={closeCartModal}>
              ×
            </span>
            <h3>Shopping Cart</h3>
            <ul>
              {cart.map((cartItem) => (
                <li key={`${cartItem.id}-${cartItem.selectedSize}`}>
                  {cartItem.name} (Size: {cartItem.selectedSize}, Quantity: {cartItem.quantity}) - ${cartItem.price.toFixed(2)} each
                  <button onClick={() => handleRemoveFromCart(cartItem.id, cartItem.selectedSize)}>
                    Remove
                  </button>
                </li>
              ))}
            </ul>
            <p>Total: ${cart.reduce((acc, item) => acc + (item.price * item.quantity), 0).toFixed(2)}</p>
            <button onClick={openCheckoutModal}>Checkout</button>
          </div>
        </div>
      )}

      {/* Checkout Modal */}
      {isCheckoutOpen && (
        <div className="checkout-modal">
          <div className="checkout-modal-content">
            <span className="close-button" onClick={closeCheckoutModal}>
              ×
            </span>
            <h3>Checkout</h3>
            <form onSubmit={handleCheckoutSubmit}>
              <div className="form-group">
                <label htmlFor="fullName">Full Name:</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="phoneNumber">Phone Number:</label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="location">Shipping Location:</label>
                <textarea
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="paymentMethod">Payment Method:</label>
                <select
                  id="paymentMethod"
                  name="paymentMethod"
                  value={formData.paymentMethod}
                  onChange={handleInputChange}
                >
                  <option value="credit_card">Credit Card</option>
                  <option value="paypal">PayPal</option>
                  <option value="mobile_money">Mobile Money (Momo)</option>
                </select>
              </div>
              <button type="submit">Place Order</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default WomensClothing;