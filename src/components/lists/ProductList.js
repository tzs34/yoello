import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import ProductItemRenderer from "../itemRenderers/ProductItemRenderer";
import styled from "styled-components";

const ItemContainer = styled.div`
  padding: 20px;
`;

const useStyles = makeStyles((theme, items) => ({
  root: {
    flexGrow: 1,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

const ProductList = ({ rowNumber, data, spacing = 2 }) => {
  const classes = useStyles();
  return (
    <ItemContainer>
      <Grid container className={classes.root} spacing={2}>
        <Grid container justify="center" spacing={spacing}>
          {data.map(({ abv, name, imageurl }) => (
            <Grid key={name} item>
              <ProductItemRenderer src={imageurl} abv={abv} name={name} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </ItemContainer>
  );
};

export default ProductList;
