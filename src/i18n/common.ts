import { InitOptions } from "i18next";

import en from "../translations/en.json";
import ko from "../translations/ko.json";

export const resources = {
  en: {
    default: en,
  },
  ko: {
    default: ko,
  },
};

export const options: InitOptions = {
  resources,
  fallbackLng: "ko",
  debug: false,
  defaultNS: "default",
  interpolation: { escapeValue: true },
  returnObjects: true,
  returnEmptyString: false,
  returnNull: true,
};

export const tForScan = (key: string) => key;
