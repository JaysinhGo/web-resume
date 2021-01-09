import promiseRouter from "express-promise-router";
import config from "config";
const router = promiseRouter();

router.get("/", (req, res) => {
  res.render("index", { config: config });
});

export default router;
