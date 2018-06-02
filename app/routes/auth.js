var authController = require('../controllers/authController.js');
 
 
module.exports = function(app, passport) {

    app.get('/posts',isLoggedIn, authController.posts);
 
    app.get('/signup', authController.signup);
 
    app.get('/login', authController.login);

    app.get('/logout',authController.logout);

    app.get('/posts',authController.posts);
 
    
    
    app.post('/signup', passport.authenticate('local-signup', {
            successRedirect: '/dashboard',
 
            failureRedirect: '/signup'
        }        
 
    ));

    app.post('/login', passport.authenticate('local-login', {
        successRedirect: '/posts',
 
        failureRedirect: '/login'
    }
 
));
}

function isLoggedIn(req, res, next) {
 
    if (req.isAuthenticated()) 
        return next();

        res.redirect('/login');
}

