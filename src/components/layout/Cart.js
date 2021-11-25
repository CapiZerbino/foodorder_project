import AddBoxRoundedIcon from '@mui/icons-material/AddBoxRounded';
import IndeterminateCheckBoxRoundedIcon from '@mui/icons-material/IndeterminateCheckBoxRounded';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from '@mui/material/Divider';
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import List from '@mui/material/List';
import ListItem from "@mui/material/ListItem";
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { add, remove } from './../../store';


var h = window.innerHeight;
const bottomHeight = h* 0.4;
const middleHeight = h * 0.5;
const topHeight = h*0.1;
function smartTrim(str, length, appendix) {
  if (str.length <= length) return str;

  var trimmedStr = str.substr(0, length);

  if (trimmedStr) trimmedStr += appendix;
  return trimmedStr;
}

function Cart(props) {
  const { cartItems, onAdd, onRemove } = props;
  const [cp, setCp] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [perDiscount, setPerDiscount] = useState(0);

  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.product.price, 0);
  const discount = itemsPrice * perDiscount;
  const totalPrice = itemsPrice - discount;

  const handleCouponChange = (event) => {
    setCp(event.target.value);
  };

  function validateCoupon() {
    if(cp === null) return false;
      var Promotion = "LUCKY100";
      var Amount = 0.2;
      if(cp.toUpperCase()  === Promotion.toUpperCase()){
        setIsValid(true);
        setPerDiscount(Amount)
        console.log("True")
        return true;
      } else {
        setIsValid(false)
        setPerDiscount(0);
        console.log("False")
        return false;
      }
  };


  return (
   
    <Paper sx={{ position: 'fixed', height: "100%",paddingInline: 2, overflowY: "hidden",overflowX:"hidden",  width: "inherit"}}  elevation={5}>
    <Box sx={{ height: topHeight}}>
    <Toolbar>
      <ShoppingCartIcon fontSize="large" style={{color: "#E43122", marginInline: 10}}/>
      <Typography variant="h4" sx={{color: "#E43122", fontWeight: "bold"}}>Your cart({cartItems.length})</Typography> 
    </Toolbar>
      <Grid item container xs={12} sm={12} md={12}>
              <Grid item xs={6} container direction="row" justifyContent="flex-start"  alignItems="center">
              <Typography variant="body1" sx={{color: "#2E3A55", fontWeight: "bold"}}>Item</Typography>
              </Grid>

              <Grid item xs={3}  container direction="row" justifyContent="center"  alignItems="center">
              <Typography variant="body1" sx={{color: "#2E3A55", fontWeight: "bold"}}>Qty</Typography>
              </Grid>
              <Grid item xs={3} container direction="row" justifyContent="flex-end"  alignItems="center">
                  <Typography variant="body1" sx={{color: "#2E3A55", fontWeight: "bold"}}>Price</Typography>
              </Grid>
      </Grid>
    </Box>
      
      <Divider sx={{marginBlock: 1}} />  
      {cartItems.length === 0 && <div>Cart is empty</div>}
      <List  sx={{overflowY: "auto", overflowX: "hidden", maxHeight: middleHeight, height: middleHeight ,width: "inherit", paddingInlineEnd: 1}}>
        {cartItems.map((item, index) => (
          <ListItem key={index}>
            <Grid item xs={2} container direction="row" justifyContent="flex-start"  alignItems="center">
            <Avatar
                src={item.product.image}
                sx={{ width: 56, height: 56, marginRight: 2 }}
              />
            </Grid>
            <Grid item xs={4} container direction="column" justifyContent="flex-start"  alignItems="flex-start">
                <Typography variant="body1" color="black" sx={{color: "#2E3A55", fontWeight: "bold"}}>{smartTrim(item.product.name, 22, '...')} </Typography>
                <Typography variant="body2" color="#ABBBC2">${item.product.price} </Typography>
            </Grid>
            <Grid item xs={3}  container direction="row" justifyContent="center"  alignItems="center">
                <IconButton aria-label="Decrease" onClick={() => onRemove(item.product)}>
                    <IndeterminateCheckBoxRoundedIcon color="action" style={{color: "#E43122"}}/>  
                </IconButton>
                <Typography variant="body1" color="black">{item.qty} </Typography>
                <IconButton aria-label="Increase" onClick={() => onAdd(item.product)}>
                      <AddBoxRoundedIcon color="action" style={{color: "#E43122"}}/>  
                </IconButton>
            </Grid>
            <Grid item xs={3} container direction="row" justifyContent="flex-end"  alignItems="center">
                <Typography variant="h6" color="#E43122">${item.product.price.toFixed(2)*item.qty}</Typography>
            </Grid>
          </ListItem>
        ))}
      </List>
      <Divider />   
      <Grid container rowSpacing={{ xs: 1, sm: 1, md: 1 }} sx={{ width: "100%",height: bottomHeight, paddingBlockEnd: 5}}>
        <Grid item  container xs={12} sm={12} md={12} direction="row" justifyContent="space-between"  alignItems="center">
              <TextField 
                  id="voucher" 
                  label="Voucher" 
                  size="small"
                  placeholder = "Code..."
                  sx={{width: "70%", marginInlineEnd: 1}}
                  onChange={handleCouponChange}
                  value={cp}
              />
              <Button variant="contained" size="large" 
              style={{backgroundColor:"#E43122", borderRadius: 10, width: "20%",  height: 40}}
              onClick={validateCoupon}
              >Check</Button>
           
        </Grid>
        <Grid item container xs={12} sm={12} md={12}  direction="row" justifyContent="space-between"  alignItems="center"> 
                <Typography variant="body1" color="black">Items Price</Typography>
                <Typography variant="body1" color="black">${itemsPrice.toFixed(2)}</Typography>  
        </Grid>
        <Grid item container xs={12} sm={12} md={12}  direction="row" justifyContent="space-between"  alignItems="center"> 
                <Typography variant="body1" color="black">Discount</Typography>
                <Typography variant="body1" color="black">${discount.toFixed(2)}</Typography>  
        </Grid>
        <Grid item container xs={12} sm={12} md={12}  direction="row" justifyContent="space-between"  alignItems="center"> 
                <Typography variant="h6" color="black" sx={{fontWeight: "bold"}}>Total Price</Typography>
                <Typography variant="h6" color="#E43122" sx={{fontWeight: "bold"}}>${totalPrice.toFixed(2)}</Typography>  
        </Grid>
        <Grid item container xs={12} sm={12} md={12} direction="row" justifyContent="center"  alignItems="center"> 
        {cartItems.length !== 0 ? 
        (<Link style={{width: "100%", textDecoration: "none"}} to={{pathname: '/checkout', perDiscount }}>
              <Button 
              variant="contained" 
              size="large" 
              style={{backgroundColor:"#E43122", height: 50, borderRadius: 10}} 
              fullWidth= {true} 
              >Continue to payment</Button>
          </Link>) :
          (
            <Link style={{width: "100%", textDecoration: "none"}} to={{pathname: '/'}}>
              <Button 
              variant="contained" 
              size="large" 
              style={{backgroundColor:"#E43122", height: 50, borderRadius: 10}} 
              fullWidth= {true} 
              >Continue to payment</Button>
          </Link>
          )
        }
          
        </Grid>
      </Grid>
      </Paper>
  );
}

function mapStateToProps(state) {
  return { cartItems: state };
}
function mapDispatchToProps(dispatch) {
  return {
    onAdd: (product) => dispatch(add(product)),
    onRemove: (product) => dispatch(remove(product))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
