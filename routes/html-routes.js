// Handles the routes that send users to different html pages
const db = require("../models");
let path = require("path");
let express = require("express");
let exphbs = require("express-handlebars");
let moment = require("moment");

let app = express(); 

//ROUTES

module.exports = function (app) {

    app.engine(".hbs", exphbs({
        defaultLayout: 'main',
        extname: ".hbs",
        layoutsDir: path.join(__dirname, "views/layouts"),
    }));

  
/// #### GET ROUTES ####
    app.get("/register", function (req, res){
        res.render("register")
    })
    
    app.get("/events", function (req, res ) {
        res.render("events")
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

    app.get("/posts", function (req, res){
        db.Post.findAll({
            raw: true,
            order: [["updatedAt", "DESC"]],
        }).then((data) => {
            const dataVals = data.map((dataRow) => {
                const cat = dataRow.category.split(" ").join("");
                const updatedMoment = moment(dataRow.updatedAt, moment.HTML5_FMT.DATETIME_LOCAL_MS);
                dataRow.updatedAt = updatedMoment.format("MMM D [at] h:mm a");
                dataRow[cat] = 1;
                return dataRow;
            });
            res.render("posts", {
                posts: data,
            });
        });
    })

    app.get("/posts/edit/:id", function(req, res) {
       db.Post.findOne({
           raw: true,
            where: {
                id: req.params.id
            }
        }).then(function (Post) {
            console.log(Post);
            Post.edit = 1;
            res.render("posts-form", {
                post: Post,
            });
        })
    
    });

    app.get("/posts/new", function (req, res){
        res.render("posts-form")
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