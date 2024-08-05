/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "unkidishdoghsqyrczjs.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/trainersimage/**",
      },
    ],
  },
};

export default nextConfig;
