const Item = require("./models/item");
const Review = require("./models/review.js");
const ExpressError = require("./utils/ExpressError.js");
const { itemSchema, reviewSchema } = require("./schema.js");


module.exports.isLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {

        // Login se pehle user jis URL par jana chahta tha, use save karo
        req.session.redirectUrl = req.originalUrl;

        req.flash("error", "You must be logged in!");

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

//  for owner
module.exports.isOwner = async (req, res, next) => {
    let { id } = req.params;
    let item = await Item.findById(id);
    if (!item.owner._id.equals(res.locals.currentUser._id)) {
        req.flash("error", "You are not owner of this product.");
        return res.redirect(`/items/${id}`);
    }
    next();
};

module.exports.isReviewAuthorOrOwner = async (req, res, next) => {
    let { id, reviewId } = req.params;

    let item = await Item.findById(id);
    let review = await Review.findById(reviewId);

    let isOwner = item.owner._id.equals(res.locals.currentUser._id);
    let isReviewAuthor = review.author.equals(res.locals.currentUser._id);

    if (!isOwner && !isReviewAuthor) {
        req.flash(
            "error",
            "You don't have permission to delete this review."
        );
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
