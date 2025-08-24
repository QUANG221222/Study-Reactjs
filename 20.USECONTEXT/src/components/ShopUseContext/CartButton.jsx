import { useContext } from "react";
import CartContext from "./CartContext";

function CartButton() {
  const { cartCount, handleCart } = useContext(CartContext);
  return (
    <div>
      <button onClick={handleCart}>Thêm vào giỏ hàng</button>
      <p>Sản phẩm có trong giỏ hàng hiện tại {cartCount}</p>
    </div>
  );
}

export default CartButton;
