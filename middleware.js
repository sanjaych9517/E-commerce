module.exports.isLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {

        // Login se pehle user jis URL par jana chahta tha, use save karo
        req.session.redirectUrl = req.originalUrl;

        req.flash("error", "You must be logged in to add product");

        return res.redirect("/login");
    }

    next();
};


// Login ke baad redirect URL ke liye
module.exports.saveRedirectUrl = (req, res, next) => {
    if (req.session.redirectUrl) {
        res.locals.redirectUrl = req.session.redirectUrl;
    }

    next();
};