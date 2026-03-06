function Header({ currentPage, setCurrentPage, cartItems }) {
  return (
    <nav>
      <h1>My Shop</h1>
      <div>
        <button onClick={() => setCurrentPage('home')} disabled={currentPage === 'home'}>
          Home
        </button>
        <button onClick={() => setCurrentPage('products')} disabled={currentPage === 'products'}>
          Products
        </button>
        <button onClick={() => setCurrentPage('profile')} disabled={currentPage === 'profile'}>
          Profile
        </button>
        <button onClick={() => setCurrentPage('cart')} disabled={currentPage === 'cart'}>
          Cart {cartItems.length > 0 && `(${cartItems.length})`}
        </button>
      </div>
    </nav>
  );
}

export default Header;