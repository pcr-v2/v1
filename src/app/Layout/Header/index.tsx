"use client";

import { Box, Button, styled } from "@mui/material";
import { useCycle, motion } from "framer-motion";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { CiGlobe } from "react-icons/ci";

import Menu from "@/app/Layout/Header/Menu";
import MenuToggle from "@/app/Layout/Header/MenuToggle";
import Title from "@/app/Layout/Header/Title";
import Translation from "@/app/Layout/Header/Translation";
import { switchLanguage } from "@/i18n/actions";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

export default function Header() {
  const router = useRouter();
  const { t } = useTranslation();

  const [isOpen, setIsOpen] = useState(false);

  return (
    <Wrapper>
      <Title />
      {/* <Menu /> */}

      {/* <MenuToggle onClick={() => setIsOpen(!isOpen)} isOpen={isOpen} /> */}
      <Box
        sx={{
          display: "flex",
          gap: "24px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Translation />
        <Menu isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
      </Box>
    </Wrapper>
  );
}

const Wrapper = styled(Box)(() => {
  return {
    width: "100%",
    display: "flex",
    maxWidth: "1440px",
    padding: "12px 0px",
    backgroundColor: "transparent",
    justifyContent: "space-between",
  };
});
