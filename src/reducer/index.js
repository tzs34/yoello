import fetchReducer from "./fetchReducer";
import productReducer from "./productReducer";
import cartReducer from "./cartReducer";
import { foodTypes } from "./types";

const productItem = { data: [], pageNumber: 1 };
let products = new Map();
let cart = new Map();

Object.values(foodTypes).forEach(({ type }) => products.set(type, productItem));

const initialState = {
  currentView: 1,
  loadingData: true,
  loadingDataError: false,
  loadingDataSuccess: false,
  products,
  cart,
};

const combineReducers = (...reducers) => (state = initialState, action) => {
  for (const reducer of reducers) {
    state = reducer(state, action);
  }
  return state;
};

const appReducer = combineReducers(fetchReducer, productReducer, cartReducer);

export { appReducer, initialState };
