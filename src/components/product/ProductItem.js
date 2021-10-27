import React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Button from "@mui/material/Button";
import ModelProductItem from './../layout/ModelProductItem'
import Divider from '@mui/material/Divider';
import Grid from "@mui/material/Grid";
function ProductItem(props) {
  const { product } = props;
  return (
    <Card
      sx={{
        maxWidth: 300,
        backgroundColor: "#fff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        borderRadius: 4,
        boxShadow: 3
      }}
    >
      <CardMedia
        component="img"
        image={product.image}
        sx={{ height: 200, maxHeight: 200 }}
      />
      <Grid container  direction="column" justifyContent="center"  alignItems="flex-start"> 
        <Grid item container  sx={{marginInline: 1, marginBlock: 1}} xs={12} sm={12} md={12} direction="row" justifyContent="flex-start"  alignItems="center"> 
            <Typography variant="h6" color="black" gutterBottom>
            {product.name}
          </Typography>
        </Grid>
        <Grid item container  sx={{marginInline: 1 }} xs={12} sm={12} md={12}> 
            <Grid item container xs={6} sm={6} md={6} direction="row" justifyContent="flex-start"  alignItems="center"> 
                <Typography variant="h6" color="#E43122" gutterBottom>
                    ${product.price}
                </Typography>
            </Grid>
            <Grid item container xs={6} sm={6} md={6} direction="row" justifyContent="flex-end"  alignItems="center">   
                  <ModelProductItem product ={product} onAdd={props.onAdd} ></ModelProductItem>
            </Grid>
        </Grid>
      </Grid>
                   

     
    </Card>
  );
}

export default ProductItem;
