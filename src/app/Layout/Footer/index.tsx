import { Box, styled } from "@mui/material";
import { useRouter } from "next/navigation";

import AccordionItem from "@/app/Layout/Footer/AccordionItem";
import TitleItem from "@/app/Layout/Footer/TitleItem";

type TFooterAccordionData = {
  accordionId: "Skills" | "Mind" | "About Me";
  title: "Skills" | "Mind" | "About Me";
  contents: string[];
};

const Footer_Accordion_Datas: TFooterAccordionData[] = [
  {
    title: "Skills",
    accordionId: "Skills",
    contents: [
      "TypeScript",
      "React",
      "NextJS",
      "Node Express",
      "ThreeJS",
      "Framer Motion",
    ],
  },
  {
    title: "Mind",
    accordionId: "Mind",
    contents: ["Developer's Mind", "How To Cowork"],
  },
  {
    title: "About Me",
    accordionId: "About Me",
    contents: ["Study", "Hobby", "Life Mindset"],
  },
];

export default function Footer() {
  const router = useRouter();

  return (
    <Wrapper>
      <TitleItem onClick={(value: string) => router.push(value)} />

      {Footer_Accordion_Datas.map((data) => {
        return (
          <FooterItem key={data.accordionId}>
            <AccordionItem
              title={data.title}
              accordionId={data.accordionId}
              contents={data.contents}
            />
          </FooterItem>
        );
      })}
    </Wrapper>
  );
}

const Wrapper = styled(Box)(() => {
  return {
    width: "100%",
    display: "grid",
    maxWidth: "1440px",
    padding: "40px 32px",
    borderTop: "1px solid #e0e0e0",
    gridTemplateColumns: "1fr 1fr 1fr 1fr",

    "@media (max-width:801px)": {
      padding: "24px 12px",
      gridTemplateColumns: "1fr 1fr",
    },

    "@media (max-width:475px)": {
      gap: "24px",
      gridTemplateColumns: "1fr",
    },
  };
});

const FooterItem = styled(Box)(() => {
  return {
    width: "100%",
    padding: "24px",

    "@media (max-width:475px)": {
      padding: "24px 12px 12px",
      borderTop: "0.5px solid #e0e0e0",
    },
  };
});
