/** @type {import('next').NextConfig} */
const nextConfig = {

    images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "bilopoagjfscflcmytae.supabase.co" ,
            port: "",
            pathname: "/storage/v1/object/public/phones/**",
          },
        ],
      },
};



export default nextConfig;
