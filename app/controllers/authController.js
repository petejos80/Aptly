var exports = module.exports = {}
 
exports.signup = function(req, res) {
 
    res.render('signup');
 
}

exports.login = function(req, res) {

    res.render('login');
 
}

exports.posts = function(req, res) {
 
    res.render('posts');
 
}

exports.logout = function(req, res) {
 
    req.session.destroy(function(err) {
 
        res.redirect('/login');
 
    });
 
}