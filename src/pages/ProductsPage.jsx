// sample products list
const products = [
  { id: 1, name: 'Laptop', price: 999.99 },
  { id: 2, name: 'Headphones', price: 49.99 },
  { id: 3, name: 'Keyboard', price: 79.99 },
  { id: 4, name: 'Mouse', price: 29.99 },
];

function ProductsPage({ addToCart }) {
  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name} - ${product.price}
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductsPage;