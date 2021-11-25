import LoyaltyIcon from "@mui/icons-material/Loyalty";
import { red } from "@mui/material/colors";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import React, { useEffect, useState } from "react";



function FlashSale() {
  const calculateTimeLeft = () => {
    let year = new Date().getFullYear();
    const difference = +new Date(`${2022}-10-1`) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        // days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [year] = useState(new Date().getFullYear());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval, index) => {
    timerComponents.push(
      <span
        style={{
          fontSize: 20,
          width: 30,
          height: 30,
          fontWeight: "bold",
          backgroundColor: "#f44336",
          paddingInline: 2,
          color: "#fff",
          borderRadius: 4,
          marginInline: 5,
          textAlign: "center",
        }}
        key ={index}
      >
        {timeLeft[interval] < 10
          ? "0" + timeLeft[interval]
          : timeLeft[interval]}{" "}
      </span>
    );
  });
  return (
    <ListItem>
      <LoyaltyIcon
        sx={{ marginInlineStart: 2, color: red[500], fontSize: 35 }}
      ></LoyaltyIcon>
      <Typography
        variant="h4"
        sx={{ color: red[500], fontWeight: "bold", marginInlineEnd: 2 }}
      >
        FLASHSALE
      </Typography>
      {timerComponents.length ? timerComponents : <span>Time's up!</span>}
    </ListItem>
  );
}

export default FlashSale;
