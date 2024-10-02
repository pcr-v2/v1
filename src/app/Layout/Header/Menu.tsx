import { Box, styled } from "@mui/material";
import { motion, Variants } from "framer-motion";
import { useState } from "react";
import { FaCode } from "react-icons/fa6";
import { SiAboutdotme } from "react-icons/si";
import { TbUserHeart } from "react-icons/tb";

import MenuToggle from "@/app/Layout/Header/MenuToggle";

interface IProps {
  isOpen: boolean;
  onClick: () => void;
}

const itemVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 40, transition: { duration: 0.2 } },
};

const underlineVariants = {
  hidden: { width: 0 },
  visible: {
    width: "100%",
  },
};

const MenuLists = ["Skills", "Mind", "About Me"];

export default function Menu(props: IProps) {
  const { isOpen, onClick } = props;

  const [hoverStates, setHoverStates] = useState(
    new Array(MenuLists.length).fill(false),
  );

  const handleMouseEnter = (index: number) => {
    setHoverStates((prevState) => {
      const newState = [...prevState];
      newState[index] = true;
      return newState;
    });
  };

  const handleMouseLeave = (index: number) => {
    setHoverStates((prevState) => {
      const newState = [...prevState];
      newState[index] = false;
      return newState;
    });
  };

  return (
    <FWrapper initial={false} animate={isOpen ? "open" : "closed"}>
      <MenuToggle onClick={() => onClick()} isOpen={isOpen} />

      <FMenuList
        open={isOpen}
        variants={{
          open: {
            clipPath: "inset(0% 0% 0% 0% round 0px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.7,
              delayChildren: 0.3,
              staggerChildren: 0.05,
            },
          },
          closed: {
            clipPath: "inset(10% 50% 80% 50% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.7,
              opacity: 0,
            },
          },
        }}
      >
        {MenuLists.map((data, index) => {
          return (
            <>
              <FMenuItem
                variants={itemVariants}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
              >
                {MappingIcon(data)}
                {data}
              </FMenuItem>
              <FUnderline
                key={data}
                data={data}
                initial="hidden"
                variants={underlineVariants}
                animate={hoverStates[index] ? "visible" : "hidden"}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              />
            </>
          );
        })}
      </FMenuList>
    </FWrapper>
  );
}

const FWrapper = styled(motion.nav)(() => {
  return {
    zIndex: 1,
    position: "relative",
  };
});

const FUnderline = styled(motion.div)<{ data: string }>(({ data }) => {
  return {
    width: "100%",
    height: "0.5px",
    margin: "4px 0px",
    backgroundColor: "#9e9e9e",
    maxWidth: data === "About Me" ? "115px" : "75px",
  };
});

const FMenuList = styled(motion.div)<{ open: boolean }>(({ theme, open }) => {
  return {
    top: 32,
    right: 20,
    display: "flex",
    borderRadius: "8px",
    alignItems: "start",
    position: "absolute",
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "#fff",
    padding: "16px 24px 12px 24px",
    border: "0.5px solid #9e9e9e",
    pointerEvents: open ? "auto" : "none",
  };
});

const FMenuItem = styled(motion.div)(() => {
  return {
    gap: "8px",
    width: "120px",
    display: "flex",
    fontSize: "18px",
    cursor: "pointer",
    lineHeight: "28px",
    alignItems: "center",
    fontFamily: "suit-700",
  };
});

function MappingIcon(data: string) {
  if (data === "Skills") {
    return <FaCode />;
  }
  if (data === "Mind") {
    return <TbUserHeart />;
  }
  if (data === "About Me") {
    return <SiAboutdotme />;
  }
}
