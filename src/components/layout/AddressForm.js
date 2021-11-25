import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";

export default function AddressForm(props) {
  const {sendData} = props;
  const [fullname, setFullName] = useState("");
  const [address, setAdress] = useState("");
  const [phone, setPhone] = useState("");

  const handleNameInputChange = (event) => {
    setFullName(event.target.value);
  };
  const handleAddressInputChange = (event) => {
    setAdress(event.target.value);
  };
  const handlePhoneInputChange = (event) => {
    setPhone(event.target.value);
  };

  function setData() {
    const data = {
      name: fullname,
      phoneNumber: phone,
      address: address
    }
    sendData(data);
  }

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom sx={{ color: "#252836" }}>
      Shipping address
      </Typography>
      <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                required
                id="fullname"
                label="Full name"
                fullWidth
                variant="standard"
                onChange={handleNameInputChange}
                value={fullname}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                id="address"
                name="address"
                label="Address"
                fullWidth
                variant="standard"
                onChange={handleAddressInputChange}
                value={address}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="phone"
                name="phone"
                label="Phone number"
                fullWidth
                variant="standard"
                onChange={handlePhoneInputChange}
                value={phone}
              />
            </Grid>
            <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Use this address for payment details"
            onClick= {() => setData()}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
