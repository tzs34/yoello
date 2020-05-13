import React from "react";
import SwipeableViews from "react-swipeable-views";
import DataView from "./DataView";

const SwipeableContainer = ({ index, categories, onChange }) => {
  let children = categories.map((obj) => {
    return <DataView active={obj.index === index} name={obj.type}></DataView>;
  });

  return (
    <SwipeableViews
      enableMouseEvents
      index={index}
      onChangeIndex={({ index }) => {
        if (onChange) {
          onChange(index);
        }
      }}
      onSwipe
    >
      {children}
    </SwipeableViews>
  );
};

export default SwipeableContainer;
