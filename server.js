const express = require("express");
const app = express();
const path = require("path");
const router = express.Router();
const config = require("config");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");

app
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
  .use("/css", express.static(path.join(__dirname, "src/css")))
  .use("/js", express.static(path.join(__dirname, "src/js")))
  .use("/images", express.static(path.join(__dirname, "src/images")))
  .set("views", path.join(__dirname, "src/views"))
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
      partialsDir: path.join(__dirname, "src/views/partials"),
    })
  )
  .set("view engine", "hbs")
  .set("json spaces", 2)
  .use(express.json({ limit: "5mb" }))
  .use(express.urlencoded({ extended: true, limit: "5mb" }));
app.listen(config.PORT);
console.log("Running at Port " + config.PORT);

router.get("/", (req, res) => {
  res.render("index", { layout: "main.hbs", open: config });
});
