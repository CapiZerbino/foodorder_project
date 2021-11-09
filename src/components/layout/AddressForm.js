import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function AddressForm(props) {
  const {sendData} = props;
  const [fullname, setFullName] = useState("");
  const [address, setAdress] = useState("");
  const [phone, setPhone] = useState("");
  const [data, setData] = useState(null);
  const [type, setType] = useState("");
  const [checked, setChecked] = React.useState(false);

  useEffect(() => {
    console.log(checked);
    console.log(data);
    return () => {
    };
  }, [checked, data]);

  const handleChange = (event) => {
    setType(event.target.value);
  };
  const handleConfirm = (event) => {
    setChecked(event.target.value);
    setData({
      name: fullname,
      address: address,
      phone: phone,
    });
    sendData(data)
    
    // console.log(data);
  };

  const handleNameInputChange = (event) => {
    setFullName(event.target.value);
  };
  const handleAddressInputChange = (event) => {
    setAdress(event.target.value);
  };
  const handlePhoneInputChange = (event) => {
    setPhone(event.target.value);
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom sx={{ color: "#252836" }}>
        Choose your type of order
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Order type...</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={type}
              label="Order type"
              onChange={handleChange}
            >
              <MenuItem value="dine-in">Dine In</MenuItem>
              <MenuItem value="delivery">Delivery</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        {type === "delivery" ? (
          <>
            <Grid item xs={12}>
              <Typography variant="h6" sx={{ color: "#252836" }}>
                Shipping address
              </Typography>
            </Grid>

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
                control={
                  <Checkbox color="secondary" name="saveAddress" value="yes"  onChange={handleConfirm} />
                }
                label="Confirm shipping address"
              />
            </Grid>
          </>
        ) : null}
      </Grid>
    </React.Fragment>
  );
}
