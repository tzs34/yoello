import React, { userEducer } from "react";
import { fetchActionTypes } from "./types";
import { beerFactory } from "../factories/";
const { FETCH_PRODUCT_DATA_SUCCESS } = fetchActionTypes;

const productReducer = (state, { type, payload }) => {
  switch (type) {
    case FETCH_PRODUCT_DATA_SUCCESS:
      const { products } = state;
      const { name, data } = payload;
      if (products.has(name)) {
        products.delete(name);
        products.set(name, { data: beerFactory(data), pageNumber: 1 });
      }

      return {
        ...state,
        products,
        loadingData: false,
        loadingDataSuccess: true,
        loadingDataError: false,
      };

    default:
      return state;
  }
};

export default productReducer;
