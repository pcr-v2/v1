"use client";

import { styled } from "@mui/material";
import { useRouter } from "next/navigation";

import Logo from "@/assets/images/header/logo.png";

export default function LeftLogo() {
  const router = useRouter();
  return <ImgST src={Logo.src} alt="logo" onClick={() => router.push("/")} />;
}

const ImgST = styled("img")(() => {
  return {
    width: "100%",
    padding: "4px",
    height: "56px",
    maxWidth: "180px",
    cursor: "pointer",
  };
});
