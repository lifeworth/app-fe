import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";
const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true, // 启用严格模式
  sassOptions: {
    additionalData: `$var: red;`,
  },
};

const withNextIntl = createNextIntlPlugin({});

export default withNextIntl({
  ...nextConfig,
});
