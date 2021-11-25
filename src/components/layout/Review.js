import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import React, { useEffect } from 'react';


export default function Review(props) {
  const {cartItems, shipInfo} = props;
  const info = shipInfo
  const itemsPrice = cartItems ? cartItems.reduce((a, c) => a + c.qty * c.product.price, 0) : 0;
  // const discount = itemsPrice;
  const totalPrice = itemsPrice;

  useEffect(() => {
    console.log("Review: " + info.name + " " + info.address + " " + info.phoneNumber );
    return () => {
    };
  }, [info]);
  
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {cartItems && cartItems.map((item) => (
          <ListItem key={item.product.name} sx={{ py: 1, px: 0 }}>
            <ListItemText primary={item.product.name} secondary={item.product.description} />
            <Typography variant="body2">${item.product.price}</Typography>
          </ListItem>
        ))}
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
           ${totalPrice}
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Shipping
          </Typography>
          <Typography gutterBottom>{info.name ? info.name : " "}</Typography>
          <Typography gutterBottom>{info.phoneNumber ? info.phoneNumber : " "}</Typography>
          <Typography gutterBottom>{info.address ? info.address : " "}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Payment method
          </Typography>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Paypal
          </Typography>
          
        </Grid>
      </Grid>
    </React.Fragment>
  );
}