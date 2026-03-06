function ShoppingCart({ cartItems, removeFromCart }) {
  return (
    <div>
      <h3>Shopping Cart</h3>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              {item.name} - ${item.price}
              <button onClick={() => removeFromCart(index)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      <p>Total: ${cartItems.reduce((sum, item) => sum + item.price, 0).toFixed(2)}</p>
    </div>
  );
}

export default ShoppingCart;