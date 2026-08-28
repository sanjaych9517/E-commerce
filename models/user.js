const mongoose= require('mongoose');
const Schema = mongoose.Schema;

const passportLocalMongoose = require("passport-local-mongoose");

const useerSchema = new Schema({
    email:{
        type: String,
    requi: true
    },
});

User.plugin(passportLocalMongoose);

module.exportsn= mongoose.model('User',  useerSchema );