const mongoose = require("mongoose");
const routes = require("express").Router();
const Users = require("../models/users.js");

//initial post to send user data to db
routes.post("/", (req, res) => {
  const usr_name = req.body.usr_name.toLowerCase();
  const profile_photo = req.body.profile_photo || "";
  const photos = req.body.photos || [];
  const bio = req.body.bio || "";
  
//queries our db to see if the name entered matches any existing name, throws err if true
  Users.find({ usr_name}, (err,data) => {
    if (err) return res.status(500).send(err.message);
    console.log(data);
    if (data.length > 0) return res.status(400).send("This username is taken!");
 //requires user to input photo, sends error if blank
    if (!profile_photo) {
        return res.status(400).send("Profile photo is required!");
      }
    //create user object
      const user = Users.create(
        {
          usr_name,
          profile_photo,
          photos,
          bio,
        },
        (err, data) => {
          if (err) return res.status(500).send(err.message);
          res.status(200).json(data);
        }
      )
    
  })

});

//GET request to return all users from user model
routes.get("/", (req, res) => {
  Users.find({}, (error, data) => {
    if (error) {
      res.send(error);
    } else {
      res.json(data);
    }
  });
});

// GET request to return a specific user by their username
routes.get("/:user", (req, res) => {
  Users.findOne(
    {
      usr_name: req.params.user.toLowerCase(),
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

//POST request allows users to update one or many any fields
routes.put("/", (req, res) => {
  const usr_name = req.body.usr_name.toLowerCase();
  const profile_photo = req.body.profile_photo || "";
  const photos = req.body.photos || [];
  const bio = req.body.bio || "";
});

module.exports = routes;
