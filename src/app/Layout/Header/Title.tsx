import { styled } from "@mui/material";

import Logo from "@/assets/images/header/logo.png";

export default function Title() {
  return <ImgST src={Logo.src} alt="logo" />;
}

const ImgST = styled("img")(() => {
  return {
    width: "120px",
    height: "44px",
    padding: "4px",
  };
});
