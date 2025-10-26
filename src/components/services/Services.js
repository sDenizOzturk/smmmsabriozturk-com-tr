import React from "react";
import Style from "./Services.module.scss";
import { Box } from "@mui/material";
import { info } from "../../info/Info";

import MSWord from "./MSWord";

export default function Services({ innerRef }) {
  return (
    <Box
      ref={innerRef}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      mt={"2rem"}
      id={"services"}
    >
      <MSWord services={info.services} />
    </Box>
  );
}
