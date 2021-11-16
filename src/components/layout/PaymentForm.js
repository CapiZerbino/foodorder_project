import React, { useRef, useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import {
  PayPalScriptProvider,
  PayPalButtons,
  usePayPalScriptReducer,
} from "@paypal/react-paypal-js";

// This values are the props in the UI
const currency = "USD";
const style = { layout: "vertical" };

// Custom component to wrap the PayPalButtons and handle currency changes
const ButtonWrapper = ({ currency,totalPrice, showSpinner, handleSubmit }) => {
  // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
  // This is the main reason to wrap the PayPalButtons in a new component
  const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

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
             
              return orderId;
            });
        }}
        onApprove={function (data, actions) {
          return actions.order.capture().then(function () {
            // Your code here after capture the order
            handleSubmit();
          });
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
  // const paypal = useRef();

  // useEffect(() => {
  //   console.log("Price: " + totalPrice);
  //   window.paypal
  //     .Buttons({
  //       createOrder: (data, actions, err) => {
  //         return actions.order.create({
  //           intent: "CAPTURE",
  //           purchase_units: [
  //             {
  //               description: "Payment for Lau Chay Restaurant",
  //               amount: {
  //                 currency_code: "USD",
  //                 value: totalPrice,
  //               },
  //             },
  //           ],
  //         });
  //       },
  //       onApprove: async (data, actions) => {
  //         const order = await actions.order.capture();
  //         console.log(order);
  //         handleSubmit();
  //       },
  //       onError: (err) => {
  //         console.log(err);
  //       },
  //     })
  //     .render(paypal.current);
  // }, []);

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
