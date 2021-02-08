const mongoose = require("mongoose");
const routes = require("express").Router();
const Users = require("../models/users.js");
const { update } = require("../models/users.js");

//initial post to send user data to db
routes.post("/", (req, res) => {
  const usr_name = req.body.usr_name.toLowerCase();
  const profile_photo = req.body.profile_photo || "";
  const photos = req.body.photos || [];
  const bio = req.body.bio || "";

  //queries db to see if the name entered matches any existing name, throws err if true
  Users.find({ usr_name }, (err, data) => {
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
    );
  });
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
  const profile_photo = req.body.profile_photo;
  const photos = req.body.photos;
  const bio = req.body.bio;

  //manipulate the user model
  // specifying what fields I want to update, if theres and error send error message, if updated then send message and handle error
  Users.update(
    { usr_name },
    { usr_name, profile_photo, photos, bio },
    (err, updated) => {
      if (err) res.status(500).json({ message: err.message, error: true });
      if (updated.ok) {
        console.log(updated);
        res.status(200).json({ message: "Profile updated!" });
      } else {
        res.status(400).json({ message: updated.message, error: true });
      }
    }
  );
});

module.exports = routes;
