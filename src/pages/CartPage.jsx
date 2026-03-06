import ShoppingCart from '../components/ShoppingCart';

function CartPage({ cartItems, removeFromCart }) {
  return (
    <div>
      <h2>Your Cart</h2>
      <ShoppingCart cartItems={cartItems} removeFromCart={removeFromCart} />
    </div>
  );
}

export default CartPage;