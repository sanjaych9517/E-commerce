const Review = require("../models/review.js");
const Item = require("../models/item.js");

// POST route
module.exports.createReview = async (req, res) => {
    let item = await Item.findById(req.params.id);
    let newReview = new Review(req.body.review);

    // Logged-in user ko review ka author 
    newReview.author = req.user._id;
    item.reviews.push(newReview);
    await newReview.save();
    await item.save();
    req.flash("success", "New review Created!");
    res.redirect(`/items/${item._id}`);
}

module.exports.destroyReview = async (req, res) => {
    let { id, reviewId } = req.params;
    await Item.findByIdAndUpdate(id, {
        $pull: { reviews: reviewId }
    });
    await Review.findByIdAndDelete(reviewId);
    req.flash("success", "Review deleted!");
    res.redirect(`/items/${id}`);
}
