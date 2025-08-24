import React from "react";
import CartButton from "./CartButton";

function ProductItem({ addToCart }) {
  return (
    <div>
      <h3>Sản phẩm</h3>
      <CartButton addToCart={addToCart} />
    </div>
  );
}

export default ProductItem;
