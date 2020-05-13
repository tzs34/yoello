import React, { useState, useEffect, useReducer } from "react";
import ProductProvider from "./context/ProductContext";
import { foodTypes } from "../src/reducer/types";

import { SwipeView as SwipeableProductView, ToolBar } from "./components";

const { ALL_FOODS } = foodTypes;

const styles = {
  tabs: {
    background: "#fff",
  },
};

function App() {
  const [index, setindex] = useState(ALL_FOODS.index);

  const handleViewChange = (index) => {
    setindex(index);
  };

  const categories = Object.values(foodTypes);

  return (
    <ProductProvider>
      <div>
        <ToolBar
          index={index}
          categories={categories}
          onChange={handleViewChange}
          style={styles.tabs}
        />
        <SwipeableProductView
          enableMouseEvents
          index={index}
          categories={categories}
          onChangeIndex={handleViewChange}
          onSwipe
        />
      </div>
    </ProductProvider>
  );
}

export default App;
