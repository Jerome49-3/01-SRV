require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI);
// const cloudinary = require("cloudinary").v2;

// const mongoose = require("mongoose");
// mongoose.connect(process.env.MONGODB_URI);

const app = express();
app.use(cors());
app.use(express.json());

//import routes:

const characters = require("./routes/characters.routes");
const character = require("./routes/character.routes");
const comics = require("./routes/comics.routes");
const comic = require("./routes/comic.routes");
const login = require("./routes/login.routes");
const signup = require("./routes/signup.routes");

app.use(characters);
app.use(character);
app.use(comics);
app.use(comic);
app.use("/user", login);
app.use("/user", signup);

app.get("/", (req, res) => {
  res
    .status(200)
    .json({ message: "Welcome on my projet Marvel (under construction ^_^" });
});

app.all("*", (req, res) => {
  console.log("All routes");
});
app.listen(process.env.PORT, (req, res) => {
  console.log("server on");
});
