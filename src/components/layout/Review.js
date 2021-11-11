import React , {useState, useEffect} from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';


export default function Review(props) {
  const {cartItems, shipInfo} = props;
  const info = shipInfo
  const itemsPrice = cartItems ? cartItems.reduce((a, c) => a + c.qty * c.price, 0) : 0;
  const discount = itemsPrice * 0.14;
  const totalPrice = itemsPrice - discount;

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
        {cartItems && cartItems.map((product) => (
          <ListItem key={product.name} sx={{ py: 1, px: 0 }}>
            <ListItemText primary={product.name} secondary={product.description} />
            <Typography variant="body2">${product.price}</Typography>
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