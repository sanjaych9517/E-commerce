const express = require('express');
const app = express();
const mongoose = require('mongoose')
const Item = require("./models/item.js");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const wrapAsync = require("./utils/wrapAsync.js");
const ExpressError = require("./utils/ExpressError.js");
const { itemSchema } = require("./schema.js");


const MONGO_URL = "mongodb://127.0.0.1:27017/Ecommerce";
const PORT = 5001;

main().then(() => {
    console.log("connected to DB");
}).catch(err => {
    console.log(err);
});

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine('ejs', ejsMate);
app.use(express.static(path.join(__dirname, "/public")));

async function main() {
    await mongoose.connect(MONGO_URL);
}


app.get("/", (req, res) => {
    res.send("Hi I am a ROOT");
});

const validateItem = (req, res, next) => {
    let {err} = itemSchema.validate(req.body);
    if (err) {
        let errMsg = error.details.map((el) => el.message).join(",");
        throw new ExpressError(400, errMsg);
    }else{
        next();
    }
}

// index route start
app.get(
    "/items",
    wrapAsync(
        async (req, res) => {
            const allItems = await Item.find({});
            res.render("items/index.ejs", { allItems });
        })
);
// index route end

// start new route
app.get(
    "/items/new",
    wrapAsync(
        async (req, res) => {
            res.render("items/new.ejs");
        })
);
// end new route

//  show route start
app.get(
    "/items/:id",
    validateItem,
    wrapAsync(async (req, res) => {
        let { id } = req.params;
        const item = await Item.findById(id);
        res.render("items/show.ejs", { item });
    }
    )
);
// show route end

// Create routes starts

app.post(
    "/items", 
    validateItem,
    wrapAsync(
        async (req, res, next) => {
            const newItem = new Item(req.body.item);
            await newItem.save();
            res.redirect("/items");
        })
);

// Create routes end

// start edit route
app.get(
    "/items/:id/edit",
    wrapAsync(
        async (req, res) => {
            let { id } = req.params;
            const item = await Item.findById(id);
            res.render("items/edit.ejs", { item });
        })
);
// end edit routes

//  start update route
app.put(
    "/items/:id", 
    validateItem,
    wrapAsync(
        async (req, res) => {
            if (!req.body.item) {
                throw new ExpressError(400, "Send valid data for items");
            }
            let { id } = req.params;
            await Item.findByIdAndUpdate(id, { ...req.body.item });
            res.redirect(`/items/${id}`);
        })
);
// end update route

// start delete routes
app.delete(
    "/items/:id",
    wrapAsync(
        async (req, res) => {
            let { id } = req.params;
            let deletedItem = await Item.findByIdAndDelete(id);
            console.log(deletedItem);
            res.redirect("/items");
        })
);
// end delete routes

// review routes start
// POST route
// app.post("/item:id/reviews",async(req, res){

// });



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



app.all("/{*splat}", (req, res, next) => {
    next(new ExpressError(404, "Page Not Found"));
})

app.use((err, req, res, next) => {
    let { statusCode = 500, message = "Something went wrong" } = err;
    res.status(statusCode).render("items/error.ejs", {
        message
    });

});

// app.use((err, req, res, next) => {
//     let { statusCode = 500, message = "Something went wrong" } = err;
//     res.render("error.ejs");
//     // res.status(statusCode).send(message);
// });




app.listen(PORT, () => {
    console.log(`server is listening on PORT http://localhost:${PORT}`)
})