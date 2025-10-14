import { HiShoppingCart } from "react-icons/hi";
import { useGlobalContext } from "../context/useGlobalContext";

export default function Navbar() {
  const { isLoading, itemCounter } = useGlobalContext();

  return (
    <nav className="nav">
      <header className="nav-header">
        <div className="nav-brand">
          <h4>Cart Shop</h4>
        </div>
        <div className="nav-cart">
          <HiShoppingCart className="icon nav-icon" />
          {!isLoading && <div className="cart-counter">{itemCounter}</div>}
        </div>
      </header>
    </nav>
  );
}
