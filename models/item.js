const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Review = require("./review.js");

const itemSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    image: {
        default: "https://m.media-amazon.com/images/I/71TjL3zBQQL._SX679_.jpg",
        type: String,
        set: (v) => v === "" ? "https://m.media-amazon.com/images/I/71TjL3zBQQL._SX679_.jpg" : v,
    },
    price: Number,
    category: String,
    brand: String,
    stock: Number,
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: "Review",
        },
    ],
});

itemSchema.post("findOneAndDelete", async (item) => {
    if (item) {
        await Review.deleteMany({ _id: { $in: item.reviews } });
    }
});

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;