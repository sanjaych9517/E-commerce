const express = require('express');
const router = express.Router({});
const User = require("../models/user");
const wrapAsync = require("../utils/wrapAsync");
const passport = require("passport");

router.get("/signup", (req, res) => {
    res.render("users/signup.ejs");
});

//  for signUp
router.post("/signup",
    wrapAsync(
        async (req, res) => {
            try {
                let { username, email, password } = req.body;
                const newUser = new User({ email, username });
                const registeredUser = await User.register(newUser, password);
                console.log(registeredUser);
                req.flash("success", "welcome to our website");
                res.redirect("/items");
            } catch (err) {
                req.flash("error", err.message);
                res.redirect("/signup");
            }
        })
);

router.get("/login", (req, res) => {
    res.render("users/login.ejs");
});

// for login
router.post(
    "/login",
    passport.authenticate("local", { failureRedirect: '/login', failureFlash: true }), 
    async(req, res) => {
        req.flash("success", "Welcome back to my website!");
        res.redirect("/items");
    }
);

//  for logout

router.get("/logout", (req, res, next) => {
    req.logout((err) =>{
        if(err) {
            next(err);
        }
        req.flash("success", "you are logged out!");
        res.redirect("/items");
    })
});

module.exports = router;