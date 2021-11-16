import React from 'react'
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import ProductItem from './ProductItem'

function ProductList(props) {
    const {products, onAdd, onRemove} = props;
    return (
    <Box sx={{ flexGrow: 1}}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 12, sm: 12, md: 12 }}>
        {products.map((product, index) => (
          <Grid item xs={4} sm={4} md={products.length < 3 ? 12 : 4} key={index}>
            <ProductItem  product ={product} onAdd={onAdd} onRemove={onRemove}/>
          </Grid>
        ))}
      </Grid>
    </Box>
    )
}

export default ProductList
