import React from 'react'
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from "@mui/material/Grid";
import Collapse from '@mui/material/Collapse';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 700,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  const icon = (
    <Paper sx={{ m: 1 }} elevation={4}>
      <Box component="svg" sx={{ width: 100, height: 100 }}>
        <Box
          component="polygon"
          sx={{
            fill: (theme) => theme.palette.common.white,
            stroke: (theme) => theme.palette.divider,
            strokeWidth: 1,
          }}
          points="0,100 50,00, 100,100"
        />
      </Box>
    </Paper>
  );
  
function ModelCustomer() {
  const [open, setOpen] = React.useState(false);
  const [name, setName] = React.useState(null)
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };
    return (
        <div>
      <Button variant="contained" size="large" fullWidth= {true} onClick={handleOpen}>Continue to payment</Button> 
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Grid container rowSpacing={{ xs: 1, sm: 2, md: 3 }}  direction="row" justifyContent="center"  alignItems="center">
                <Grid item container xs={6} sm={6} md={6} sx={{ paddingInlineEnd: 5}} direction="row" justifyContent="center"  alignItems="center"> 
                    <Button variant="contained" size="large" fullWidth= {true} >Dine-in</Button> 
                </Grid>
                <Grid item container xs={6} sm={6} md={6} sx={{ paddingInlineEnd: 5}} direction="row" justifyContent="center"  alignItems="center"> 
                    <Button variant="contained" size="large" fullWidth= {true} onClick={handleChange} >Delivery</Button> 
                </Grid>
                <Grid item xs={12} sm={12} md={12} sx={{ paddingInlineEnd: 5}}> 
                  <Collapse in={checked} sx ={{width: "100%"}} >
                            <Box sx={{width: "50%", display: "flex",flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                                <Typography variant="h5" color="#000000" sx={{marginBlock: 1}}>Customer Information</Typography>
                                <TextField id="outlined-required" label="Full Name" size="small"  fullWidth
                                    sx={{ marginBlock: 1}} 
                                    required
                                    value = {name}
                                    onChangeText = {(text) => {setName(text)}}
                                />
                                <TextField id="outlined-required" label="Phone Number" size="small"  fullWidth
                                    sx={{marginBlock: 1}}
                                    required
                                    value = {name}
                                    onChangeText = {(text) => {setName(text)}}
                                /> 
                                <TextField id="outlined-required" label="Address" size="small"  fullWidth
                                    sx={{ marginBlock: 1}}
                                    required
                                    value = {name}
                                    onChangeText = {(text) => {setName(text)}}
                              /> 
                              
                                <Button variant="contained" size="large" fullWidth= {true} >Submit</Button>
                                               
                         </Box>
                         <Box sx={{width: "50%", display: "flex",flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                            <Typography variant="h5" color="#000000" sx={{marginBlock: 1}}>Your Order: </Typography>
                         </Box>
                  </Collapse>
              </Grid>
            </Grid>
          </Box>
        </Fade>
      </Modal>
    </div>
    )
}

export default ModelCustomer
