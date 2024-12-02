import type { Language } from "../types";

export const getStoredLanguage = (): Language => {
  const savedLang = localStorage.getItem("preferred_language") as Language;
  return savedLang || "pl";
};

export const setStoredLanguage = (lang: Language): void => {
  localStorage.setItem("preferred_language", lang);
};
