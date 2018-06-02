var authController = require('../controllers/authController.js');
 
 
module.exports = function(app, passport) {

    app.get('/posts',isLoggedIn, authController.posts);
 
    app.get('/register', authController.register);
 
    app.get('/login', authController.login);

    app.get('/logout',authController.logout);

    app.get('/posts',authController.posts);
 
    
    
    app.post('/register', passport.authenticate('local-register', {
            successRedirect: '/dashboard',
 
            failureRedirect: '/register'
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

