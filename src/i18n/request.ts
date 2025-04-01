import { getRequestConfig } from "next-intl/server";
import { hasLocale } from "next-intl";
import { routing } from "./routing";
import { headers } from "next/headers";

export default getRequestConfig(async ({ requestLocale }) => {
  // Typically corresponds to the `[locale]` segment
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;
  const now = (await headers()).get("x-now");
  const timeZone = (await headers()).get("x-time-zone") ?? "Europe/Vienna";
  const messages = (await import(`../../messages/${locale}.json`)).default;

  return {
    now: now ? new Date(now) : undefined,
    timeZone,
    messages,
    locale,
    defaultTranslationValues: {
      globalString: "Global string"
    },
    formats: {
      dateTime: {
        medium: {
          dateStyle: "medium",
          timeStyle: "short",
          hour12: false,
        },
      },
    },
    onError(error) {
      if (
        error.message ===
        (process.env.NODE_ENV === "production"
          ? "MISSING_MESSAGE"
          : "MISSING_MESSAGE: Could not resolve `missing` in `Index`.")
      ) {
        // Do nothing, this error is triggered on purpose
      } else {
        console.error(JSON.stringify(error.message));
      }
    },
    getMessageFallback({ key, namespace }) {
      return (
        "`getMessageFallback` called for " +
        [namespace, key].filter((part) => part != null).join(".")
      );
    },
  };
});
