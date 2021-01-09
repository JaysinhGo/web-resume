import express from "express";
import path from "path";
import exphbs from "express-handlebars";
import bodyParser from "body-parser";
import config from "config";
import fse from "fs-extra";
import router from "../routers";
global.appRoot = path.join(__dirname, "../../");

(() => {
  const fromDir = (startPath, filter) => {
    if (!fse.existsSync(startPath)) {
      return null;
    }
    let files = fse.readdirSync(startPath);
    for (let i = 0; i < files.length; i++) {
      if (files[i].indexOf(filter) >= 0) {
        return files[i];
      }
    }
  };
  config.FILE_NAMES_SET = {
    JS_NAME: fromDir(path.join(appRoot, "public/js"), ".js"),
    CSS_NAME: fromDir(path.join(appRoot, "public/css"), ".css"),
  };
})();

export default express()
  .use((req, res, next) => {
    const allowedOrigins = ["http://localhost:3333/"];
    const origin = req.headers.origin;
    if (allowedOrigins.indexOf(origin) > -1) {
      res.setHeader("Access-Control-Allow-Origin", origin);
    }
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "X-Requested-With, content-type, Authorization, Content-Type"
    );
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Authorization"
    );
    res.setHeader("Access-Control-Allow-Credentials", true);
    res.setHeader("Access-Control-Expose-Headers", "AuthToken");
    next();
  })
  .use(express.json())
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: false }))
  .use("/", router)
  .use("/static", express.static(path.join(appRoot, "public")))
  .set("views", path.join(appRoot, "src/views"))
  .engine(
    "hbs",
    exphbs({
      helpers: {
        json: (context) => {
          return JSON.stringify(context);
        },
      },
      defaultLayout: "main",
      extname: ".hbs",
      partialsDir: path.join(appRoot, "src/views/partials"),
    })
  )
  .set("view engine", "hbs")
  .set("json spaces", 2)
  .use(express.json({ limit: "5mb" }))
  .use(express.urlencoded({ extended: true, limit: "5mb" }))
  .use(
    "/jquery",
    express.static(path.join(appRoot, "/node_modules/jquery/dist/"))
  );
