import Box from "@mui/material/Box";
import { red } from '@mui/material/colors';
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import React, { useEffect } from "react";
import ProductList from "./../product/ProductList";
import FlashSale from './FlashSale';
import ProductSlick from './ProductSlick';
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function ProductCategory(props) {
  const { products } = props;
  const [value, setValue] = React.useState(0);
  const [category, setCategory] = React.useState(null);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function unique(arr) {
    const temp = [];
    arr.map((item) => temp.push(item["category"]));
    return Array.from(new Set(temp)); //
  }

  useEffect(() => {
    setCategory(unique(products));
  }, [products]);

  return (
    <React.Fragment>
    <Box
      sx={{
        width: "100%",
        overflow: "hidden",
      }}
    >
     <List
        sx={{
          height: "100%",
          width: "100%",
          paddingInlineEnd: 1,
        }}
      >
      <FlashSale></FlashSale>
      <ListItem>
        <ProductSlick products={products}></ProductSlick>
      </ListItem>
      </List>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="white"
        variant="scrollable"
        scrollButtons
        allowScrollButtonsMobile
        aria-label="scrollable force tabs example"
      >
        {category ? (
          category.map((item, key) => (
            <Tab sx={{color: red[500], fontWeight: "bold"}} label={item} {...a11yProps({ key })} key={key} />
          ))
        ) : (
          <Tab label="Default" {...a11yProps(0)} />
        )}
      </Tabs>
     
      <List
        sx={{
          overflowY: "auto",
          overflowX: "hidden",
          height: "100%",
          width: "100%",
          paddingInlineEnd: 1,
        }}
      >
        {category ? (
          category.map((item, key) => (
            <ListItem>
              <TabPanel value={value} index={key} >
                <ProductList
                  products={products.filter(function (el) {
                    return el["category"] === item;
                  })}
                />
              </TabPanel>
            </ListItem>
          ))
        ) : (
          <TabPanel value={value} index={0}>
            No Product
          </TabPanel>
        )}
      </List>
    </Box>
    </React.Fragment>
  );
}

export default ProductCategory;
