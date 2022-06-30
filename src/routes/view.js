// Importing dependancies
const { Router } = require("express");

// functions from views.js controller file can be destructured and listed here
const { renderHomePage, renderFilmsPage } = require("../controllers/views");

// Router defined
const router = Router();

// routes declared

router.get("/", renderHomePage);
router.get("/films", renderFilmsPage);

// Declaration of exports
module.exports = router;
