import React from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

const ToolBar = ({ index, categories, styles, onChange }) => {
  const renderTabs = (tabs) => {
    return tabs.map(({ type, index }) => (
      <Tab label={type} value={index} key={type} />
    ));
  };

  return (
    <Tabs
      value={index}
      fullWidth
      onChange={(e, index) => {
        if (onChange) {
          onChange(index);
        }
      }}
      style={styles}
    >
      {categories.length > 0 && renderTabs(categories)}
    </Tabs>
  );
};

export default ToolBar;
