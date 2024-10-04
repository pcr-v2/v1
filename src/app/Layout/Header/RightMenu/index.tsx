import { Box, styled } from "@mui/material";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useTranslation } from "react-i18next";

import MenuToggle from "@/app/Layout/Header/RightMenu/MenuToggle";
import Translation from "@/app/Layout/Header/RightMenu/Translation";
import { MENUS } from "@/config/MenuConfig";

const subMenuAnimate = {
  enter: {
    opacity: 1,
    rotateX: 0,
    transition: {
      duration: 0.5,
    },
    display: "block",
  },
  exit: {
    opacity: 0,
    rotateX: -15,
    transition: {
      duration: 0.5,
      delay: 0.3,
    },
    transitionEnd: {
      display: "none",
    },
  },
};

export default function RightMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [hoverState, setHoverState] = useState({ isHover: false, name: "" });

  const { t } = useTranslation();
  const router = useRouter();

  const handleHoverState = (value: string) => {
    setHoverState({ isHover: !hoverState.isHover, name: value });
  };

  return (
    <FWrapper initial={false} animate={isOpen ? "open" : "closed"}>
      {MENUS.map((menu) => {
        return (
          <FPcMenus key={menu.name}>
            <FSubMenu
              id={menu.name}
              whileHover={{ scale: 1.2 }}
              onHoverStart={() => handleHoverState(menu.name)}
              onHoverEnd={() => handleHoverState("")}
            >
              {t(menu.name)}

              <FSubMenuItems
                initial="exit"
                animate={hoverState.isHover ? "enter" : "exit"}
                variants={subMenuAnimate}
                ishover={String(hoverState.isHover) ?? ""}
                matchname={String(menu.name === hoverState.name) ?? ""}
              >
                {hoverState.isHover &&
                  hoverState.name === menu.name &&
                  menu.children.map((child) => (
                    <SingleSubMenuItem
                      key={child.name}
                      onClick={() => router.push(child.href)}
                    >
                      {child.icon}
                      {t(child.name)}
                    </SingleSubMenuItem>
                  ))}
              </FSubMenuItems>
            </FSubMenu>
          </FPcMenus>
        );
      })}

      <MenuToggle onClick={() => setIsOpen(!isOpen)} isOpen={isOpen} />

      <Translation />
    </FWrapper>
  );
}

const FWrapper = styled(motion.nav)(({ theme }) => {
  return {
    zIndex: 1,
    gap: "32px",
    width: "100%",
    display: "flex",
    maxWidth: "500px",
    alignItems: "center",
    position: "relative",
    justifyContent: "center",
    [theme.breakpoints.down("tablet")]: {
      gap: "24px",
      width: "unset",
      flexWrap: "wrap",
      justifyContent: "end",
    },
  };
});

const FPcMenus = styled(motion.div)(({ theme }) => {
  return {
    gap: "8px",
    width: "100%",
    display: "flex",
    fontSize: "20px",
    alignItems: "center",
    fontFamily: "suit-700",
    justifyContent: "center",

    [theme.breakpoints.down("tablet")]: {
      display: "none",
    },
  };
});

const FSubMenu = styled(motion.div)(() => {
  return { cursor: "pointer" };
});

const FSubMenuItems = styled(motion.div)<{
  ishover: string;
  matchname: string;
}>(({ ishover, matchname }) => {
  return {
    right: 0,
    top: "100%",
    borderRadius: "8px",
    position: "absolute",
    padding: ishover === "true" && matchname === "true" ? "8px" : "",
    backgroundColor:
      ishover === "true" && matchname === "true" ? "#fff" : "transparent",
    border:
      ishover === "true" && matchname === "true" ? "1px solid #e0e0e0" : "none",
  };
});

const SingleSubMenuItem = styled(Box)(() => {
  return {
    gap: "8px",
    padding: "8px",
    display: "flex",
    fontSize: "16px",
    cursor: "pointer",
    whiteSpace: "nowrap",
    alignItems: "center",
    fontFamily: "suit-500",

    ":hover": {
      borderRadius: "4px",
      backgroundColor: "#f2f2f2",
    },
  };
});

{
  /* <FMenuList
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
            <React.Fragment key={index}>
              <FMenuItem
                variants={itemVariants}
                // onMouseEnter={() => handleMouseEnter(index)}
                // onMouseLeave={() => handleMouseLeave(index)}
              >
                {MappingIcon(data)}
                {data}
              </FMenuItem>
              <FUnderline
                key={data}
                data={data}
                initial="hidden"
                variants={underlineVariants}
                // animate={hoverStates[index] ? "visible" : "hidden"}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              />
            </React.Fragment>
          );
        })}
      </FMenuList> */
}
