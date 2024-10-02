"use client";

import { Box, styled } from "@mui/material";
import React from "react";

export default function page() {
  return <Wrapper>framer-motion222</Wrapper>;
}

const Wrapper = styled(Box)(() => {
  return {
    gap: "20px",
    width: "100%",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
  };
});
