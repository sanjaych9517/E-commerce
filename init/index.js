const mongoose = require('mongoose');
const initData = require("./data.js");
const Item = require("../models/item.js")

const MONGO_URL = "mongodb://127.0.0.1:27017/Ecommerce";
// const PORT = 5001;

main()
    .then(() => {
        console.log("connected to DB");
    })
    .catch(err => {
        console.log(err);
    });

async function main() {
    await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
    await Item.deleteMany({});

    // const dataWithOwner = initData.data.map((obj) => ({
    //     ...obj,
    //     owner: "6a926cc4b9fc2050090f71b7"
    // }));

    // await Item.insertMany(dataWithOwner);
    // console.log("data was initializes");
}
initDB();