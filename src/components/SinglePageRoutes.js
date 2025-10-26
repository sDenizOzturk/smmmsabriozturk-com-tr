import Home from "./home/Home";
import Services from "./services/Services";
import Portfolio from "./office/Office";
import React from "react";
import { Box } from "@mui/material";

export default function SinglePageRoutes({ refs }) {
  return (
    <Box mt={"3rem"}>
      <Home innerRef={refs.refHome} />
      <Services innerRef={refs.refServices} />
      <Portfolio innerRef={refs.refOffice} />
    </Box>
  );
}
