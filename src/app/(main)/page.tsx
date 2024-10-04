"use client";

import { Box, Button, styled } from "@mui/material";
import { useRouter } from "next/navigation";
import { useRef } from "react";
import { useTranslation } from "react-i18next";

import { switchLanguage } from "@/i18n/actions";

export default function Main() {
  const { t } = useTranslation();

  const router = useRouter();

  return <Wrapper>메인</Wrapper>;
}

const Wrapper = styled(Box)(() => {
  return {
    gap: "20px",
    width: "100%",
    display: "flex",
    minHeight: "100vh",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
  };
});
