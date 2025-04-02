"use client";
import React, { useState, useEffect } from "react";
import {
  Layout,
  Menu,
  theme,
  Avatar,
  Dropdown,
  ConfigProvider,
  type MenuProps,
} from "antd";
import getNavList from "./menu";
import { useRouter } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { MoonOutlined, SunOutlined } from "@ant-design/icons";
import { getThemeBg } from "@/utils";
import { Link, usePathname } from "@/i18n/navigation";

const { Header, Content, Footer, Sider } = Layout;

interface IProps {
  children: React.ReactNode;
  curActive: string;
  defaultOpen?: string[];
}

const onLogout = () => {
  localStorage.removeItem("isDarkTheme");
};

const items: MenuProps["items"] = [
  {
    key: "1",
    label: (
      <a target="_blank" rel="noopener noreferrer" href="#">
        个人中心
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a target="_blank" rel="noopener noreferrer" href="#">
        切换账户
      </a>
    ),
  },
  {
    key: "3",
    label: (
      <a
        target="_blank"
        onClick={onLogout}
        rel="noopener noreferrer"
        href="/user/login"
      >
        退出登录
      </a>
    ),
  },
];

const CommonLayout: React.FC<IProps> = ({
  children,
  curActive,
  defaultOpen = ["/"],
}) => {
  const {
    token: { borderRadiusLG, colorTextBase, colorWarningText },
  } = theme.useToken();

  const t = useTranslations("global");

  const locale = useLocale();
  const otherLocale: any = locale === "en" ? ["zh", "中"] : ["en", "En"];

  const router = useRouter();
  const pathname = usePathname();
  const navList = getNavList(t);

  const [curTheme, setCurTheme] = useState<boolean>(false);
  const toggleTheme = () => {
    const _curTheme = !curTheme;
    setCurTheme(_curTheme);
    localStorage.setItem("isDarkTheme", _curTheme ? "true" : "");
  };

  const handleSelect = (row: { key: string }) => {
    if (row.key.includes("http")) {
      window.open(row.key);
      return;
    }
    router.push(row.key);
  };

  useEffect(() => {
    const isDark = !!localStorage.getItem("isDarkTheme");
    setCurTheme(isDark);
  }, []);

  return (
    <ConfigProvider
      theme={{
        algorithm: curTheme ? theme.darkAlgorithm : theme.defaultAlgorithm,
      }}
    >
      <Layout>
        <Sider
          theme={curTheme ? "dark" : "light"}
          breakpoint="lg"
          collapsedWidth="0"
          collapsible={true}
          onBreakpoint={(broken) => {}}
          onCollapse={(collapsed, type) => {}}
        >
          <span
            className="inline-block container font-bold text-lg bg-orange-200 p-6 rounded-lg text-center "
            style={getThemeBg(curTheme)}
          >
            Next-Admin
          </span>
          <Menu
            theme={curTheme ? "dark" : "light"}
            mode="inline"
            defaultSelectedKeys={[curActive]}
            items={navList}
            defaultOpenKeys={defaultOpen}
            onSelect={handleSelect}
          />
        </Sider>
        <Layout>
          <Header
            className="flex justify-end"
            style={{ ...getThemeBg(curTheme) }}
          >
            <div className="flex ml-auto items-end">
              <Link
                href={pathname as any}
                locale={otherLocale[0]}
                className="mr-6"
                style={{ ...getThemeBg(curTheme),backgroundColor: '' }}
              >
                {otherLocale[1]}
              </Link>

              <span className="mr-5" onClick={toggleTheme}>
                {!curTheme ? (
                  <SunOutlined style={{ color: colorWarningText }} />
                ) : (
                  <MoonOutlined />
                )}
              </span>

              <div>
                <Dropdown menu={{ items }} placement="bottomLeft" arrow>
                  <Avatar
                    style={{ color: "#fff", backgroundColor: colorTextBase }}
                  >
                    Admin
                  </Avatar>
                </Dropdown>
              </div>
            </div>
          </Header>

          <Content
            className="m-5"
            style={{
              borderRadius: borderRadiusLG,
            }}
          >
            <div
              className="p-24"
              style={{
                minHeight: 520,
                ...getThemeBg(curTheme),
                borderRadius: borderRadiusLG,
              }}
            >
              {children}
            </div>
          </Content>
          <Footer className="text-center">
            ©{new Date().getFullYear()} Created by <a href="#">du</a>
          </Footer>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
};

export default CommonLayout;
