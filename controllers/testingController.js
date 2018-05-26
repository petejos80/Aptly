var express = require("express");

var router = express.Router();

// Create all our routes and set up logic within those routes where required.

router.get("/", function(req, res) {
    res.render("index");
});

router.get("/login", function(req, res) {
    res.render("login");
});

router.get("/register", function(req, res) {
    res.render("register");
});

// Export routes for server.js to use.
module.exports = router;
