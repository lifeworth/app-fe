import Link from "next/link";
import { Button } from "antd";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("index");
  return (
    <main>
      <div>
        <Link href="/dashboard" style={{ marginRight: 20 }}>
          <Button type="primary">{t("try")}</Button>
        </Link>
      </div>
    </main>
  );
}
