//load bcrypt
var bCrypt = require('bcrypt-nodejs');
 
 
module.exports = function(passport, user) {
 
 
    var User = user;
    console.log('my name is', User);
    console.log('my name is idlow', user.id);
    console.log('my name is idhigh', User.userId);


 
    var LocalStrategy = require('passport-local').Strategy;
 
 
    passport.use('local-signup', new LocalStrategy(

 
        {
 
            usernameField: 'userName',
 
            passwordField: 'userPsswd',
 
            passReqToCallback: true // allows us to pass back the entire request to the callback
 
        },

        
 
 
 
        function(req, email, password, done) {
 
            var generateHash = function(password) {
 
                return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
 
            };

        
        // Serialize
        passport.serializeUser(function(user, done) {
        
            done(null, user.id);
        
        });

        // Deserialize user 
        passport.deserializeUser(function(id, done) {
        
            User.findById(id).then(function(user) {
        
                if (user) {
        
                    done(null, user.get());
        
                } else {
        
                    done(user.errors, null);
        
                }
        
            });
        
        });
 
            User.findOne({
                where: {
                    email: email
                }
            }).then(function(user) {
 
                if (user)
 
                {
 
                    return done(null, false, {
                        message: 'That email is already taken'
                    });
 
                } else
 
                {
 
                    var userPassword = generateHash(password);
 
                    var data =
 
                        {
                            email: email,
 
                            password: userPassword,
 
                            firstname: req.body.firstname,
 
                            lastname: req.body.lastname
 
                        };
 
                    User.create(data).then(function(newUser, created) {
 
                        if (!newUser) {
 
                            return done(null, false);
 
                        }
 
                        if (newUser) {
                            console.log('New user Created', User.userId);
                            return done(null, newUser);
 
                        }
 
                    });
 
                }
 
            });
 
        }
 
    ));

    //LOCAL SIGNIN
passport.use('local-signin', new LocalStrategy(
 
    {
 
        // by default, local strategy uses username and password, we will override with email
 
        usernameField: 'email',
 
        passwordField: 'password',
 
        passReqToCallback: true // allows us to pass back the entire request to the callback
 
    },
 
 
    function(req, email, password, done) {
 
        var User = user;
 
        var isValidPassword = function(userpass, password) {
 
            return bCrypt.compareSync(password, userpass);
 
        }
 
        User.findOne({
            where: {
                email: email
            }
        }).then(function(user) {
 
            if (!user) {
 
                return done(null, false, {
                    message: 'Email does not exist'
                });
 
            }
 
            if (!isValidPassword(user.password, password)) {
 
                return done(null, false, {
                    message: 'Incorrect password.'
                });
 
            }
 
 
            var userinfo = user.get();
            return done(null, userinfo);
 
 
        }).catch(function(err) {
 
            console.log("Error:", err);
 
            return done(null, false, {
                message: 'Something went wrong with your Signin'
            });
 
        });
 
 
    }
 
));
 
}