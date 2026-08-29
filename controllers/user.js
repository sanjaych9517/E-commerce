const User = require("../models/user");

// render signup form
module.exports.renderSignForm = (req, res) => {
    res.render("users/signup.ejs");
}
//  for signUp
module.exports.signup = async (req, res) => {
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
}

// render login form
module.exports.renderLoginForm = (req, res) => {
    res.render("users/login.ejs");
}

//  Login form
module.exports.login = async (req, res) => {
    req.flash("success", "Welcome back!");
    const redirectUrl = res.locals.redirectUrl || ("/items");
    res.redirect(redirectUrl);
}

// logout
module.exports.logout = (req, res, next) => {
    req.logout((err) => {
        if (err) {
            next(err);
        }
        req.flash("success", "you are logged out!");
        res.redirect("/items");
    })
}