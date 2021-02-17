const express = require("express");
const mongoose = require("mongoose");
const favicon = require("serve-favicon");
const path = require("path");
const app = express();
const userRoute = require("./routes/userRoutes.js");
const postRoute = require("./routes/postRoutes.js");


const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect(
  process.env.MONGODB_URI ||
    "mongodb+srv://aazizz:kitty123@cluster0.uvak5.mongodb.net/Arthouse?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  }
);

const connection = mongoose.connection;

connection.on("connected", () => {
  console.log("Mongoose successfully connected!");
});

connection.on("error", (err) => {
  console.log("Mongoose connection error: ", err);
});

app.use(express.static("client/build"));

//telling express to read json data 
app.use(express.json())

//handling the favicon error
// app.use(favicon(path.join(__dirname, "./client/build", "favicon.ico")));

//get route to test
app.get("/api/config", (req, res) => {
  res.json({ success: true });
});

//wildcard route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build/index.html"));
});


app.use("/api/users", userRoute)

app.use("/api/post", postRoute)

// app.use(express.static('./client/build'))

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


