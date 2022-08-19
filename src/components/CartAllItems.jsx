import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";

export default function CartAllItems() {
  const cartItems = useSelector((state) => state.cart.cartItem);

  return (
    <div className="col-span-12 sm:col-span-12 md:col-span-5 lg:col-span-4 xxl:col-span-4">
      <div className="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4">
        <div>
          {cartItems.map((item) => {
            return (
              <CartItem
                key={item.id}
                cartProductName={item.productName}
                cartProductCount={item.count}
              />
            );
          })}
        </div>
        <div className="flex justify-center items-center text-center">
          <div className="text-xl font-semibold">
            <p>Total Item</p>
            <p className="text-5xl">0</p>
          </div>
        </div>
      </div>
      <div className="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4">
        <div className="flex justify-center items-center text-center">
          <div className="text-xl font-semibold">
            <p>Total Price</p>
            <p className="text-5xl">0</p>
          </div>
        </div>
      </div>
    </div>
  );
}
