const Item = require("./models/item");
const ExpressError = require("./utils/ExpressError.js");
const { itemSchema, reviewSchema } = require("./schema.js");


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

module.exports.isOwner = async (req, res, next) => {
    let { id } = req.params;
    let item = await Item.findById(id);
    if (!item.owner._id.equals(res.locals.currentUser._id)) {
        req.flash("error", "You are not owner of this product.");
        return res.redirect(`/items/${id}`);
    }
    next();
};


//  validate items
module.exports.validateItem = (req, res, next) => {
    let { error } = itemSchema.validate(req.body);

    if (error) {
        let errMsg = error.details.map((el) => el.message).join(",");
        throw new ExpressError(400, errMsg);
    } else {
        next();
    }
};

//  validate review for server side
module.exports.validateReview = (req, res, next) => {
    let { error } = reviewSchema.validate(req.body);
    if (error) {
        let errMsg = error.details.map((el) => el.message).join(",");
        throw new ExpressError(400, errMsg);
    } else {
        next();
    }
}
