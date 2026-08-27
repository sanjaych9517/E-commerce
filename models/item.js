const mongoose= require('mongoose');
const Schema = mongoose.Schema;

const itemScheme = new Schema({
    title: {
       type: String,
       required: true,
    },
    description: String,
    image: {
        default: "https://m.media-amazon.com/images/I/71TjL3zBQQL._SX679_.jpg",
        type:String,
        set: (v) => v ==="" ? "https://m.media-amazon.com/images/I/71TjL3zBQQL._SX679_.jpg" : v,
    },
    price: Number,
    category: String,
    brand: String,
    stock: Number,
    review: [
        {
            type: Schema.Types.ObjectId,
            ref: "Review",
        },
    ],
});

const Item = mongoose.model("Item",itemScheme);

module.exports = Item;