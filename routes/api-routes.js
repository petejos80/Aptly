// Routes used too display and save data to the DB
//Dependencies

let db = require("../models");


//Routes
module.exports = function(app){

//Route for all post
app.get("/posts", function (req, res) {
       db.User.findAll({}).then(function(result){
            res.json(result);
       })

    });


// get all post with a specific category
app.get("/posts/category:category", function (req, res){
    console.log("this route was hit")
});

//update entry with a specific user id
app.put("/update/:id", function(req, res){

})

//creates a new entry 
app.post("/new", function(req, res){
    
})

//deletes a user
app.delete("/delete/:id", function(req, res){
    
})

}