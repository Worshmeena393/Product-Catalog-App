import { Outlet } from "react-router-dom";

export default function ProductsLayout() {
  return (
    <div className="page">
      <h1>Products</h1>
      <p>Browse our available products</p>

      <Outlet />
    </div>
  );
}
