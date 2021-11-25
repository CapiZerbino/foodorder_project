import { Box } from "@mui/material";
import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CircularIndeterminate from "./components/layout/LazyLoad";
import "./styles/style.css";
const Checkout = lazy(() => import("./screens/Checkout"));
const Order = lazy(() => import("./screens/Order"));

function App() {
  return (
    <div className="app">
        <Suspense
          fallback={
            <Box>
              <CircularIndeterminate></CircularIndeterminate>Loading...
            </Box>
          }
        >
        <Router>
          <Switch>
            <Route exact path="/" component={Order}></Route>
            <Route path="/checkout" component={Checkout}></Route>
          </Switch>
          </Router>
        </Suspense>
    </div>
  );
}

export default App;
