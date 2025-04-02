import {
  FundOutlined,
  LayoutOutlined,
  BarChartOutlined,
  DesktopOutlined,
  ScheduleOutlined,
  CalculatorOutlined,
  UserOutlined,
  WalletOutlined,
  BuildOutlined,
  OpenAIOutlined,
  PartitionOutlined,
  FileExcelOutlined,
  PieChartOutlined,
  LinkOutlined,
  FileMarkdownOutlined,
} from "@ant-design/icons";
import React from "react";

const getNavList = (t: any) => {
  return [
    {
      key: "/",
      icon: <DesktopOutlined />,
      label: t("dashboard"),
      children: [
        {
          key: "/dashboard",
          icon: <BarChartOutlined />,
          label: t("customChart"),
        },
        {
          key: "/dashboard/monitor",
          icon: <FundOutlined />,
          label: t("monitor"),
        },
        {
          key: "/dashboard/chart",
          icon: <PieChartOutlined />,
          label: t("chart"),
        },
        {
          key: "/dashboard/rpa",
          icon: <PartitionOutlined />,
          label: t("rpa"),
        },
      ],
    },
    {
      key: "/user",
      icon: <UserOutlined />,
      label: t("userManage"),
    },
    {
      key: "/agents",
      icon: <OpenAIOutlined />,
      label: t("agents"),
    },
    {
      key: "/excel",
      icon: <FileExcelOutlined />,
      label: t("excel"),
    },
    {
      key: "/md",
      icon: <FileMarkdownOutlined />,
      label: t("mdDoc"),
    },
    {
      key: "http://flowmix.turntip.cn/docx",
      icon: <LinkOutlined />,
      label: t("outlink"),
    },
    {
      key: "/formEngine",
      icon: <CalculatorOutlined />,
      label: t("formEngine"),
    },
    {
      key: "/dragMode",
      icon: <BuildOutlined />,
      label: t("dragMode"),
    },
    {
      key: "/board",
      icon: <LayoutOutlined />,
      label: t("board"),
    },
    {
      key: "/order",
      icon: <ScheduleOutlined />,
      label: t("orderList"),
    },
    {
      key: "/resource",
      icon: <WalletOutlined />,
      label: t("resource"),
    },
    {
      key: "/demo",
      icon: <WalletOutlined />,
      label: t("demo"),
    },
  ];
};

export default getNavList;
