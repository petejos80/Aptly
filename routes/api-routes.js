// Routes used too display and save data to the DB
//Dependencies

let db = require("../models");


//Routes
module.exports = function (app) {


    //  #### GETS ####
    //Route for all post
    app.get("/api/posts", function (req, res) {
        db.Post.findAll({}).then(function (result) {
            res.json(result);
        })

    });
    //Route to get user
    app.get("/api/users", function (req, res) {
        db.User.findAll({}).then(function (result) {
            res.json(result);
        })

    });

    // get all post with a specific category
    app.get("/api/posts/category:category", function (req, res) {
        db.Post.findAll({
            where: {

                category: req.params.category
            
            }
        }).then(function(result){
            res.json(result);
        })
    });

    //  #### PUTS ####
    //update entry with a specific user id// then redirects
    app.put("/api/update/:id", function (req, res) {
        db.Post.findOne({
            where: {
                author: req.params.id
            }
        }).then(function (Post) {
            Post.updateAttributes({
                title: "I did It!"
            })
            res.redirect("/");
        })
    })

    //  #### POSTS ####
     //creates a new entry 
    app.post("/api/posts/new", function (req, res) {
           db.Post.create({
            category: req.body.category,
            title: req.body.title,
            body: req.body.body,
            author: "Tiesto",
        }).then(function (result) {
            res.redirect("/posts");
        })
    })

    //create a new User
    app.post("/api/new/user", function(req, res){
        db.User.create({
            userName: "TommyBoy911", 
            userPsswd: "DuckTales",
            firstName: "Tom",
            lastName: "Jenkins",
            unitNumber: "227",
            email: "tommyboyishot@gmail.com",
            leaseEnd: "9/19/05",
            phone: "333-444-5555",
            interest: "Food",
            address: "123 Yourway drive, San Antonio, TX, 55454",
            geolocation: "34.44949494, 75.9000090",
        }).then(function(result) {
            //make sure to add the res.redirect when done with
            res.json(result);
        })
    })
        //  #### DELETES  ####
    //deletes a user
    app.delete("/api/delete/:id", function (req, res) {
        db.Post.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(function(result){
            res.json(result);
        })
    })

}