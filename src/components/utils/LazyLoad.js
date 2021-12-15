import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import * as React from "react";

export default function CircularIndeterminate() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
        marginBlock: 10
      }}
    >
      <CircularProgress />
      <Typography
        variant="body1"
        sx={{
          fontWeight: "bold",
          color: "#2E3A55",
        }}
      >
        Loading...
      </Typography>
    </Box>
  );
}
