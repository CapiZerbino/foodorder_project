import React , {useRef, useEffect}from 'react'
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

export default function PaymentForm(props) {
  const {totalPrice, handleSubmit} = props;
  const paypal = useRef();
    useEffect(() => {
      console.log("Price: " + totalPrice)
        window.paypal
          .Buttons({
            createOrder: (data, actions, err) => {
              return actions.order.create({
                intent: "CAPTURE",
                purchase_units: [
                  {
                    description: "Payment for Lau Chay Restaurant",
                    amount: {
                      currency_code: "USD",
                      value: totalPrice,
                    },
                  },
                ],
              });
            },
            onApprove: async (data, actions) => {
              const order = await actions.order.capture();
              console.log(order);
              handleSubmit();
            },
            onError: (err) => {
              console.log(err);
            },
          })
          .render(paypal.current);
      }, []);


  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={12}>
          <div ref={paypal}></div>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}