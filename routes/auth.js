const html_routes = require("./html-routes.js");
const api_routes = require("./api-routes.js");
 
module.exports = function(app, passport) {
    
    app.get('/posts', isLoggedIn, html_routes.posts);

    app.get('/posts/edit/:id', isLoggedIn, html_routes.posts_edit);

    app.get('/posts/new', isLoggedIn, html_routes.posts_new);

    app.get('/users/:id', isLoggedIn, html_routes.user_profile);

    app.get('/users/edit/:id', isLoggedIn, html_routes.users_edit);
 
    app.get('/register', html_routes.register);
 
    app.get('/login', html_routes.login);

    app.get('/logout', html_routes.logout);

    app.get('/failedlogin', html_routes.failedlogin);

    app.get('/failedregister', html_routes.failedregister);
 
    app.post('/register', passport.authenticate('local-register', {
            successRedirect: '/posts',
 
            failureRedirect: '/failedregister'
        }        
 
    ));

    app.post('/login', passport.authenticate('local-login', {
        successRedirect: '/posts',
 
        failureRedirect: '/failedlogin'
    }));

    app.post('/api/posts/new', api_routes.posts_create);

    app.put('/api/posts/:id', api_routes.posts_update);

    app.delete('/api/posts/:id', api_routes.posts_delete);

    app.put('/api/users/:id', api_routes.users_update);
 
}

function isLoggedIn(req, res, next) {

    if (req.isAuthenticated())
     
        return next();
         
    res.redirect('/login');
 
}
