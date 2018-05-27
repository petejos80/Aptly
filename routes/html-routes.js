// Handles the routes that send users to different html pages

let path = require("path");
let express = require("express");
let exphbs = require("express-handlebars");

let app = express(); 

//ROUTES

module.exports = function (app) {

    app.engine(".hbs", exphbs({
        defaultLayout: 'main',
        extname: ".hbs",
        layoutsDir: path.join(__dirname, "views/layouts")
    }));

  

    app.get("/register", function (req, res){
        res.render("register")
    })
    
    app.get("/event", function (req, res ) {
        res.send("This is the route to Create an Event")
    })

    app.get("/edit", function (req, res ) {
        res.send("This is the route to update user info")
    })

    app.get("/topEvents", function (req, res) {
        res.send("This is the route that will load top five events")
    })

    app.get("/userDashboard", function (req, res){
        res.send("This is the route for NewUser Dashboard")
    })

    app.get("/post", function (req, res){
        res.send("This is the route for making a new Post")
    })

    app.get("/login", function (req, res) {
        res.render("login")
    })

    app.get("/search:topic", function (req, res) {
        res.send("This will be the route to handle specific topic queries")
    })
    app.get("/", function (req, res) {
        res.render("index")
     })
    }