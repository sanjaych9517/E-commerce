const express = require('express');
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const { itemSchema } = require("../schema.js");
const Item = require("../models/item.js");
const mongoose = require("mongoose");

// validate item 
const validateItem = (req, res, next) => {
    let { error } = itemSchema.validate(req.body);

    if (error) {
        let errMsg = error.details.map((el) => el.message).join(",");
        throw new ExpressError(400, errMsg);
    } else {
        next();
    }
};



// index route start
router.get(
    "/",
    wrapAsync(
        async (req, res) => {
            const allItems = await Item.find({});
            res.render("items/index.ejs", { allItems });
        })
);
// index route end

// start new route
router.get(
    "/new",
    wrapAsync(
        async (req, res) => {
            res.render("items/new.ejs");
        })
);
// end new route

//  show route start

router.get(
    "/:id",
    wrapAsync(async (req, res) => {

        let { id } = req.params;

        // Check valid ObjectId
        if (!mongoose.Types.ObjectId.isValid(id)) {
            req.flash("error", "Invalid item ID");
            return res.redirect("/items");
        }

        let item = await Item.findById(id).populate("reviews");

        if (!item) {
            req.flash("error", "Item you requested does not exist");
            return res.redirect("/items");
        }

        res.render("items/show.ejs", { item });
    })
);
// show route end


// Create routes starts

router.post(
    "/",
    validateItem,
    wrapAsync(
        async (req, res, next) => {
            const newItem = new Item(req.body.item);
            await newItem.save();
            req.flash("success", "New Product Added!");
            res.redirect("/items");
        })
);

// Create routes end

// start edit route
router.get(
    "/:id/edit",
    wrapAsync(
        async (req, res) => {
            let { id } = req.params;
            const item = await Item.findById(id);
            if (!item) {
            req.flash("error", "Item you requested does not exist");
            return res.redirect("/items");
        }
            res.render("items/edit.ejs", { item });
        })
);
// end edit routes

//  start update route
router.put(
    "/:id",
    validateItem,
    wrapAsync(
        async (req, res) => {
            if (!req.body.item) {
                throw new ExpressError(400, "Send valid data for items");
            }
            let { id } = req.params;
            await Item.findByIdAndUpdate(id, { ...req.body.item });
            req.flash("success", 'product Updated');
            
            res.redirect(`/items/${id}`);
        })
);
// end update route

// start delete routes
router.delete(
    "/:id",
    wrapAsync(
        async (req, res) => {
            let { id } = req.params;
            let deletedItem = await Item.findByIdAndDelete(id);
            req.flash("success", 'Product Deleted');
            res.redirect("/items");
        })
);
// end delete routes

module.exports = router;