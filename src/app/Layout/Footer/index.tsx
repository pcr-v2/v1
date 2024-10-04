import { Box, styled } from "@mui/material";
import { useRouter } from "next/navigation";

import TitleItem from "@/app/Layout/Footer/TitleItem";
import FooterAccordion from "@/app/Layout/Footer/accordion";
import { MENUS } from "@/config/MenuConfig";

export default function Footer() {
  const router = useRouter();

  return (
    <Wrapper>
      <TitleItem onClick={(value: string) => router.push(value)} />

      {MENUS.map((menu) => {
        return (
          <FooterItem key={menu.name}>
            <FooterAccordion
              name={menu.name}
              href={menu.href}
              icon={menu.icon}
              children={menu.children}
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
