const fetchActionTypes = {
  FETCHING_PRODUCT_DATA: "FETCHING_PRODUCT_DATA",
  FETCH_PRODUCT_DATA_ERROR: "FETCH_PRODUCT_DATA_ERROR",
  FETCH_PRODUCT_DATA_SUCCESS: "FETCH_PRODUCT_DATA_SUCCESS",
};
const foodTypes = {
  ALL_FOODS: { type: "ALL FOODS", index: 0 },
  PIZZA_FOOD: { type: "PIZZA", index: 1 },
  STEAK_FOOD: { type: "STEAK", index: 2 },
};

export { foodTypes, fetchActionTypes };
