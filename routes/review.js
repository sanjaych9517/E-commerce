const express = require('express');
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync.js");
const { validateReview, isLoggedIn, isReviewAuthorOrOwner } = require("../middleware.js")
const reviewController = require("../controllers/review.js");

// review routes start
// POST route
router.post(
    "/",
    isLoggedIn,
    validateReview,
    wrapAsync(reviewController.createReview ));

// delete review routes
router.delete(
    "/:reviewId",
    isLoggedIn,
    isReviewAuthorOrOwner,
    wrapAsync(reviewController.destroyReview)
);

module.exports = router;