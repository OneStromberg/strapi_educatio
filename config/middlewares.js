module.exports = [
  "strapi::errors",
  "strapi::security",
  "strapi::poweredBy",
  "strapi::logger",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
  {
    name: "strapi::cors",
    config: {
      keepHeaderOnError: true,
      methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "HEAD", "OPTIONS"],
      headers: ["Content-Type", "Authorization", "Origin", "Accept"],
      origin: ["*"],
    },
  },
];
