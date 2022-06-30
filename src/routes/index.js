const { Router } = require("express");

const view = require("./view");

// const {
// 	renderHomePage,
// 	renderLoginPage,
// 	renderSignupPage,
// 	renderDashboardPage,
// } = require("../../controllers/views");

const router = Router();

router.use("/", view);

// router.get("/login", renderLoginPage);
// router.get("/signup", renderSignupPage);
// router.get("/dashboard", renderDashboardPage);
// router.get("/*", renderHomePage);

module.exports = router;
