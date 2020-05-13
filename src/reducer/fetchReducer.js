import React, { userEducer } from "react";
import { fetchActionTypes } from "./types";

const {
  FETCHING_PRODUCT_DATA,
  FETCH_PRODUCT_DATA_ERROR,
  FETCH_PRODUCT_DATA_SUCCESS,
} = fetchActionTypes;

const fetchReducer = (state, action) => {
  switch (action.type) {
    case FETCHING_PRODUCT_DATA:
      return {
        ...state,
        loadingData: true,
        loadingDataError: false,
        loadingDataSuccess: false,
      };
    case FETCH_PRODUCT_DATA_ERROR:
      return {
        ...state,
        loadingData: false,
        loadingDataError: true,
        loadingDataSuccess: false,
      };
    default:
      return state;
  }
};

export default fetchReducer;
