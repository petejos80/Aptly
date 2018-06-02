var authController = require('../controllers/authController.js');
 
 
module.exports = function(app, passport) {

    // app.get('/dashboard',authController.dashboard)
    app.get('/dashboard',isLoggedIn, authController.dashboard);
 
    app.get('/register', authController.register);
 
    app.get('/login', authController.login);

    app.get('/logout',authController.logout);
 
    app.post('/register', passport.authenticate('local-register', {
            successRedirect: '/posts',
 
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
