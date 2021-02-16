const mongoose = require("mongoose");
const {Schema} = mongoose; 

// created the user model
const users = new Schema ({
    usr_name: String,
    email: String,
    password: String,
    profile_photo: String, 
    photos: Array,
    bio: String
})

//Exporting the user model object 
module.exports = mongoose.model("Users", users)