import { styled } from "@mui/material";

import Logo from "@/images/header/logo.png";

export default function Title() {
  return <ImgST src={Logo.src} alt="logo" />;
}

const ImgST = styled("img")(() => {
  return {
    width: "200px",
    height: "60px",
    padding: "8px",
  };
});
