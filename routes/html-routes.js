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
            user: {
                id: req.user.id
            }
        });
    });
}

exports.register = function (req, res) {
    res.render("register");
}

exports.login = function (req, res) {
    res.render("login");
}

exports.logout = function (req, res) {
    req.session.destroy(function (err) {
        res.redirect("/login");
    })
}

exports.failedlogin = function (req, res) {   
    res.render("login", {loginFail: true});
    }
    
exports.failedregister = function (req, res) {
    res.render("register", {registerFail: true});
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
            user: {
                id: req.user.id
            }
        });
    })
}

exports.posts_new = function (req, res) {
    res.render("posts-form", {
        user: {
            id: req.user.id
        }
    })
}

exports.user_profile = function (req, res) {
    db.user.findOne({
        raw: true,
        where: {
            id: req.user.id
        }
    }).then(function (data) {
        console.log(data);
        res.render("profile", {
            user: data
        });
    })
}