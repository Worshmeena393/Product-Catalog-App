import { Link } from "react-router-dom";

export default function NotFoundMessage({ message, linkTo = "/" }) {
  return (
    <div className="not-found">
      <h1>404</h1>
      <p>{message}</p>
      <Link to={linkTo}>Go Home</Link>
    </div>
  );
}
