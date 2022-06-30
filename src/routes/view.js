// Importing dependancies
const { Router } = require("express");

// functions from views.js controller file can be destructured and listed here
const { renderHomePage, renderNotePage } = require("../controllers/views");

// Router defined
const router = Router();

// routes declared

router.get("/", renderHomePage);

// Declaration of exports
module.exports = router;
