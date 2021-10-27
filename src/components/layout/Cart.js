import React, {useState} from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import AddBoxRoundedIcon from '@mui/icons-material/AddBoxRounded';
import IndeterminateCheckBoxRoundedIcon from '@mui/icons-material/IndeterminateCheckBoxRounded';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import ModelCustomer from './ModelCustomer'
import {Link} from 'react-router-dom'

function smartTrim(str, length, appendix) {
  if (str.length <= length) return str;

  var trimmedStr = str.substr(0, length);

  if (trimmedStr) trimmedStr += appendix;
  return trimmedStr;
}

function Cart(props) {
  const { cartItems, onAdd, onRemove } = props;
  const {coupon, setCoupon} = useState(null);
  const {isValid, setIsValid} = useState(false);
  const {perDiscount, setPerDiscount} = useState(0);

  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const discount = itemsPrice * 0.14;
  const totalPrice = itemsPrice - discount;

  function validateCoupon(cp) {
    if(cp === null) return false;
      var Promotion = "LUCKY100";
      var Amount = 20;
      if(cp.toUpperCase()  === Promotion.toUpperCase()){
        setIsValid(true);
        setPerDiscount(Amount)
        return true;
      } else {
        setIsValid(false)
        return false;
      }
  }


  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        bgcolor: "#fff"
      }}
    >
    <Typography variant="h4" sx={{marginBlock: 3,paddingInlineStart: 1, color: "#2E3A55", fontWeight: "bold"}}>Order: #</Typography> 
    <Grid item container xs={12} sm={12} md={12} sx={{marginBlock: 1}}>
            <Grid item xs={6} container direction="row" justifyContent="flex-start"  alignItems="center">
            <Typography variant="body1" color="black">Item</Typography>
            </Grid>

            <Grid item xs={3}  container direction="row" justifyContent="center"  alignItems="center">
            <Typography variant="body1" color="black">Qty</Typography>
            </Grid>
            <Grid item xs={3} container direction="row" justifyContent="center"  alignItems="center">
                <Typography variant="body1" color="black">Price</Typography>
            </Grid>
    </Grid>
    <Divider sx={{marginBlock: 1}} />  
      {cartItems.length === 0 && <div>Cart is empty</div>}
      <Grid container rowSpacing={{ xs: 1, sm: 2, md: 3 }} >
       
        {cartItems.map((item, index) => (
          <Grid item container xs={12} sm={12} md={12} key={index}>
            <Grid item xs={2} container direction="row" justifyContent="flex-start"  alignItems="center">
            <Avatar
                src={item.image}
                sx={{ width: 56, height: 56, marginRight: 2 }}
              />
            </Grid>
            <Grid item xs={4} container direction="column" justifyContent="flex-start"  alignItems="flex-start">
                <Typography variant="body1" color="black" sx={{color: "#2E3A55", fontWeight: "bold"}}>{smartTrim(item.name, 22, '...')} </Typography>
                <Typography variant="body2" color="#ABBBC2">${item.price} </Typography>
            </Grid>
            <Grid item xs={3}  container direction="row" justifyContent="center"  alignItems="center">
                <IconButton aria-label="Decrease" onClick={() => onRemove(item)}>
                    <IndeterminateCheckBoxRoundedIcon color="action" style={{color: "#E43122"}}/>  
                </IconButton>
                <Typography variant="body1" color="black">{item.qty} </Typography>
                <IconButton aria-label="Increase" onClick={() => onAdd(item)}>
                      <AddBoxRoundedIcon color="action" style={{color: "#E43122"}}/>  
                </IconButton>
            </Grid>
            <Grid item xs={3} container direction="row" justifyContent="center"  alignItems="center">
                <Typography variant="h6" color="#E43122">${item.price.toFixed(2)*item.qty}</Typography>
            </Grid>
          </Grid>
        ))}
        <Divider sx={{marginBlock: 1}}/>   
      </Grid>
      
      <Grid container rowSpacing={{ xs: 1, sm: 2, md: 3 }} >
        <Grid item container xs={12} sm={12} md={12} sx={{marginBlock: 3}}>
            <Grid item xs={9} container direction="row" justifyContent="center"  alignItems="center">
            <TextField id="outlined-required" label="Voucher" size="small"  fullWidth
                placeholder = "Code..."
                value = {coupon}
                onChangeText = {(text) => {setCoupon(text); console.log(coupon)}}
            />
            </Grid>
            <Grid item xs={3} container direction="row" justifyContent="center"  alignItems="center">
                <Button variant="contained" size="large" style={{backgroundColor:"#E43122", borderRadius: 10}}>Check</Button>
            </Grid>
        </Grid>
        <Grid item container xs={12} sm={12} md={12} sx={{ paddingInlineEnd: 4}} direction="row" justifyContent="space-between"  alignItems="center"> 
                <Typography variant="body1" color="black">Items Price</Typography>
                <Typography variant="body1" color="black">${itemsPrice.toFixed(2)}</Typography>  
        </Grid>
        <Grid item container xs={12} sm={12} md={12} sx={{paddingInlineEnd: 4}} direction="row" justifyContent="space-between"  alignItems="center"> 
                <Typography variant="body1" color="black">Discount</Typography>
                <Typography variant="body1" color="black">${discount.toFixed(2)}</Typography>  
        </Grid>
        <Grid item container xs={12} sm={12} md={12} sx={{ paddingInlineEnd: 4}} direction="row" justifyContent="space-between"  alignItems="center"> 
                <Typography variant="h6" color="black" sx={{fontWeight: "bold"}}>Total Price</Typography>
                <Typography variant="h6" color="#E43122" sx={{fontWeight: "bold"}}>${totalPrice.toFixed(2)}</Typography>  
        </Grid>
        <Grid item container xs={12} sm={12} md={12} sx={{ paddingInlineEnd: 4}} direction="row" justifyContent="center"  alignItems="center"> 
          {/* <ModelCustomer></ModelCustomer> */}
          <Link to="/checkout" style={{width: "100%"}}>
              <Button variant="contained" size="large" style={{backgroundColor:"#E43122", height: 50, borderRadius: 10}} fullWidth= {true}>Continue to payment</Button>
          </Link>
         
        </Grid>
      </Grid>
    </Box>
  );
}

export default Cart;
