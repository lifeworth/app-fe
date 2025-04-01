import { AntdRegistry } from "@ant-design/nextjs-registry";
import "@ant-design/v5-patch-for-react-19";
import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import "../globals.css";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params,
}: Omit<Props, "children">): Promise<Metadata> {
  const { locale } = await params; // Destructure after awaiting params
  const t = await getTranslations({ locale, namespace: "index" });

  return {
    // metadataBase: new URL('http://localhost:3000'),
    title: t("title"),
    description: t("desc"),
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<Props>) {
  const { locale } = await params; // Destructure after awaiting params

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider>
          <AntdRegistry>{children}</AntdRegistry>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
