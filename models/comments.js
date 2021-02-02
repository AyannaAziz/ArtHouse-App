const mongoose = require("mongoose");
const {Schema} = mongoose; 

// created the user model
const comments = new Schema ({
    usr_name: String,
    content: String,
})

//Exporting the user model object 
module.exports = mongoose.model("Comments", comment)