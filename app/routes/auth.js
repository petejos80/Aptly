var authController = require('../controllers/authController.js');
 
 
module.exports = function(app, passport) {

    // app.get('/dashboard',authController.dashboard)
    app.get('/dashboard',isLoggedIn, authController.dashboard);
 
    app.get('/signup', authController.signup);
 
    app.get('/login', authController.login);

    app.get('/logout',authController.logout);
 
    app.post('/signup', passport.authenticate('local-signup', {
            successRedirect: '/dashboard',
 
            failureRedirect: '/signup'
        }        
 
    ));

    app.post('/login', passport.authenticate('local-login', {
        successRedirect: '/dashboard',
 
        failureRedirect: '/login'
    }
 
));
 
}

function isLoggedIn(req, res, next) {
 
    if (req.isAuthenticated()) 
        return next();

        res.redirect('/login');
    
     
        
         
   
 
}

