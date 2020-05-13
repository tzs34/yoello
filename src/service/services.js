import { foodTypes } from "../reducer/types";

const baseUrl = "https://api.punkapi.com/v2/beers";
const beerPage = "?page=";
const foodType = "&food";
const { ALL_FOODS } = foodTypes;

async function fetchBeerData(pageNumber = 1, food = "") {
  let url =
    food !== ALL_FOODS
      ? `${baseUrl}${beerPage}${pageNumber}${foodType}${food.toLowerCase()}`
      : `${baseUrl}${beerPage}${pageNumber}`;
  return fetchProduct(url);
}

async function fetchProduct(url) {
  try {
    let api_call = await fetch(url);
    let data = await api_call.json();

    // check status here
    return data.length > 0
      ? { error: false, data }
      : { error: true, errorMsg: "No data", data };
  } catch (e) {
    return { error: true, data: null, errorMsg: e };
  }
}

export { fetchBeerData };
