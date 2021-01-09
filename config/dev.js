const NAME = "dev";
const DOMAIN = "http://localhost";
const PORT = parseInt(process.env.DEV_APP_PORT) || 3333;

module.exports = {
  NAME,
  DOMAIN,
  PORT,
  BASE_URL: DOMAIN + ":" + PORT,
  JS_NAME: "",
  CSS_NAME: "",
  set JS_NAME_SET(name) {
    this.JS_NAME = name;
  },
  set CSS_NAME_SET(name) {
    this.CSS_NAME = name;
  },
  set FILE_NAMES_SET(names) {
    this.JS_NAME = names.JS_NAME;
    this.CSS_NAME = names.CSS_NAME;
  },
};
