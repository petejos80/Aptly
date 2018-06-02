var exports = module.exports = {}
 
exports.register = function(req, res) {
 
    res.render('register');
 
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