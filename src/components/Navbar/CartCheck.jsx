import { Trash2, X } from "lucide-react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeProduct, resetCart } from "../../context/CartReducer";
import { loadStripe } from "@stripe/stripe-js";
import { makeRequiest } from "../../makeRequest";

function CartCheck({ setShowCart }) {
  const products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();

  const totalPrice = () => {
    let total = 0;
    products.forEach((item) => (total += item.price * item.quantity));
    return total.toFixed(2);
  };

  const stripePromise = loadStripe(
    "pk_test_51PAwakP09DANcPEqoCtQAqOSzAKAE8fqlr95tCaKZMj87FbBGhpvm19A3nR3GO54lcPQXQilwemCmT2mQ6ZxXsyi00XODc9P3w"
  );

  const handlePayment = async () => {
    try {
      const stripe = await stripePromise;
      const res = await makeRequiest.post("/orders", { products });
      await stripe.redirectToCheckout({
        sessionId: res.data.stripeSession.id,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="absolute top-[50px] right-0 w-[350px] bg-white p-4 z-30 shadow-lg">
      <h1 className="text-3xl text-gray-400 font-medium relative">
        Products in your cart
        <X
          className="absolute -top-2 -right-3 text-black cursor-pointer border border-gray-600 rounded-full"
          onClick={() => {
            setShowCart(false);
          }}
        />
      </h1>
      {products?.map((item) => (
        <div
          className="flex items-center justify-between mt-2 border-b-2 border-black pb-2 gap-3 cursor-pointer"
          key={item?.id}
        >
          <div className="flex items-center gap-5">
            <img src={item?.img} alt="" className="w-12" />
            <div className="details">
              <h1 className="text-xl font-medium text-gray-900">
                {item?.title}
              </h1>
              <p className="line-clamp-1">{item?.desc?.substring(0, 100)}</p>
              <div className="text-sm mt-2 font-bold">
                {item?.quantity} x ${item?.price}
              </div>
            </div>
          </div>
          <Trash2
            size={30}
            className="text-red-500"
            onClick={() => dispatch(removeProduct(item.id))}
          />
        </div>
      ))}
      <div className="flex justify-between items-center mt-2 text-gray-700 text-lg font-medium">
        <span>SUBTOTAL</span>
        <span>${totalPrice()}</span>
      </div>
      <div className="flex items-center justify-between mt-3">
        <button
          className="bg-blue-600 text-white rounded-lg px-3 py-1 font-medium text-lg"
          onClick={handlePayment}
        >
          PROCEED TO CHECKOUT
        </button>
        <span
          className="text-red-500 cursor-pointer"
          onClick={() => dispatch(resetCart())}
        >
          Reset Cart
        </span>
      </div>
    </div>
  );
}

export default CartCheck;
