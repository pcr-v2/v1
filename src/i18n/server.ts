import acceptLanguage from "accept-language";
import i18n from "i18next";
import { cookies, headers } from "next/headers";

import { DEFAULT_LANG, LANG_COOKIE_KEY } from "@/config/shared";

import { options } from "./common";

acceptLanguage.languages(["en", "ko"]);

export function getServerLanguage() {
  const cookieLang = cookies().get(LANG_COOKIE_KEY)?.value;
  const headerLang = headers().get("Accept-Language");

  const browserLang = acceptLanguage.get(headerLang);

  return cookieLang ?? browserLang ?? DEFAULT_LANG;
}

export async function createServerI18n(lang: string) {
  const instance = i18n.createInstance({
    ...options,
    lng: lang,
  });

  await instance.init();

  return instance;
}

// getServerLanguage 없이 쓰고 싶을 때
export async function getServerI18n() {
  const lang = getServerLanguage();
  return createServerI18n(lang);
}
