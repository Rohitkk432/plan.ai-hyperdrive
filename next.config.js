/** @type {import('next').NextConfig} */

const runtimeCaching = require("next-pwa/cache");
const withPWA = require("next-pwa")({
    dest: "public",
    disable: process.env.NODE_ENV === "development",
    runtimeCaching,
});

const nextConfig = withPWA({
    reactStrictMode: true,
    env: {
        // NEXT_PUBLIC_EXPOSED_ENV: process.env.NEXT_PUBLIC_EXPOSED_ENV,
        // exposes client side env
    },
    typescript: {
        ignoreBuildErrors: true,
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
});
module.exports = nextConfig;
module.exports = {
    images: {
        //allowed image domains
        domains: [],
        //allow all
        remotePatterns: [
            {
                protocol: "https",
                hostname: "**",
            },
        ],
    },
};
