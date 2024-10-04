import { styled } from "@mui/material";
import { ReactNode } from "react";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { FaCode } from "react-icons/fa6";
import { GoFileCode } from "react-icons/go";
import { MdOutlineConnectWithoutContact } from "react-icons/md";
import { RiNextjsFill } from "react-icons/ri";
import { RiBatteryChargeLine } from "react-icons/ri";
import { RiHandHeartLine } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { SiAboutdotme } from "react-icons/si";
import { TbBrandFramerMotion, TbBrandThreejs } from "react-icons/tb";
import { TbUserHeart } from "react-icons/tb";
import { TfiPencilAlt } from "react-icons/tfi";

import { tForScan } from "@/i18n/common";

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

const DevMindIcon = styled(GoFileCode)(() => {
  return {
    margin: 0,
    color: "#000",
    padding: "1px",
    backgroundColor: "transparent",
  };
});

const CoWorkIcon = styled(MdOutlineConnectWithoutContact)(() => {
  return {
    margin: 0,
    color: "#000",
    padding: "1px",
    backgroundColor: "transparent",
  };
});

const StudyIcon = styled(TfiPencilAlt)(() => {
  return {
    margin: 0,
    color: "#000",
    padding: "1px",
    backgroundColor: "transparent",
  };
});

const HobbyIcon = styled(RiBatteryChargeLine)(() => {
  return {
    margin: 0,
    color: "#000",
    padding: "2px 0px 0px",
    backgroundColor: "transparent",
  };
});

const LifeMindIcon = styled(RiHandHeartLine)(() => {
  return {
    margin: 0,
    color: "#000",
    padding: "1px",
    backgroundColor: "transparent",
  };
});

export type TMenus = {
  name: string;
  href: string;
  icon: ReactNode;
  children: {
    name: string;
    href: string;
    icon: ReactNode;
    scollTo?: string;
  }[];
}[];

export const MENUS: TMenus = [
  {
    name: tForScan("Skills"),
    href: "/skills",
    icon: <FaCode />,
    children: [
      {
        name: tForScan("TypeScript"),
        icon: <TSIcon />,
        href: "/skills/typescript",
      },
      {
        name: tForScan("React"),
        icon: <ReactIcon />,
        href: "/skills/react",
      },
      {
        name: tForScan("NextJS"),
        icon: <NextJSIcon />,
        href: "/skills/nextjs",
      },
      {
        name: tForScan("Node Express"),
        icon: <NodeExpressIcon />,
        href: "/skills/node-express",
      },
      {
        name: tForScan("ThreeJS"),
        icon: <ThreeJSIcon />,
        href: "/skills/threejs",
      },
      {
        name: tForScan("Framer Motion"),
        icon: <TbBrandFramerMotion />,
        href: "/skills/framer-motion",
      },
    ],
  },
  {
    name: tForScan("Mind"),
    href: "/mind",
    icon: <TbUserHeart />,
    children: [
      {
        name: tForScan("Developer's mind"),
        icon: <DevMindIcon />,
        href: "/mind?scrollto=devmind",
      },
      {
        name: tForScan("How to Cowork"),
        icon: <CoWorkIcon />,
        href: "/mind?scrollto=cowork",
      },
    ],
  },
  {
    name: tForScan("About Me"),
    href: "/about-me",
    icon: <SiAboutdotme />,
    children: [
      {
        name: tForScan("Study"),
        icon: <StudyIcon />,
        href: "/about-me?scrollto=study",
      },
      {
        name: tForScan("Hobby"),
        icon: <HobbyIcon />,
        href: "/about-me?scrollto=hobby",
      },
      {
        name: tForScan("Life Mindset"),
        icon: <LifeMindIcon />,
        href: "/about-me?scrollto=mindset",
      },
    ],
  },
];
