/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: [
        '@student-os/shared',
        '@student-os/ui',
        '@student-os/graph-viz',
    ],
};

module.exports = nextConfig;
