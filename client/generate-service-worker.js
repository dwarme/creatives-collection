const { generateSW } = require("workbox-build");
const APP_DOMAIN = "http://localhost:8080";

generateSW({
  swDest: "./build/sw.js",
  globDirectory: "./build",
  globPatterns: ["**/*.{png,jpg,jpeg,svg,js,css,woff,woff2,ttf,eot}"],
  runtimeCaching: [
    {
      urlPattern: /\/assets\//,
      handler: "CacheFirst",
      options: {
        cacheName: "image-cache",
        expiration: {
          maxAgeSeconds: 24 * 60 * 60 * 7, // 7 days
        },
      },
    },
    {
      urlPattern: new RegExp(`^${APP_DOMAIN}/graphql`),
      handler: "StaleWhileRevalidate",
      options: {
        cacheName: "graphql-cache",
        expiration: {
          maxAgeSeconds: 60 * 60, // Cache for 1 hour
        },
      },
    },
  ],
})
  .then(({ count, size, warnings }) => {
    console.log("****** SERVICE WORKER GENERATION ********* \n");
    console.log(`Generated ${count} files, totaling ${size} bytes.`);
    warnings.forEach(console.warn);
    console.log("\n\n");
  })
  .catch((error) => {
    console.error("An error occured while generating service worker: ", error);
  });
