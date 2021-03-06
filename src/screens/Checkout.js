import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Stepper from "@mui/material/Stepper";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import LogoHeader from "../components/utils/LogoHeader";
import AddressForm from "./../components/layout/AddressForm";
import PaymentForm from "./../components/layout/PaymentForm";
import Review from "./../components/layout/Review";
const steps = ["Shipping address", "Review your order", "Payment details"];

function getStepContent(
  step,
  cartItems,
  getData,
  shipInfo,
  discount,
  handleSubmit
) {
  switch (step) {
    case 0:
      return <AddressForm sendData={getData} />;
    case 1:
      return <Review cartItems={cartItems} shipInfo={shipInfo} />;
    case 2:
      return (
        <PaymentForm discount={discount} handleSubmit={handleSubmit} />
      );
    default:
      throw new Error("Unknown step");
  }
}

const theme = createTheme();

function Checkout(props) {
  const [activeStep, setActiveStep] = useState(0);
  const { cartItems, price, discount } = props;
  console.log(props.location.voucherID)
  const [ship, setShip] = useState(null);
  useEffect(() => {
    console.log("Checkout: " + JSON.stringify(ship));
    console.log("Total price: " + discount);
    return () => {};
  }, [ship, discount]);

  const getData = (data) => {
    setShip(data);
    console.log(cartItems);
  };

  const handleNext = () => {
    console.log(activeStep)
    // if(activeStep  === steps.length -1) handleSubmit("cash");
    setActiveStep(activeStep + 1);
    
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleSubmit = (type) => {
    const obj = {
      phoneNumber: ship.phoneNumber,
      total: price.toString(),
      voucher_id: props.location.voucherID,
      address: ship.address,
      payment_method: type,
      order_items: cartItems.map((item) => {
        return {
          menu_id: item.product.id.toString(),
          quantity: item.qty.toString(),
        };
      }),
    };
    axios
      .post(`https://test.greenup.com.vn/api/order`, JSON.stringify(obj))
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err))
    handleNext();
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar
        position="absolute"
        color="default"
        elevation={0}
        sx={{
          position: "relative",
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      >
        <LogoHeader text="Lau Chay Restaurant" type="Checkout"></LogoHeader>
      </AppBar>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper
          variant="outlined"
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
        >
          <Typography component="h1" variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
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
                  We will prepare your order soon.
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(
                  activeStep,
                  cartItems,
                  getData,
                  ship,
                  discount,
                  handleSubmit
                )}
                <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                      Back
                    </Button>
                  )}

                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 3, ml: 1 }}
                    style={{ backgroundColor: "#E43122", borderRadius: 10 }}
                  >
                    {activeStep === steps.length - 1 ? "Place order" : "Next"}
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
function mapStateToProps(state) {
  return { cartItems: state.cart, price: state.total, discount: state.discount };
}
export default connect(mapStateToProps, null)(Checkout);
