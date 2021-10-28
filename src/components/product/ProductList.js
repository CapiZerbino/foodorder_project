import React from 'react'
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import ProductItem from './ProductItem'

function ProductList(props) {
    const {products, onAdd} = props;
    return (
    <Box sx={{ flexGrow: 1}}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {products.map((product, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <ProductItem  product ={product} onAdd={onAdd}/>
          </Grid>
        ))}
      </Grid>
    </Box>
    )
}

export default ProductList
