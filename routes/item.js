const express = require('express');
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const Item = require("../models/item.js");
const { isLoggedIn, isOwner, validateItem, validateReview } = require("../middleware.js")


const itemController = require("../controllers/item.js")

// index route start
router.get("/", wrapAsync(itemController.index));

// start new route
router.get(
    "/new", isLoggedIn,
    wrapAsync(itemController.renderNewForm));

//  show route start

router.get(
    "/:id", wrapAsync(itemController.showItem));

// Create routes starts
router.post(
    "/", isLoggedIn, validateItem,
    wrapAsync(itemController.createItem));

// start edit route
router.get(
    "/:id/edit",isOwner, isLoggedIn,
    wrapAsync(itemController.renderEditForm));

//  start update route
router.put(
    "/:id", isLoggedIn,isOwner,validateItem,
    wrapAsync(itemController.updateItem));


// start delete routes
router.delete(
    "/:id",isOwner,isLoggedIn,
    wrapAsync(itemController.destroyItem));


module.exports = router;