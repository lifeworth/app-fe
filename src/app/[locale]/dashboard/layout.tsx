import {
  NextIntlClientProvider,
  useMessages,
  hasLocale,
  Locale,
} from "next-intl";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { use } from "react";
import { setRequestLocale } from "next-intl/server";
type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: Locale }>;
};

export default function LocaleLayout({ children, params }: Props) {
  const messages = useMessages();

  const { locale } = use(params);

  setRequestLocale(locale);

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}
