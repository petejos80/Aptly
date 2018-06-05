// Routes used too display and save data to the DB
//Dependencies

let db = require("../models");

var exports = module.exports = {};

// updated entry from an edited post...Don't forget to deliberate about the :id and how to protect it....
exports.posts_update = function (req, res) {
    db.Post.update(
        {
            category: req.body.category,
            title: req.body.title,
            body: req.body.body,
        },
        {
            where: {
                id: req.params.id
            }
        }
    ).then(function (rowsUpdated) {
        res.json(rowsUpdated);
    });
}

exports.posts_delete = function (req, res) {
    db.Post.destroy({
        where: {
            id: req.params.id,
        }
    }).then(function (result) {
        res.json(result);
    });
}

exports.posts_create = function (req, res) {
    db.Post.create({
        category: req.body.category,
        title: req.body.title,
        body: req.body.body,
        //Need to remind frontend to make plac for Author
        author: "Tiesto",
    }).then(function (result) {
        res.redirect("/posts");
    })
}

exports.users_update = function (req, res) {
    db.user.update(
        {
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            leaseEnd: req.body.leaseEnd,
            leaseStart: req.body.leaseStart,
            password: req.body.password,
            unitnumber: req.body.unitnumber,
            phone: req.body.phone
        },
        {
            where: {
                id: req.params.id
            }
        }
    ).then(function (rowsUpdated) {
        res.json(rowsUpdated);
    });
}

//     // gets the previous post, and edits it
//     app.get("/api/posts/:id", function (req, res) {
//         db.Post.findOne({
//             where: {
//                 id: req.params.id
//             }
//         }).then(function (result) {
//             console.log(result)
//             res.render("posts-form", result)
//         })
//     })
//     //Route for all post
//     app.get("/api/posts", function (req, res) {
//         db.Post.findAll({}).then(function (result) {
//             res.json(result);
//         })

//     });
//     //Route to get user
//     app.get("/api/users", function (req, res) {
//         db.User.findAll({}).then(function (result) {
//             res.json(result);
//         })

//     });

//     // get all post with a specific category
//     app.get("/api/posts/category:category", function (req, res) {
//         db.Post.findAll({
//             where: {

//                 category: req.params.category

//             }
//         }).then(function (result) {
//             res.json(result);
//         })
//     });
