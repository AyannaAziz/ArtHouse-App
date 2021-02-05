const mongoose = require("mongoose");
const routes = require("express").Router();
const Users = require("../models/users.js")

routes.post("/", (req, res) => {
    
    const usr_name = req.body.usr_name.toLowerCase();
    const profile_photo = req.body.profile_photo;
    const photos = req.body.photos;
    const bio = req.body.bio;


    const user = Users.create({
        usr_name,
        profile_photo,
        photos,
        bio
    },
    (err, data ) => {
        if (err) return res.status(500).send(err.message)
        res.status(200).json(data)
        
    })

    
});

//get request to return all users from user model
routes.get("/", (req, res) => {
    Users.find({}, (error, data) => {
      if (error) {
        res.send(error);
      } else {
        res.json(data);
      }
    });
  });

// GET method to retrun a specific user  
routes.get('/:user', (req, res) => {
    Users.findOne(
        {
          usr_name: req.params.user.toLowerCase()
        }, 
        (error, data) => {
          if (error) {
            res.send(error);
          } else {
            res.send(data);
          }
        }
      );

  });

  
  
 module.exports = routes

