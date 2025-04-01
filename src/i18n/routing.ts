import { defineRouting } from "next-intl/routing";

export const pathnames = {
  "/": "/",
  "/user": "/user",
  "/dashboard": "/dashboard",
}
export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ["en", "zh"],

  // Used when no locale matches
  defaultLocale: "zh",
  localePrefix: "always",
  pathnames
});
