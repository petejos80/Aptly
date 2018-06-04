// Handles the routes that send users to different html pages
const db = require("../models");
let moment = require("moment");

var exports = module.exports = {};

exports.posts = function (req, res) {
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
}

exports.register = function (req, res) {
    res.render("register");
}

exports.profile = function (req, res) {
    app.get('/profile', function (req, res) {
        TABLE.findAll()
          .then((users) => {
                res.render('users', {
                     users: users
                });
          });
    });
}

exports.login = function (req, res) {
    res.render("login");
}

exports.failedlogin = function (req, res) {
    res.render("login", {loginFail: true});
}

exports.failedregister = function (req, res) {
    res.render("register", {registerFail: true});
}

exports.logout = function (req, res) {
    req.session.destroy(function (err) {
        res.redirect("/login");
    })
}

exports.posts_edit = function (req, res) {
    db.Post.findOne({
        raw: true,
        where: {
            id: req.params.id
        }
    }).then(function (data) {
        data.edit = 1;
        res.render("posts-form", {
            post: data,
        });
    })
}

exports.posts_new = function (req, res) {
    res.render("posts-form")
}
