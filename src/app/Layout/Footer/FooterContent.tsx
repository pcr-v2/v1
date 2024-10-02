"use client";

import { Box, styled } from "@mui/material";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { TbBrandFramerMotion, TbBrandThreejs } from "react-icons/tb";

interface IProps {
  content: string;
  title: "Skills" | "Mind" | "About Me";
}

export default function FooterContent(props: IProps) {
  const { content, title } = props;

  const { t } = useTranslation();

  const [isHover, setIsHover] = useState(false);

  const router = useRouter();

  const textVariants = {
    hidden: { width: 0 },
    visible: {
      width: title === "Skills" ? "calc(100% + 24px)" : "calc(100% + 4px)",
    },
  };

  const routingFn = (content: string) => {
    if (content === "Node Express") {
      router.push("/skills/node-express");
      return;
    }
    if (content === "Framer Motion") {
      router.push("/skills/framer-motion");
      return;
    }
    router.push(`/skills/${content.toLowerCase()}`);
  };

  return (
    <FWrapper
      onClick={() => routingFn(content)}
      key={`footer icon key ${content}`}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <MappingIcon content={content} />

      <Box sx={{ position: "relative" }}>
        {t(content)}
        <FUnderline
          key={content}
          initial="hidden"
          variants={textVariants}
          animate={isHover ? "visible" : "hidden"}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          title={title}
        />
      </Box>
    </FWrapper>
  );
}

const FWrapper = styled(motion.div)(({ theme }) => {
  return {
    gap: "4px",
    display: "flex",
    alignItems: "center",
    position: "relative",

    "@media (max-width:475px)": {
      fontSize: "12px",
    },
  };
});

const FUnderline = styled(motion.div)<{
  title: "Skills" | "Mind" | "About Me";
}>(({ title }) => {
  return {
    height: "0.5px",
    bottom: "-5px",
    position: "absolute",
    backgroundColor: "#616161",
    left: title === "Skills" ? -20 : 0,
  };
});

const TSIcon = styled(SiTypescript)(() => {
  return {
    margin: 0,
    color: "#3077C6",
    borderRadius: "2px",
    backgroundColor: "#fff",
  };
});

const ReactIcon = styled(FaReact)(() => {
  return {
    margin: 0,
    color: "#61d9fb",
    borderRadius: "2px",
    backgroundColor: "#000",
  };
});

const NextJSIcon = styled(RiNextjsFill)(() => {
  return {
    margin: 0,
    color: "#000",
    borderRadius: "100%",
    backgroundColor: "#e0e0e0",
  };
});

const NodeExpressIcon = styled(FaNodeJs)(() => {
  return {
    margin: 0,
    color: "#59A946",
    borderRadius: "100%",
    backgroundColor: "transparent",
  };
});

const ThreeJSIcon = styled(TbBrandThreejs)(() => {
  return {
    margin: 0,
    color: "#000",
    padding: "1px",
    borderRadius: "100%",
    backgroundColor: "#e0e0e0",
  };
});

function MappingIcon({ content }: { content: string }) {
  if (content === "TypeScript") {
    return <TSIcon />;
  }
  if (content === "React") {
    return <ReactIcon />;
  }
  if (content === "NextJS") {
    return <NextJSIcon />;
  }
  if (content === "Node Express") {
    return <NodeExpressIcon />;
  }
  if (content === "ThreeJS") {
    return <ThreeJSIcon />;
  }
  if (content === "Framer Motion") {
    return <TbBrandFramerMotion />;
  }
}
