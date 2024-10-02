"use client";

import CopyrightIcon from "@mui/icons-material/Copyright";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Box, styled } from "@mui/material";
import { useTranslation } from "react-i18next";

interface IProps {
  onClick: (value: string) => void;
}

export default function TitleItem(props: IProps) {
  const { onClick } = props;
  const { t } = useTranslation();

  return (
    <Wrapper>
      <TitleBox>
        <Title>{t("Own Pcr portfolio")}</Title>
        <CopyRightBox>
          <ExtendCopyRightIcon />
          <CopyRight>By {t("Park Cheol Ryeon")}</CopyRight>
        </CopyRightBox>
      </TitleBox>

      <SnsIconBox>
        <GitHubIcon onClick={() => onClick("git")} />
        <InstagramIcon onClick={() => onClick("insta")} />
        <EmailIcon onClick={() => onClick("email")} />
      </SnsIconBox>
    </Wrapper>
  );
}

const Wrapper = styled(Box)(() => {
  return {
    gap: "24px",
    width: "100%",
    padding: "24px",
    display: "flex",
    flexDirection: "column",

    "@media (max-width:475px)": {
      padding: "12px",
    },
  };
});

const TitleBox = styled(Box)(() => {
  return {
    display: "flex",
    flexDirection: "column",
  };
});

const Title = styled("span")(() => {
  return {
    fontSize: "18px",
    wordBreak: "keep-all",
    fontFamily: "suit-700",
  };
});

const CopyRight = styled("span")(() => {
  return {
    fontSize: "12px",
  };
});

const CopyRightBox = styled(Box)(() => {
  return {
    gap: "4px",
    display: "flex",
  };
});

const ExtendCopyRightIcon = styled(CopyrightIcon)(() => {
  return {
    width: "12px",
    height: "12px",
    padding: "0px",
    marginTop: "2px",
  };
});

const SnsIconBox = styled(Box)(() => {
  return {
    gap: "12px",
    display: "flex",
    alignItems: "center",
    justifyContent: "start",
  };
});
