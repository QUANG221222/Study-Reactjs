import { useState } from "react";
import ProductList from "./ProductList";
import CartContext from "./CartContext";
function MainShop() {
  const [cartCount, setCartCount] = useState(0);

  const handleCart = () => {
    setCartCount((prev) => prev + 1);
  };
  return (
    <CartContext.Provider value={{ cartCount, handleCart }}>
      <div>
        <h1>Giỏ hàng: {cartCount} sản phẩm</h1>
        <ProductList />
      </div>
    </CartContext.Provider>
  );
}

export default MainShop;
