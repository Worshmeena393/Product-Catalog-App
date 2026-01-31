import { Link } from "react-router-dom";
import products from "../data/products";

export default function ProductsList() {
  return (
    <div className="products-grid">
      {products.map((product) => (
        <div className="product-card" key={product.id}>
          <h3>{product.name}</h3>
          <p>Price: ${product.price}</p>
          <p>Category: {product.category}</p>

          <Link to={`/products/${product.id}`}>
            View Details →
          </Link>
        </div>
      ))}
    </div>
  );
}
