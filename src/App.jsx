import { useState } from 'react';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ProfilePage from './pages/ProfilePage';
import CartPage from './pages/CartPage';
import ShoppingCart from './components/ShoppingCart';

function App() {
  // lifted cart state up to App so all pages can access it
  const [cartItems, setCartItems] = useState([]);
  const [currentPage, setCurrentPage] = useState('home');

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (index) => {
    const updated = cartItems.filter((_, i) => i !== index);
    setCartItems(updated);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'products':
        return <ProductsPage addToCart={addToCart} />;
      case 'profile':
        return <ProfilePage />;
      case 'cart':
        return <CartPage cartItems={cartItems} removeFromCart={removeFromCart} />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div>
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} cartItems={cartItems} />

      <main>
        {renderPage()}

        {/* show cart summary on every page if there are items, but not on the cart page itself */}
        {cartItems.length > 0 && currentPage !== 'cart' && (
          <ShoppingCart cartItems={cartItems} removeFromCart={removeFromCart} />
        )}
      </main>
    </div>
  );
}

export default App;