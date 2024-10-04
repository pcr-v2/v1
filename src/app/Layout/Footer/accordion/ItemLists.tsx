"use client";

import { Box, styled } from "@mui/material";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { ReactNode, useState } from "react";

interface IProps {
  name: string;
  href: string;
  icon: ReactNode;
}

export default function AccordionItemLists(props: IProps) {
  const { name, href, icon } = props;

  const [isHover, setIsHover] = useState(false);

  const router = useRouter();

  const textVariants = {
    hidden: { width: 0 },
    visible: {
      width: "calc(100% + 4px)",
    },
  };

  return (
    <FWrapper
      onClick={() => router.push(href)}
      key={`footer icon key ${name}`}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <UnderlineBox>
        {icon} {name}
        <FUnderline
          key={name}
          initial="hidden"
          variants={textVariants}
          animate={isHover ? "visible" : "hidden"}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        />
      </UnderlineBox>
    </FWrapper>
  );
}

const FWrapper = styled(motion.div)(({ theme }) => {
  return {
    gap: "4px",
    display: "flex",
    alignItems: "center",

    "@media (max-width:475px)": {
      fontSize: "12px",
    },
  };
});

const FUnderline = styled(motion.div)(() => {
  return {
    height: "0.5px",
    bottom: "-5px",
    position: "absolute",
    backgroundColor: "#616161",
  };
});

const UnderlineBox = styled(Box)(() => {
  return {
    gap: "8px",
    display: "flex",
    position: "relative",
    alignItems: "center",
  };
});
