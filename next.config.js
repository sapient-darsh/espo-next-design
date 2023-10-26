module.exports = {
  reactStrictMode: true,
  devIndicators: {
    buildActivity: false,
  },
  images: {
    formats: ["image/webp"],
    domains: ["healcap-bucket.s3.ap-south-1.amazonaws.com"],
  },
  // env: {
  //   BACKEND_SERVER_URL: process.env.BACKEND_SERVER_URL,
  //   NEXT_PUBLIC_RECAPTCHA_SITE_KEY: process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
  //   NEXT_APP_SECRET_KEY: process.env.NEXT_APP_SECRET_KEY,
  // },
};
