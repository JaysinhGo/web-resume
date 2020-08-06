const NAME = "dev";
const DOMAIN = "http://localhost";
const PORT = parseInt(process.env.DEV_APP_PORT) || 3333;

module.exports = {
  NAME,
  DOMAIN,
  PORT,
  BASE_URL: DOMAIN + ":" + PORT,
};
