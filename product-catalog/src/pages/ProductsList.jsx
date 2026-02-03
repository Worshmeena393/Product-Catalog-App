import products from "../data/products";
import ProductCard from "../components/ProductCard";

export default function ProductsList() {
  if (products.length === 0) {
    return <p>No products available.</p>;
  }

  return (
    <div className="products-grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
