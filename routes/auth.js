const html_routes = require("./html-routes.js");
const api_routes = require("./api-routes.js");
 
module.exports = function(app, passport) {
    
    app.get('/posts', isLoggedIn, html_routes.posts);

    app.get('/posts/edit/:id', isLoggedIn, html_routes.posts_edit);

    app.get('/posts/new', isLoggedIn, html_routes.posts_new);

    app.get('/users/:id', isLoggedIn, html_routes.user_profile);
 
    app.get('/register', html_routes.register);
 
    app.get('/login', html_routes.login);

    app.get('/logout', html_routes.logout);
 
    app.post('/register', passport.authenticate('local-register', {
            successRedirect: '/posts',
 
            failureRedirect: '/register'
        }        
 
    ));

    app.post('/login', passport.authenticate('local-login', {
        successRedirect: '/posts',
 
        failureRedirect: '/login'
    }));

    app.post('/api/posts/new', api_routes.posts_create);

    app.put('/api/posts/:id', api_routes.posts_update);

    app.delete('/api/posts/:id', api_routes.posts_delete);
 
}

function isLoggedIn(req, res, next) {

    if (req.isAuthenticated())
     
        return next();
         
    res.redirect('/login');
 
}
