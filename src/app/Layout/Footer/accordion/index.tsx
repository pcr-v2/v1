"use client";

import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  styled,
} from "@mui/material";
import { ReactNode } from "react";
import { useTranslation } from "react-i18next";

import AccordionItemLists from "@/app/Layout/Footer/accordion/ItemLists";

interface IProps {
  name: string;
  href: string;
  icon: ReactNode;
  children: {
    name: string;
    href: string;
    icon: ReactNode;
  }[];
}
export default function FooterAccordion(props: IProps) {
  const { name, children } = props;
  const { t } = useTranslation();

  return (
    <Wrapper>
      <AccordionSummary
        id={name}
        expandIcon={<ExpandMore sx={{ alignItems: "flex-start" }} />}
      >
        <span style={{ fontFamily: "suit-700", fontSize: "18px" }}>
          {t(name)}
        </span>
      </AccordionSummary>

      <AccordionDetailST>
        {children.map((data) => {
          return (
            <AccordionItemLists
              icon={data.icon}
              href={data.href}
              name={data.name}
              key={`skills icon key ${data.name}`}
            />
          );
        })}
      </AccordionDetailST>
    </Wrapper>
  );
}

const Wrapper = styled(Accordion)(({ theme }) => {
  return {
    "&.MuiPaper-root": {
      margin: 0,
      width: "100%",
      boxShadow: "none",
      minHeight: "0px !important", // Paper의 기본 높이 제거
    },

    "& .MuiAccordionSummary-root": {
      margin: 0,
      padding: 0,
      minHeight: "0px !important", // Summary의 기본 minHeight 제거
      "&.Mui-expanded": {
        minHeight: "0px !important", // 확장된 상태에서도 강제로 설정
      },
    },

    "& .MuiAccordionSummary-content": {
      margin: 0,
      padding: 0,
      display: "flex",
      minHeight: "0px !important", // Content의 기본 minHeight 제거

      "&.Mui-expanded": {
        margin: 0,
        minHeight: "0px !important", // 확장된 상태에서 강제로 설정
      },
    },

    "& .MuiAccordionDetails-root": {
      padding: 0,
      minHeight: "0px !important", // Details의 기본 minHeight 제거
    },

    "& .MuiCollapse-root": {
      margin: 0,
      padding: 0,
      minHeight: "0px !important", // Collapse의 기본 minHeight 제거
    },
  };
});

const AccordionDetailST = styled(AccordionDetails)(() => {
  return {
    gap: "14px",
    display: "flex",
    cursor: "pointer",
    marginTop: "24px",
    flexDirection: "column",

    "@media (max-width:475px)": {
      marginTop: "12px",
    },
  };
});
