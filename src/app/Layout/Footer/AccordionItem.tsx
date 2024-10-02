"use client";

import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  styled,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";

import FooterContent from "@/app/Layout/Footer/FooterContent";

interface IProps {
  accordionId: "Skills" | "Mind" | "About Me";
  title: "Skills" | "Mind" | "About Me";
  contents: string[];
}
export default function AccordionItem(props: IProps) {
  const { accordionId, title, contents } = props;

  const router = useRouter();
  const { t } = useTranslation();

  return (
    <Wrapper>
      <AccordionSummary
        id={accordionId}
        expandIcon={<ExpandMore sx={{ alignItems: "flex-start" }} />}
      >
        <span style={{ fontFamily: "suit-700", fontSize: "18px" }}>
          {t(title)}
        </span>
      </AccordionSummary>

      <AccordionDetailST>
        {contents.map((cnt, index) => {
          return (
            <FooterContent
              content={cnt}
              title={title}
              key={`skills icon key ${index}`}
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
