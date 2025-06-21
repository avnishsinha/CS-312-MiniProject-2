/*
Mini-Project 2: API Integration
Project Name: CS-312-MiniProject-2
API: JokeAPI (returns a joke based on the user's name) Choosing this one because it was the most simple and easy to use.
Tech Stack: Node.js, Express.js, Axios, EJS, HTML, CSS
*/

const express = require("express");
const axios = require("axios");
const path = require("path");
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// Home route with input form
app.get("/", (req, res) => {
  res.render("home");
});

// Joke result route
app.post("/get-joke", async (req, res) => {
  const { firstname, lastname } = req.body;
  const apiUrl = `https://v2.jokeapi.dev/joke/Any?firstName=${firstname}&lastName=${lastname}&type=single`;

  try {
    const response = await axios.get(apiUrl);
    const joke = response.data.joke || "No joke found.";
    res.render("new", { joke, firstname, lastname });
  } catch (error) {
    res.render("edit", { message: "Failed to fetch joke. Please try again." });
  }
});

  app.listen(3000, () => {
    console.log("Server is running on port 3000");
  });

  module.exports = app;