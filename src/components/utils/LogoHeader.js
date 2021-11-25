import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import React from "react";
import { Link } from "react-router-dom";
function LogoHeader({ text = "Default", type = "Home" }) {
  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="flex-start"
      alignItems="center"
      sx={{ marginInlineStart: 2 }}
    >
      {type === "Home" && (
          <Box component="div" sx={{
            backgroundColor: "#2E3A55",
            width: 50,
            height: 50,
            marginInline: 2,
            marginBlock: 1,
            borderRadius: 4,
            display:"flex",
            justifyContent: "center",
            alignContent: "center"
          }} >
          <HomeRoundedIcon
          color="action"
          style={{
            color: "#fff",
            width: 40,
            height: 40,
            alignSelf: "center"
          }}
        />
          </Box>
       
      )}
      <Link to="/" style={{ textDecoration: "none" }}>
        <Typography
          variant="h4"
          noWrap
          component="div"
          sx={{
            flexGrow: 1,
            display: { xs: "none", sm: "block" },
            fontWeight: "bold",
            color: "#2E3A55",
          }}
        >
          {text}
        </Typography>
      </Link>
      {type === "Checkout" && (
        <LocalShippingIcon
          color="action"
          style={{
            color: "#2E3A55",
            width: 50,
            height: 50,
            marginInline: 10,
          }}
        />
      )}
    </Box>
  );
}

export default LogoHeader;
