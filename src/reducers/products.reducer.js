import { LIST_PRODUCTS } from "../actions/products.action";

const initialState = {};

const productsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LIST_PRODUCTS:
      return payload;
    default:
      return state;
  }
};

export default productsReducer;
