import React from "react";
import CartAllItems from "../components/CartAllItems";
import Header from "../components/Header";
import Products from "../components/Products";

export default function ShopingCart() {
  return (
    <div className="bg-gray-50 h-full md:h-screen">
      <Header>Shopping Cart</Header>
      <div className="grid grid-cols-12 gap-6">
        <Products />
        <CartAllItems />
      </div>
    </div>
  );
}
