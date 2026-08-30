const express = require('express');
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const Item = require("../models/item.js");
const { isLoggedIn, isOwner, validateItem, validateReview } = require("../middleware.js");
const itemController = require("../controllers/item.js")
const multer  = require('multer');
const { storage } = require("../cloudConfig.js");
const upload = multer({ storage});

router
    .route("/",)
    .get(wrapAsync(itemController.index))
    .post(isLoggedIn,
         validateItem,
         upload.array('item[image]', 4),
        wrapAsync(itemController.createItem));
// .post(upload.array('item[image]', 4),(req, res) => {
//     res.send(req.files);
// });
// start new route
router.get("/new", isLoggedIn,
    wrapAsync(itemController.renderNewForm));

router
    .route("/:id")
    .get(wrapAsync(itemController.showItem))
    .put(isLoggedIn, isOwner,
        upload.array('item[image]', 4),
         validateItem,
        wrapAsync(itemController.updateItem))
    .delete(isOwner, isLoggedIn,
        wrapAsync(itemController.destroyItem));

// start edit route
router.get(
    "/:id/edit", isOwner, isLoggedIn,
    wrapAsync(itemController.renderEditForm));

module.exports = router;