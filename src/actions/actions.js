import React from "react";
import { fetchActionTypes } from "../reducer/types";

const {
  FETCHING_PRODUCT_DATA,
  FETCH_PRODUCT_DATA_ERROR,
  FETCH_PRODUCT_DATA_SUCCESS,
} = fetchActionTypes;

const fetchingProductData = () => {
  return {
    type: FETCHING_PRODUCT_DATA,
  };
};

const errorFetchingProductTypes = (payload) => {
  return {
    type: FETCH_PRODUCT_DATA_ERROR,
    payload,
  };
};

const successFetchingProductTypes = (payload) => {
  return {
    type: FETCH_PRODUCT_DATA_SUCCESS,
    payload,
  };
};

export {
  fetchingProductData,
  errorFetchingProductTypes,
  successFetchingProductTypes,
};
