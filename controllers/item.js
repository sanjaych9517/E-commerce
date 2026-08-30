const Item = require("../models/item");
const mongoose = require("mongoose");
//  for index route
module.exports.index = async (req, res) => {
    const allItems = await Item.find({});
    res.render("items/index.ejs", { allItems });
}

// for new routes
module.exports.renderNewForm = async (req, res) => {
    res.render("items/new.ejs");
}

// for show routes
module.exports.showItem = async (req, res) => {
    let { id } = req.params;
    console.log("Received ID:", id);
    // Check valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
        req.flash("error", "Invalid item ID");
        return res.redirect("/items");
    }
    let item = await Item.findById(id)
        .populate({
            path: "reviews",
            populate: {
                path: "author",
            },
        })
        .populate("owner");

    if (!item) {
        req.flash("error", "Item you requested does not exist");
        return res.redirect("/items");
    }
    console.log(item);
    res.render("items/show.ejs", { item });
}

// create routes

module.exports.createItem = async (req, res, next) => {

    const newItem = new Item(req.body.item);
    // nowner id
    newItem.owner = req.user._id;
    // multiple images
    newItem.image = req.files.map(file => ({
        url: file.path,
        filename: file.filename
    }));
    // new add for owner id
    await newItem.save();
    req.flash("success", "New Product Added!");
    res.redirect("/items");
}
// edit routes
module.exports.renderEditForm = async (req, res) => {
    let { id } = req.params;
    const item = await Item.findById(id);
    if (!item) {
        req.flash("error", "Item you requested does not exist");
        return res.redirect("/items");
    }
    res.render("items/edit.ejs", { item });
}

// updates routes
module.exports.updateItem = async (req, res) => {
    if (!req.body.item) {
        throw new ExpressError(400, "Send valid data for items");
    }
    let { id } = req.params;

    let item = await Item.findByIdAndUpdate(
        id,
        { ...req.body.item },
        { new: true, runValidators: true }
    );

    // Multiple images
    if (req.files && req.files.length > 0) {
        item.image = req.files.map(file => ({
            url: file.path,
            filename: file.filename
        }));

        await item.save();
    }

    req.flash("success", 'product Updated');

    res.redirect(`/items/${id}`);
}

// delete routes
module.exports.destroyItem = async (req, res) => {
    let { id } = req.params;
    let deletedItem = await Item.findByIdAndDelete(id);
    req.flash("success", 'Product Deleted');
    res.redirect("/items");
}