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

function ProductItem(props) {
  const { product } = props;
  return (
    <Card
      sx={{
        maxWidth: 300,
        backgroundColor: "#1F1D2B",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      <CardMedia
        component="img"
        image={product.image}
        sx={{ height: 200, maxHeight: 200 }}
      />
      <Typography variant="h6" color="white" gutterBottom align="center">
      {product.name}
      </Typography>
      <Typography variant="subtitle1" color="white">
        ${product.price}
      </Typography>
      <CardActions disableSpacing>
        <IconButton aria-label="add to cart">
          <Button
            variant="contained"
            endIcon={<ShoppingCartIcon />}
            onClick={() => props.onAdd(product)}
          >
            Add to card
          </Button>
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default ProductItem;
