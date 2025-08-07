import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemListAccordian.jsx";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItem = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="text-center m-4 p-5">
      <h1 className="font-bold">Cart</h1>

      <div className="w-6/12 m-auto">
        <button
          className="p-2 m-2 bg-black text-white rounded-lg"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
        {cartItem.length == 0 && (
          <div>
            <h1>Car is empty Add Items to the cart! </h1>
            <button className="m-2 px-4 py-1 bg-black text-white rounded-lg">
              <a href="/">Back</a>
            </button>
          </div>
        )}
        <ItemList items={cartItem} />
      </div>
    </div>
  );
};

export default Cart;
