// Routes used too display and save data to the DB
//Dependencies

let db = require("../models");


//Routes
module.exports = function(app){

//Route for all post
app.get("/api/posts", function (req, res) {
       db.User.findAll({}).then(function(result){
            res.json(result);
       })

    });


// get all post with a specific category
app.get("/api/posts/category:category", function (req, res){
    console.log("this route was hit")
});

//update entry with a specific user id
app.put("/api/update/:id", function(req, res){

})

//creates a new entry 
app.post("/api/new", function(req, res){
    db.Post.create({
       category: "Events",
       title: "Got the fiyah!",
       body: "Come one come all see all the junk that I have to sell. It will be great!",
       author: "Tiesto",
     }).then(function(result){
        res.json(result);
     })
})

//deletes a user
app.delete("/api/delete/:id", function(req, res){
    
})

}