const express = require('express');
const app = express();
const mongoose = require('mongoose')
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const ExpressError = require("./utils/ExpressError.js");
const session = require("express-session");
const flash= require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user.js");

const items = require("./routes/item.js");
const reviews = require("./routes/review.js")


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

// cookies parser start

const sessionOptions = {
    secret: "mysupersecretcode",
    resave: false,
    saveUninitialized : true,
    cookie:{
        expires: Date.now() + 1000 * 60 *60 *24 *7,
        maxAge: 1000 * 60 *60 *24 *7,
        httpOnly: true,
    },
};

app.use(session(sessionOptions));
app.use(flash());

// for password user schema in models
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.get("/demouser", async(req, res) => {
  let fakeUser = new User({
    email: "student@gmail.com",
    username: "student",
  });
 let registeredUser = await User.register(fakeUser, "student@123");
 res.send(registeredUser);
});

// for flash message
app.use((req, res, next) => {
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  next();
});

app.use("/items", items);
app.use("/items/:id/:reviews", reviews);

app.all("/{*splat}", (req, res, next) => {
    next(new ExpressError(404, "Page Not Found"));
})

app.use((err, req, res, next) => {
    let { statusCode = 500, message = "Something went wrong" } = err;
    res.status(statusCode).render("items/error.ejs", {
        message
    });

});

app.listen(PORT, () => {
    console.log(`server is listening on PORT http://localhost:${PORT}`)
})