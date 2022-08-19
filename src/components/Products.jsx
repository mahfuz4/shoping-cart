import React from "react";
import { useSelector } from "react-redux";
import Product from "./Product";

export default function Products() {
  const products = useSelector((state) => state.products);

  return (
    <div className="col-span-12 sm:col-span-12 md:col-span-7 lg:col-span-8 xxl:col-span-8">
      {products.map((item) => {
        return (
          <Product
            key={item.id}
            id={item.id}
            count={item.count}
            productName={item.productName}
            price={item.price}
            limit={item.limit}
          />
        );
      })}
    </div>
  );
}
