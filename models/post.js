const mongoose = require("mongoose");
const {Schema} = mongoose; 

// created the user model
const posts = new Schema ({
    usr_name: String,
    photos: Array,
    content: String,
    comments: Array,
})

//Exporting the user model object 
module.exports = mongoose.model("Posts", post)