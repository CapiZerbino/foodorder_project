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
import CardMedia from "@mui/material/CardMedia";
import Divider from '@mui/material/Divider';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import IconButton from '@mui/material/IconButton';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 700,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    borderRadius: 4,
    p: 4,
  };

  
function ModelProductItem(props) {
    const { product, onAdd, onRemove } = props;
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };
    return (
        <div>
      {/* <Button variant="contained" size="small" onClick={handleOpen} endIcon={<ShoppingCartIcon />}>Add</Button> */}
      <Box style={{color: 'red', marginInlineEnd: 6}}>
      <IconButton aria-label="delete" size="large" style={{color: 'red', marginInlineEnd: 6}} onClick={handleOpen}>
            <ShoppingCartIcon fontSize="medium" />
      </IconButton>
      </Box>
      
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
            <Grid container rowSpacing={{ xs: 1, sm: 2, md: 3 }}  direction="row" justifyContent="space-between"  alignItems="center">
                <Grid item container xs={2} sm={2} md={2} direction="column" justifyContent="center"  alignItems="center"> 
                    <CardMedia
                            component="img"
                            image={product.image}
                            sx={{ height: 100, maxHeight: 100, width: 100, borderRadius: 4 }}
                        />
                </Grid>
                <Grid item container xs={9} sm={9} md={9} direction="column" justifyContent="center"  alignItems="flex-start"> 
                    <Grid item container xs={12} sm={12} md={12}  direction="row" justifyContent="space-between"  alignItems="center"> 
                        <Grid item container xs={2} sm={2} md={2}  direction="column" justifyContent="center"  alignItems="lfex-start"> 
                            <Typography variant="h6" color="black">SKU</Typography>
                            <Typography variant="body1" color="black">#{product.id}</Typography>
                        </Grid>
                        <Grid item container xs={6} sm={6} md={6}  direction="column" justifyContent="center"  alignItems="flex-start"> 
                            <Typography variant="h6" color="black">{product.category}</Typography>
                            <Typography variant="body1" color="black">{product.name}</Typography>
                        </Grid>
                        <Grid item container xs={4} sm={4} md={4}  direction="column" justifyContent="center"  alignItems="flex-end"> 
                            <Typography variant="h6" color="black">Unit Price</Typography>
                            <Typography variant="body1" color="black">${product.price}</Typography>
                        </Grid>
                    </Grid>
                    <Divider variant="middle" component="li" sx={{width: "100%", marginBlock: 1}} />
                    <Grid item container xs={12} sm={12} md={12}  direction="row" justifyContent="space-between"  alignItems="center"> 
                        <Grid item container xs={6} sm={6} md={6}  direction="column" justifyContent="center"  alignItems="flex-start"> 
                            <Typography variant="h6" color="black">Available Item</Typography>
                            
                        </Grid>
                        <Grid item container xs={6} sm={6} md={6}  direction="row" justifyContent="flex-end"  alignItems="center"> 
                            <Typography variant="body1" color="black">{product.quantity}</Typography>
                        </Grid>
                    </Grid>
                    <Divider variant="middle" component="li" sx={{width: "100%", marginBlock: 1}} />
                    <Grid item container xs={12} sm={12} md={12}  direction="column" justifyContent="space-between"  alignItems="center"> 
                        <Grid item container xs={12} sm={12} md={12}  direction="column" justifyContent="center"  alignItems="flex-start"> 
                            <Typography variant="h6" color="black">Description</Typography>
                        </Grid>
                        <Grid item container xs={12} sm={12} md={12}  direction="row" justifyContent="lex-start"  alignItems="lex-start"> 
                            <Typography variant="body1" color="black">{product.description ? product.description : "No description"}</Typography>
                        </Grid>
                    </Grid>
                    <Grid item container sx={{marginBlock: 1}} xs={12} sm={12} md={12}  direction="column" justifyContent="space-between"  alignItems="center"> 
                        <Button variant="contained" size="large" fullWidth= {true} style={{backgroundColor:"#E43122", height: 50, borderRadius: 10}} onClick={() => props.onAdd(product)}>Add to Cart</Button> 
                    </Grid>
                </Grid>
                
            </Grid>
          </Box>
        </Fade>
      </Modal>
    </div>
    )
}

export default ModelProductItem
