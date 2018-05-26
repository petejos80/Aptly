//Dependencies for Server

let express = require ("express");
let bodyParser = require("body-parser");

//Sets up the express app

let app = express();
let PORT = process.argv.PORT || 8080;

let db = require("./models");


// data parsing by express
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


//static delivery
app.use(express.static("public"));

//Routes
require("./routes/html-routes.js")(app);


// Sync Database

db.sequelize.sync({ force: true }).then(function() {
    app.listen(PORT, function() {
      console.log("App listening on PORT " + PORT);
    });
  });
  