import React, { useContext, useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroller";
import AlertLoader from "../loaders/AlertLoader";
import ProductList from "../lists/ProductList";
import { ProductContext } from "../../context/ProductContext";
import { fetchBeerData } from "../../service/services";
import {
  fetchingProductData,
  errorFetchingProductTypes,
  successFetchingProductTypes,
} from "../../actions/actions";

const DataView = ({ active, name }) => {
  const [hasMore, setHasMore] = useState(true);
  const { dispatch, state } = useContext(ProductContext);

  const getBeerData = async (pageNumber, name) => {
    dispatch(fetchingProductData());
    let { error, data } = await fetchBeerData(pageNumber, name);
    if (error) {
      dispatch(errorFetchingProductTypes({ error, data, name }));
    } else {
      dispatch(successFetchingProductTypes({ error, data, name }));
    }
  };

  useEffect(() => {
    if (active) {
      getBeerData(1, name);
    }
  }, [active]);

  const loadMoreDataFunc = () => {};

  const { loadingDataError, loadingDataSuccess, products } = state;
  let { data } = products.get(name);
  console.log(data);
  return (
    <InfiniteScroll
      pageStart={0}
      loadMore={loadMoreDataFunc}
      hasMore={hasMore}
      loader={
        <div className="loader" key={0}>
          {!loadingDataSuccess && (
            <AlertLoader
              active={loadingDataError}
              message={"Sorry we could not load your beers"}
              type={"warning"}
            />
          )}
        </div>
      }
    >
      {loadingDataSuccess && <ProductList rowNumber={3} data={data} />}
    </InfiniteScroll>
  );
};

export default DataView;

// {products.map((num) => (
//   <ProductItemRenderer />
// ))}
