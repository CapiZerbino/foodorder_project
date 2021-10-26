import React, {useState} from "react";
import Navigation from "./../components/layout/Navigation";
import ProductCategory from './../components/layout/ProductCategory'
import Cart from './../components/layout/Cart'
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import data from './../config/config'

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));



function Order() {
  const {products} = data;
  const [cartItems, setCartItems] = useState([]);

  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
    <Navigation></Navigation>
      <Grid container spacing={0}>
        <Grid item xs={8}> 
          <ProductCategory products = {products} onAdd={onAdd}></ProductCategory>
        </Grid>
        <Grid item xs={4}>
          <Cart cartItems={cartItems}
          onAdd={onAdd}
          onRemove={onRemove}>Cart</Cart>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Order;
