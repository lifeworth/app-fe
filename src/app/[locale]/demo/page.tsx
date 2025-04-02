"use client";
import React from "react";
import { Empty, Button } from "antd";
import { useRouter } from "next/navigation";
import Layout from "@/components/Layout";

export default function page() {
  const router = useRouter();
  return (
    <Layout curActive="/demo">
      <main className="h-full">
        <Empty description={"正在建设中......"}>
          <Button type="primary" onClick={() => router.push("/dashboard")}>
            返回首页
          </Button>
        </Empty>
      </main>
    </Layout>
  );
}
