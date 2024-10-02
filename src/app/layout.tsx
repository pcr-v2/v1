import type { Metadata } from "next";

import RootClientLayout from "@/app/Layout/layout.client";
import { getServerI18n, getServerLanguage } from "@/i18n/server";

import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getServerI18n();
  return {
    title: t("철련박"),
    description: t("프론트엔드개발자"),
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const lang = getServerLanguage();
  return (
    <html lang="en">
      <body>
        <RootClientLayout lang={lang}>{children}</RootClientLayout>
      </body>
    </html>
  );
}
