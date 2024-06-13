import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const removeHandler = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center m-4 p-4">
      <h1 className="font-bold text-2xl py-2">Cart</h1>
      <div className="text-right">
        <button
          className=" m-2 p-2 text-white bg-black rounded-lg"
          onClick={removeHandler}
        >
          Clear Cart
        </button>
      </div>
      <div className="w-6/12 m-auto text-start">
        <ItemList items={cartItems} showButton={false}></ItemList>
      </div>
    </div>
  );
};

export default Cart;
