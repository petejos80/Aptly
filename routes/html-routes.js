// Handles the routes that send users to different html pages

let path = require("path");


//ROUTES

module.exports = function (app) {

    app.get("/login", function (req, res) {
        res.send("You are landing on the root Page!")
    })
}