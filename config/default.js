const dev = require("./dev");
const config = {
  dev,
};

module.exports = config[process.env.NODE_ENV];
