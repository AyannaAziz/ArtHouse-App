const mongoose = require("mongoose");
const routes = require("express").Router();
const Users = require("../models/post.js");

//initial post to send post data to db
// Should i add the optional statements? 
routes.post("/", (req, res) => {

    const usr_name = req.body.usr_name.toLowerCase();
    const profile_photo = req.body.profile_photo || "";
    const title = req.body.title || "";
    const photos = req.body.photos || [];
    const post_text = req.body.post_text ;
    const comments = req.body.comments || [];
    const post_time = req.body.post_time ;

 //requires user to input photo, sends error if blank
    if (!post_text || !title) {
        return res.status(400).json({message: "You need text and a title to post! :(", error: true});
      }

    //create post object
      const post = Post.create(
        {
          usr_name,
          profile_photo,
          title,
          photos,
          post_text,
          comments,
          post_time
        },
        (err, data) => {
          if (err) return res.status(500).json({message: err.message , error: true});
          res.status(200).json(data);
        }
      )
    
  });
  

  


  module.exports = routes;
  

