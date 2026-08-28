const express = require('express');
const app = express();
const mongoose = require('mongoose')
const Item = require("./models/item.js");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const wrapAsync = require("./utils/wrapAsync.js");
const ExpressError = require("./utils/ExpressError.js");
const { itemSchema, reviewSchema } = require("./schema.js");
const Review = require("./models/review.js");

const items = require("./routes/item.js");


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



//  validate review for server side
const validateReview = (req, res, next) => {
    let { error } = reviewSchema.validate(req.body);
    if (error) {
        let errMsg = error.details.map((el) => el.message).join(",");
        throw new ExpressError(400, errMsg);
    } else {
        next();
    }
}
 
app.use("/items", items);

// review routes start
// POST route

app.post(
    "/items/:id/reviews",
    validateReview,
    wrapAsync(
        async (req, res) => {

            let item = await Item.findById(req.params.id);
            let newReview = new Review(req.body.review);

            item.reviews.push(newReview);
            await newReview.save();
            await item.save();
            res.redirect(`/items/${item._id}`);
        })
);

// delete review routes
app.delete("/items/:id/reviews/:reviewId",
     wrapAsync(
          async(req, res) =>{
           let {id, reviewId}  = req.params;
           await Item.findByIdAndUpdate(id, {$pull: {reviews: reviewId}});
         await  Review.findByIdAndDelete(reviewId);

         res.redirect(`/items/${id}`)
          }
));
// review routes end


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