import { signal } from "@preact/signals";

const language = signal("");

globalThis.addEventListener("DOMContentLoaded", () => {
  language.value = window.location.pathname.split("/")[1];
});

export const useLanguage = () => language;
