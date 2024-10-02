"use client";

import { Box, styled } from "@mui/material";
import { motion } from "framer-motion";
import { useState } from "react";
import { CiGlobe } from "react-icons/ci";

import { switchLanguage } from "@/i18n/actions";
import En from "@/images/header/eng.png";
import Ko from "@/images/header/kor.png";

const Lang_Datas = ["en", "ko"];

export default function Translation() {
  const [openPopper, setOpenPopper] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleLanguage = (lng: "en" | "ko") => {
    switchLanguage(lng);
    setOpenPopper(false); // Popper 닫기
    setIsClicked(false); // 클릭 후 scale 복구
  };

  const handleClick = () => {
    setIsClicked(true);
    setOpenPopper(!openPopper);

    // 클릭 후 scale 원상복구
    setTimeout(() => {
      setIsClicked(false);
    }, 200); // 0.2초 후 복구
  };

  return (
    <FWrapper
      whileHover={{ scale: isClicked ? 1.1 : 1 }}
      whileTap={{ scale: 0.85 }}
      onClick={handleClick}
    >
      <CiGlobe style={{ width: "100%", height: "100%" }} />

      {openPopper && (
        <FPopperBox
          key="lang-popper"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {Lang_Datas.map((el, index) => {
            return (
              <>
                <LangBox onClick={() => handleLanguage(el as "en" | "ko")}>
                  <ImgST src={el === "en" ? En.src : Ko.src} alt={el} />
                  {el}
                </LangBox>
                {index !== Lang_Datas.length - 1}
              </>
            );
          })}
        </FPopperBox>
      )}
    </FWrapper>
  );
}

const FWrapper = styled(motion.div)(() => {
  return {
    zIndex: 1,
    width: "40px",
    height: "40px",
    padding: "2px",
    display: "flex",
    cursor: "pointer",
    alignItems: "center",
    borderRadius: "100%",
    position: "relative",
    justifyContent: "center",
  };
});

const FPopperBox = styled(motion.div)(() => {
  return {
    top: 45,
    right: 10,
    display: "flex",
    padding: "4px 0px",
    borderRadius: "8px",
    position: "absolute",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "#fff",
    border: "1px solid #e0e0e0",
  };
});

const LangBox = styled(Box)(() => {
  return {
    gap: "8px",
    width: "100%",
    display: "flex",
    fontWeight: 800,
    fontSize: "16px",
    padding: "8px 12px",
    alignItems: "center",
    fontFamily: "suit-500",
    justifyContent: "center",
  };
});

const ImgST = styled("img")(() => {
  return {
    width: "24px",
    height: "24px",
  };
});

const Divider = styled(Box)(() => {
  return {
    width: "80%",
    height: "2px",
    display: "flex",
    margin: "4px 0px",
    backgroundColor: "#fafafa",
  };
});
