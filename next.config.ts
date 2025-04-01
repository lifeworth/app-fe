import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  /* config options here */
};

const withAntdLess = require("next-plugin-antd-less");

const withNextIntl = createNextIntlPlugin({})(nextConfig);

export default withAntdLess(withNextIntl);
