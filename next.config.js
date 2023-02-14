/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  reactStrictMode: true,
  async redirect() {
    return [
      {
        source: "/me",
        destination: "/",
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
