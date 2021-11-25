import SearchIcon from "@mui/icons-material/Search";
import { Box } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import CircularProgress from "@mui/material/CircularProgress";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import * as React from "react";
import { connect } from "react-redux";
import { add, remove } from './../../store';
import ModelProductItem from "./../layout/ModelProductItem";

function sleep(delay = 0) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

function Search(props) {
  const { menu } = props;
  const [opens, setOpens] = React.useState(false);
  const [options, setOptions] = React.useState([]);
  const loading = opens && options.length === 0;
  const [product, setProduct] = React.useState(null);
  const [popUp, setPopUp] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  React.useEffect(() => {
    let active = true;
    if (!loading) {
      return undefined;
    }

    (async () => {
      await sleep(1e3); // For demo purposes.
      if (active) {
        setOptions([...menu]);
      }
    })();

    return () => {
      active = false;
    };
  }, [loading]);

  React.useEffect(() => {
    if (!opens) {
      setOptions([]);
    }
  }, [opens]);

  function search() {
    console.log(product);
    handleOpen();
    setPopUp(true);
  }

  return (
    <Box display="flex">
      <Autocomplete
        id="asynchronous-demo"
        sx={{ width: 250}}
        open={opens}
        onOpen={() => {
          setOpens(true);
        }}
        onClose={() => {
          setOpens(false);
        }}
        isOptionEqualToValue={(option, value) => option.name === value.title}
        getOptionLabel={(option) => option.name}
        options={options}
        loading={loading}
        onChange={(event, value) => {if(value !==null){setProduct(value)}}}
        renderInput={(params) => (
          <TextField
            {...params}
            size="small"
            label="Search..."
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <React.Fragment>
                  {loading ? (
                    <CircularProgress color="inherit" size={20} />
                  ) : null}
                  {params.InputProps.endAdornment}
                </React.Fragment>
              ),
            }}
          />
        )}
      />
      <IconButton
        type="submit"
        sx={{ p: "10px" }}
        aria-label="search"
        onClick={search}
      >
        <SearchIcon />
      </IconButton>
      {popUp ? (
        <ModelProductItem
          product={product}
          onAdd={props.onAdd}
          onRemove={props.onRemove}
          handleClose={handleClose}
          open={open}
        ></ModelProductItem>
      ) : null}
    </Box>
  );
}
function mapDispatchToProps(dispatch) {
  return {
    onAdd: (product) => dispatch(add(product)),
    onRemove: (product) => dispatch(remove(product))
  };
}
export default connect(null, mapDispatchToProps)(Search);


