const express = require('express');
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const Item = require("../models/item.js");
const { isLoggedIn, isOwner, validateItem, validateReview } = require("../middleware.js")

const itemController = require("../controllers/item.js")

router
    .route("/",)
    .get(wrapAsync(itemController.index))
    .post(isLoggedIn, validateItem,
        wrapAsync(itemController.createItem));

// start new route
router.get("/new", isLoggedIn,
    wrapAsync(itemController.renderNewForm));

router
    .route("/:id")
    .get(wrapAsync(itemController.showItem))
    .put(isLoggedIn, isOwner, validateItem,
        wrapAsync(itemController.updateItem))
    .delete(isOwner, isLoggedIn,
        wrapAsync(itemController.destroyItem));

// start edit route
router.get(
    "/:id/edit", isOwner, isLoggedIn,
    wrapAsync(itemController.renderEditForm));

module.exports = router;