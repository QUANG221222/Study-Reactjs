import { useState } from "react";
import ProductList from "./ProductList";
function MainShop() {
  const [cartCount, setCartCount] = useState(0);

  const handleCart = () => {
    setCartCount((prev) => prev + 1);
  };
  return (
    <div>
      <h1>Giỏ hàng: {cartCount} sản phẩm</h1>
      <ProductList addToCart={handleCart} />
    </div>
  );
}

export default MainShop;
