"use server";

import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

import { DEFAULT_LANG, LANG_COOKIE_KEY } from "@/config/shared";

export async function switchLanguage(lang?: string) {
  cookies().set(LANG_COOKIE_KEY, lang ?? DEFAULT_LANG);
  revalidatePath("/");
}
