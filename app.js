const express = require('express');
const app = express();
const mongoose = require('mongoose')
const Item = require("./models/item.js");
const path = require("path");

const MONGO_URL = "mongodb://127.0.0.1:27017/Ecommerce";
const PORT = 5001;

main().then(() =>{
  console.log("connected to DB");
}).catch(err =>{
   console.log(err);
});

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({extended: true}));

async function main() {
    await mongoose.connect(MONGO_URL);
}


app.get("/",(req, res) =>{
    res.send("Hi I am a ROOT");
});

// index route start
app.get("/items", async (req, res) => {
     const allItems = await Item.find({});
     res.render("items/index.ejs", {allItems});
});
 // index route end

//  show route start
   app.get("/items/:id", async (req, res) => {
     let {id} = req.params;
    const item = await Item.findById(id);
    res.render("items/show.ejs", {item});
   });
// show route end

// app.get("/textItem", async (req, res) =>{
//     let sampleItem = new Item({
//         title: "My New Product",
//         description: "new phone",
//         price: 18999,
//         category:"Mobile Phones",
//         brand:"OPPO",
//         stock: 10,
//     });

//    await sampleItem.save();
//    console.log("sample was saved");
//    res.send("successfully testing");
// });

app.listen(PORT, () => {
  console.log(`server is listening on PORT http://localhost:${PORT}`)
})