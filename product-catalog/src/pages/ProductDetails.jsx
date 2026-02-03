import { useParams, useNavigate, Link } from "react-router-dom";
import products from "../data/products";
import Button from "../components/Button";

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.id === Number(id)); // fix

  if (!product) {
    return (
      <div className="page">
        <h2>Product not found</h2>
        <p>The product you are looking for does not exist.</p>
        <Link to="/products">← Back to Products</Link>
      </div>
    );
  }

  return (
    <div className="page product-details">
      <h2>{product.name}</h2>
      <p><strong>Price:</strong> ${product.price}</p>
      <p><strong>Category:</strong> {product.category}</p>
      <p>{product.description}</p>

      <Button onClick={() => navigate(-1)}>Back to Products</Button>
    </div>
  );
}
