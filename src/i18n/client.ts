"use client";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import { options } from "./common";

export function createClientI18n(lang: string) {
  const instance = i18n.createInstance({
    ...options,
    lng: lang,
  });

  instance.use(initReactI18next).init();

  return instance;
}
