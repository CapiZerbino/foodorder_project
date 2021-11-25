import Grid from "@mui/material/Grid";
import React from "react";
import ProductItem from "./ProductItem";

function ProductList(props) {
  const { products } = props;
  return (
    <>
      <Grid
        container
        spacing={{ xs: 4, md: 5 }}
        columns={{ xs: 12, sm: 12, md: 12 }}
      >
        {products.map((product, index) => (
          <Grid
            item
            xs={4}
            sm={4}
            md={products.length < 3 ? 12 : 4}
            key={index}
          >
            <ProductItem product={product} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default ProductList;
