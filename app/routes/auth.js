var authController = require("../controllers/authController.js");

module.exports = function(app, passport) {
  // app.get('/dashboard',authController.dashboard)
  app.get("/dashboard", isLoggedIn, authController.dashboard);

  app.get("/signup", authController.signup);

  app.get("/signin", authController.signin);

  app.get("/logout", authController.logout);

  app.get("/posts", isLoggedIn, authController.dashboard);

  app.get("/index", isLoggedIn, authController.index);

  app.post(
    "/signup",
    passport.authenticate("local-signup", {
      successRedirect: "/index",

      failureRedirect: "/signup"
    })
  );

  app.post(
    "/signin",
    passport.authenticate("local-signin", {
      successRedirect: "/index",

      failureRedirect: "/signin"
    })
  );
};

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();

  res.redirect("/signin");
}
