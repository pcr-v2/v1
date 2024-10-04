import { Box, styled } from "@mui/material";

import LeftLogo from "@/app/Layout/Header/LeftLogo";
import RightMenu from "@/app/Layout/Header/RightMenu";

export default function Header() {
  return (
    <Wrapper>
      <LeftLogo />
      <RightMenu />
    </Wrapper>
  );
}

const Wrapper = styled(Box)(({ theme }) => {
  return {
    width: "100%",
    display: "flex",
    maxWidth: "1440px",
    padding: "12px 0px",
    backgroundColor: "transparent",
    justifyContent: "space-between",

    [theme.breakpoints.down("tablet")]: {
      flexWrap: "wrap",
    },
  };
});
