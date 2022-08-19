import { ADD_TO_CART } from "./actionType";

const initialState = {
  products: [
    {
      id: 1,
      productName: "Asus Vivobook X515MA",
      price: 35500,
      limit: 20,
      count: 0,
    },
    {
      id: 2,
      productName: "Dell E1916HV 18.5 Inch",
      price: 9300,
      limit: 35,
      count: 0,
    },
    {
      id: 3,
      productName: "Canon Eos 4000D 18MP",
      price: 36500,
      limit: 72,
      count: 0,
    },
  ],
  cart: {
    cartItem: [],
    totalItem: 0,
    totalPrice: 0,
  },
};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      const id = action.payload.id;
      const limit = action.payload.limit;
      const copyState = { ...state };

      const incrementTotalItem = (copyState.totalItem += 1);
      // console.log(limit);
      const count = action.payload.count;
      // console.log(count);
      const stateIndex = state.products.findIndex((index) => index.id === id);
      const cartIndex = state.cart.cartItem.findIndex(
        (index) => index.id === id
      );
      // console.log(state);
      // console.log(action.payload);
      console.log(cartIndex);
      if (count <= limit) {
        if (cartIndex < 0) {
          console.log("cart index not found");

          copyState.products[stateIndex].count += 1;
          const copyCart = {
            ...copyState.cart,
          };

          copyCart.cartItem = [...copyCart.cartItem, action.payload];
          copyCart.totalItem = copyState.cart.totalItem += 1;
          copyCart.totalPrice = copyState.cart.totalPrice +=
            action.payload.price;
          // console.log(copyState);
          const obj = {
            ...copyState,
            cart: copyCart,
          };
          return obj;
          // return {
          //   ...state,
          //   products: [
          //     ...state.products,
          //     (state.products[stateIndex].count += 1),
          //   ],
          //   cart: {
          //     ...state.cart,
          //     cartItem: [...state.cart.cartItem, action.payload],
          //     totalItem: incrementTotalItem,
          //     totalPrice: (state.totalPrice += action.payload.price),
          //   },
        } else {
          console.log("exucute");
          copyState.products[stateIndex].count = action.payload.count;
          const copyCart = {
            ...copyState.cart,
          };

          copyCart.cartItem[cartIndex].count += 1;

          copyCart.totalItem = copyCart.totalItem += 1;
          console.log(copyCart.totalItem);
          copyCart.totalPrice = copyCart.totalPrice += action.payload.price;
          const obj = {
            ...copyState,
            cart: copyCart,
          };
          console.log(obj);
          return obj;
        }
        // } else {
        //   return {
        //     ...state,
        //     products: [...state.products, ([stateIndex].concat += 1)],
        //     cart: {
        //       ...state.cart,
        //       cartItem: [
        //         ...state.cart.cartItem,
        //         (state.cart.cartItem[cartIndex].count += 1),
        //       ],
        //       totalItem: incrementTotalItem,
        //       totalPrice: (state.totalPrice += action.payload.price),
        //     },
        //   };
        // }
      } else {
        console.log("limit is less then count");
        return state;
      }

    default:
      return state;
  }
}
