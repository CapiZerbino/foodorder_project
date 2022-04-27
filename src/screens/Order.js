import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import axios from "axios";
import React, { useEffect, useState } from "react";
import LogoHeader from "../components/utils/LogoHeader";
import Cart from "./../components/layout/Cart";
import ProductCategory from "./../components/layout/ProductCategory";
import Search from "./../components/layout/Search";
const drawerWidth = 500;
const theme = createTheme();

function Order() {
  const [products, setListProduct] = useState([]);
  useEffect(() => {
    async function fetchdata() {
      try {
        const response = await axios.get(
          `https://e380-116-98-1-157.ap.ngrok.io/api/menu`
        );
        // const response = data;
        // setListProduct(response);
        setListProduct(response.data.data);
        setTimeout(() => {}, 3000);
      } catch (err) {
        console.log(err);
      }
    }
    fetchdata();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }}>
        <CssBaseline />
        <Box
          sx={{
            width: `calc(100% - ${drawerWidth}px)`,
            mr: `${drawerWidth}px`,
          }}
        >
          <AppBar
            position="fixed"
            sx={{
              width: `calc(100% - ${drawerWidth}px)`,
              mr: `${drawerWidth}px`,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center"
            }}
            color="default"
            elevation={0}
            
          >
              <LogoHeader text="POS 3.0 System" type="Home"></LogoHeader>
              <Search menu={products}></Search>
          </AppBar>
          <Box
            component="main"
            sx={{ flexGrow: 1, bgcolor: "background.default", width: "100%" }}
          >
            <Toolbar />
            <ProductCategory products={products}></ProductCategory>
          </Box>
        </Box>

        <Drawer
          sx={{
            height: "100%",
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          variant="permanent"
          anchor="right"
        >
          <Divider />
          <Cart>Cart</Cart>
        </Drawer>
      </Box>
    </ThemeProvider>
  );
}

export default Order;
