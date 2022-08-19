import { ADD_TO_CART } from "./actionType";

// action creator
export const addToCartAction = ({ id, productName, price, limit, count }) => {
  console.log("rendered add to cart action");
  return {
    type: ADD_TO_CART,
    payload: {
      id: id,
      productName: productName,
      price: price,
      limit: limit,
      count: count,
    },
  };
};
