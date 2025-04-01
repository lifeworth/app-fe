import React from "react";
import { useTranslations } from "next-intl";

export default function page() {
  const t = useTranslations("HomePage");

  return <div>{t("about")}</div>;
}
