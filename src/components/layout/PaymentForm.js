import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Typography from "@mui/material/Typography";
import { PayPalButtons, PayPalScriptProvider, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import React, { useEffect, useState } from "react";

// This values are the props in the UI
const currency = "USD";
const style = { layout: "vertical" };

// Custom component to wrap the PayPalButtons and handle currency changes
const ButtonWrapper = ({ currency,totalPrice, showSpinner, handleSubmit }) => {
  // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
  // This is the main reason to wrap the PayPalButtons in a new component
  const [{ options, isPending }, dispatch] = usePayPalScriptReducer();
  const [id, setID] = useState("");
  function handleOrderID(e) {
    setID(e);
  }
  useEffect(() => {
    dispatch({
      type: "resetOptions",
      value: {
        ...options,
        currency: currency,
      },
    });
  }, [currency, showSpinner]);

  return (
    <>
      {showSpinner && isPending && <div className="spinner" />}
      <PayPalButtons
        style={style}
        disabled={false}
        forceReRender={[totalPrice, currency, style]}
        fundingSource={undefined}
        createOrder={(data, actions) => {
          return actions.order
            .create({
              purchase_units: [
                {
                  amount: {
                    currency_code: currency,
                    value: totalPrice,
                  },
                },
              ],
            })
            .then((orderId) => {
              // Your code here after create the order
             handleOrderID(orderId);
             console.log(id)
              return orderId;
            });
        }}
        onApprove={function (data, actions) {
          return actions.order.capture().then(function () {
            // Your code here after capture the order
            handleSubmit(id);
          });
        }}
        onError={(err) => {
        console.error('error from the onError callback', err);
        }} 
      />
    </>
  );
};

export default function PaymentForm(props) {
  const { totalPrice, handleSubmit } = props;
  const [select, setSelect] = useState("paypal");

  const handleChange = (event) => {
    setSelect(event.target.value);
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={12}>
          <FormControl fullWidth sx={{ marginBlockEnd: 2 }}>
            <InputLabel id="demo-simple-select-label">Type</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={select}
              label="Payment method"
              onChange={handleChange}
            >
              <MenuItem value={"paypal"}>PayPal</MenuItem>
              <MenuItem value={"cash"}>Cash</MenuItem>
            </Select>
          </FormControl>
          {select === "paypal" && (
            <div style={{ maxWidth: "750px", minHeight: "200px" }}>
              <PayPalScriptProvider
                options={{
                  "client-id": "AZsMLZ_7y5QnrVlDLIwc07XYQ3Xl1ndbx7P7ukOlleeqgxOo_8hHx2gUNoYC4w14A8ooYhxehIcN54Bk",
                  components: "buttons",
                  currency: "USD",
                }}
              >
                <ButtonWrapper currency={currency} totalPrice={totalPrice} showSpinner={false} handleSubmit={handleSubmit} />
              </PayPalScriptProvider>
            </div>
          )}
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
