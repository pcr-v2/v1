"use client";

import { Box, Button, styled } from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";
import { useTranslation } from "react-i18next";
import { CiGlobe } from "react-icons/ci";

import Menu from "@/app/Layout/Header/Menu";
import Title from "@/app/Layout/Header/Title";
import Translation from "@/app/Layout/Header/Translation";
import { switchLanguage } from "@/i18n/actions";

export default function Header() {
  const router = useRouter();
  const { t } = useTranslation();

  return (
    <Wrapper>
      <Title />
      <Menu />
      <Translation />
    </Wrapper>
  );
}

const Wrapper = styled(Box)(() => {
  return {
    width: "100%",
    display: "flex",
    maxWidth: "1440px",
    padding: "12px 24px",
    backgroundColor: "transparent",
    justifyContent: "space-between",
  };
});
