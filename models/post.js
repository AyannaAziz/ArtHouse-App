const mongoose = require("mongoose");
const {Schema} = mongoose; 

// created the post model
const post = new Schema ({
    usr_name: String,
    profile_photo: String,
    title: String,
    photos: Array,
    post_text: String,
    comments: Array,
    post_time: Date
})

//Exporting the post model object 
module.exports = mongoose.model("Post", post)