import React , {useState, useEffect} from 'react';
import axios from "axios";
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AddressForm from './../components/layout/AddressForm';
import PaymentForm from './../components/layout/PaymentForm'
import Review from './../components/layout/Review';


const steps = ['Shipping address', 'Review your order', 'Payment details'];

function getStepContent(step, cartItems, getData, shipInfo, totalPrice, handleSubmit) {
  switch (step) {
    case 0:
      return <AddressForm sendData={getData}/>;
    case 1:
      return <Review cartItems={cartItems} shipInfo={shipInfo}/>;
    case 2:
      return <PaymentForm totalPrice={totalPrice} handleSubmit={handleSubmit}/>;
    default:
      throw new Error('Unknown step');
  }
}

const theme = createTheme();

export default function Checkout(props) {
  const [activeStep, setActiveStep] = useState(0);
  const {cartItems} = (props.location) || {};
  const [ship, setShip] = useState(null);
  const itemsPrice = cartItems ? cartItems.reduce((a, c) => a + c.qty * c.price, 0) : 0;
  const totalPrice = itemsPrice ;
  useEffect(() => {
    console.log("Checkout: " + JSON.stringify(ship));
    console.log("Total price: " + totalPrice);
    return () => {
    };
  }, [ship]);

  const getData = (data) => {
    setShip(data);
    console.log(cartItems);
  }

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleSubmit = () => {
    // event.preventDefault();
    const data = {
      customer_id: "1",
      "phoneNumber": ship.phoneNumber,
      "total": totalPrice.toString() ,
      "voucher_id": null,
      "address": ship.address,
      "payment_method" : "paypal",
      "order_items": cartItems.map((item) => {
          return {"menu_id" : item.id.toString(), "quantity": item.qty.toString()};
        })
      
    }
    console.log(JSON.stringify(data));
    
    axios.post(`http://34.126.93.124/api/order`, JSON.stringify(data))
      .then(res => {
        console.log(res);
        console.log(res.data);
        
      })
    handleNext();
  }
  

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar
        position="absolute"
        color="default"
        elevation={0}
        sx={{
          position: 'relative',
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
          
        }}
      >
        <Toolbar>
          <Typography 
         variant="h4"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, fontWeight: "bold", color: "#2E3A55" }}>
                Lau Chay Restaurant
          </Typography>
        </Toolbar>
      </AppBar>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5}}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Thank you for your order.
                </Typography>
                <Typography variant="subtitle1">
                  Your order number is #2001539.
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep, cartItems, getData, ship, totalPrice, handleSubmit)}
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                      Back
                    </Button>
                  )}

                  <Button
                    variant="contained"
                    onClick={handleNext }
                    sx={{ mt: 3, ml: 1 }}
                    style={{backgroundColor:"#E43122", borderRadius: 10}}
                  >
                    {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
                  </Button>
                </Box>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
      </Container>
    </ThemeProvider>
  );
}