import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { CardActionArea } from '@mui/material';
import Box from '@mui/material/Box';
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import IconButton from '@mui/material/IconButton';
import Typography from "@mui/material/Typography";
import React from "react";
import { connect } from "react-redux";
import { add, remove } from './../../store';
import ModelProductItem from './../layout/ModelProductItem';
function smartTrim(str, length, appendix) {
    if (str.length <= length) return str;
  
    var trimmedStr = str.substr(0, length);
  
    if (trimmedStr) trimmedStr += appendix;
    return trimmedStr;
  }
  
function ProductItemSale(props) {
  const { product } = props;

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Card
      sx={{
        maxWidth: 200,
        backgroundColor: "#fff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        borderRadius: 4,
        boxShadow: 3, 
        marginBlock: 2
      }}
    >
    <CardActionArea >
    <CardMedia
        component="img"
        image={product.image}
        sx={{ height: 100, maxHeight: 100 }}
      />
      <Grid container  direction="column" justifyContent="center"  alignItems="flex-start"> 
        <Grid item container  sx={{marginInline: 1, marginBlock: 1}} xs={12} sm={12} md={12} direction="row" justifyContent="flex-start"  alignItems="center"> 
        
            <Typography variant="h6" color="black" gutterBottom>
            {smartTrim(product.name, 15, '...')} 
          </Typography>
        </Grid>
        <Grid item container  sx={{marginInline: 1 }} xs={12} sm={12} md={12}> 
            <Grid item container xs={10} sm={10} md={10} direction="row" justifyContent="flex-start"  alignItems="center"> 
                <Typography variant="h6" color="#E43122">
                    ${product.price}
                </Typography>
            </Grid>
            <Grid item container xs={2} sm={2} md={2} direction="row" justifyContent="flex-end"  alignItems="center">   
                 
                <Box style={{color: 'red', marginInlineEnd: 6}}>
                  <IconButton aria-label="delete" size="large" style={{color: 'red', marginInlineEnd: 6}}>
                      <ShoppingCartIcon fontSize="medium" onClick={() => props.onAdd(product)}/>
                  </IconButton>
                </Box>
            </Grid>
        </Grid>
      </Grid>
    </CardActionArea>
    <ModelProductItem product ={product} handleClose={handleClose} open={open} ></ModelProductItem>
    </Card>
  );
}
function mapDispatchToProps(dispatch) {
  return {
    onAdd: (product) => dispatch(add(product)),
    onRemove: (product) => dispatch(remove(product))
  };
}
export default connect(null, mapDispatchToProps)(ProductItemSale);
