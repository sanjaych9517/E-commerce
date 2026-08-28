const express = require('express');
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const { reviewSchema } = require("../schema.js");
const Review = require("../models/review.js");
const Item = require("../models/item.js")



//  validate review for server side
const validateReview = (req, res, next) => {
    let { error } = reviewSchema.validate(req.body);
    if (error) {
        let errMsg = error.details.map((el) => el.message).join(",");
        throw new ExpressError(400, errMsg);
    } else {
        next();
    }
}

// review routes start
// POST route

router.post(
    "/",
    validateReview,
    wrapAsync(
        async (req, res) => {
            let item = await Item.findById(req.params.id);
            let newReview = new Review(req.body.review);

            item.reviews.push(newReview);
            await newReview.save();
            await item.save();
            res.redirect(`/items/${item._id}`);
        })
);

// delete review routes
router.delete("/:reviewId",
    wrapAsync(
        async (req, res) => {
            let { id, reviewId } = req.params;
            await Item.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
            await Review.findByIdAndDelete(reviewId);

            res.redirect(`/items/${id}`)
        }
    ));
// review routes end

module.exports = router;