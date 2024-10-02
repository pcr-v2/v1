"use client";

import { Box, Button, ThemeProvider } from "@mui/material";
import { useRouter } from "next/navigation";
import { ReactNode, useMemo } from "react";
import { I18nextProvider, useTranslation } from "react-i18next";

import Footer from "@/app/Layout/Footer";
import Header from "@/app/Layout/Header";
import SmootScroll from "@/app/Layout/SmootScroll";
import { switchLanguage } from "@/i18n/actions";
import { createClientI18n } from "@/i18n/client";
import theme from "@/theme";

import { RootToaster } from "./RootToaster";

export type RootClientLayoutProps = {
  lang: string;
  children?: ReactNode;
};

export default function RootClientLayout({
  lang,
  children,
}: RootClientLayoutProps) {
  const i18n = useMemo(() => createClientI18n(lang), [lang]);

  const { t } = useTranslation();

  const router = useRouter();

  return (
    <ThemeProvider theme={theme}>
      <I18nextProvider i18n={i18n}>
        <SmootScroll>
          <Header />

          {children}

          <Footer />
        </SmootScroll>
        <RootToaster max={3} />
      </I18nextProvider>
    </ThemeProvider>
  );
}
