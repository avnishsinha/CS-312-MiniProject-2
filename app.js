/*
Mini-Project 2: API Integration
Project Name: CS-312-MiniProject-2
API: JokeAPI (returns a joke based on the user's name) Choosing this one because it was the most simple and easy to use.
BONUS CHALLENGE: Enhanced features including categories, history, ratings, and more!
*/

const express = require("express");
const axios = require("axios");
const path = require("path");
const app = express();

// In-memory storage for bonus features (in production, use a database)
let jokeHistory = [];
let userRatings = {};
let favoriteJokes = [];

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // For AJAX requests
app.use(express.static(path.join(__dirname, "public")));

// Joke categories for bonus feature
const jokeCategories = [
  { id: 'Any', name: 'Any Category', emoji: '🎭' },
  { id: 'Programming', name: 'Programming', emoji: '💻' },
  { id: 'Misc', name: 'Miscellaneous', emoji: '🎪' },
  { id: 'Pun', name: 'Puns', emoji: '😄' },
  { id: 'Spooky', name: 'Spooky', emoji: '👻' },
  { id: 'Christmas', name: 'Christmas', emoji: '🎄' }
];

// Home route with input form and bonus features
app.get("/", (req, res) => {
  res.render("home", { 
    categories: jokeCategories,
    recentJokes: jokeHistory.slice(-5), // Show last 5 jokes
    totalJokes: jokeHistory.length
  });
});

// Joke result route with enhanced features
app.post("/get-joke", async (req, res) => {
  const { firstname, lastname, category = 'Any', count = 1 } = req.body;
  
  try {
    let jokes = [];
    
    // Get multiple jokes if requested
    for (let i = 0; i < Math.min(count, 5); i++) { // Limit to 5 jokes max
      const apiUrl = `https://v2.jokeapi.dev/joke/${category}?firstName=${firstname}&lastName=${lastname}&type=single`;
      const response = await axios.get(apiUrl);
      const joke = response.data.joke || "No joke found.";
      
      const jokeData = {
        id: Date.now() + i,
        text: joke,
        category: category,
        firstName: firstname,
        lastName: lastname,
        timestamp: new Date().toISOString(),
        rating: 0,
        isFavorite: false
      };
      
      jokes.push(jokeData);
      jokeHistory.push(jokeData);
    }
    
    // Keep only last 50 jokes in history
    if (jokeHistory.length > 50) {
      jokeHistory = jokeHistory.slice(-50);
    }
    
    res.render("new", { 
      jokes, 
      firstname, 
      lastname, 
      category,
      categories: jokeCategories,
      recentJokes: jokeHistory.slice(-5)
    });
  } catch (error) {
    res.render("edit", { 
      message: "Failed to fetch joke. Please try again.",
      categories: jokeCategories
    });
  }
});

// Bonus: Joke history page
app.get("/history", (req, res) => {
  const { search, category } = req.query;
  let filteredJokes = [...jokeHistory];
  
  // Search functionality
  if (search) {
    filteredJokes = filteredJokes.filter(joke => 
      joke.text.toLowerCase().includes(search.toLowerCase()) ||
      joke.firstName.toLowerCase().includes(search.toLowerCase()) ||
      joke.lastName.toLowerCase().includes(search.toLowerCase())
    );
  }
  
  // Category filter
  if (category && category !== 'Any') {
    filteredJokes = filteredJokes.filter(joke => joke.category === category);
  }
  
  res.render("history", { 
    jokes: filteredJokes,
    categories: jokeCategories,
    search,
    selectedCategory: category
  });
});

// Bonus: Rate a joke (AJAX endpoint)
app.post("/rate-joke", (req, res) => {
  const { jokeId, rating } = req.body;
  const joke = jokeHistory.find(j => j.id == jokeId);
  
  if (joke) {
    joke.rating = parseInt(rating);
    userRatings[jokeId] = rating;
    res.json({ success: true, newRating: joke.rating });
  } else {
    res.json({ success: false });
  }
});

// Bonus: Toggle favorite joke (AJAX endpoint)
app.post("/toggle-favorite", (req, res) => {
  const { jokeId } = req.body;
  const joke = jokeHistory.find(j => j.id == jokeId);
  
  if (joke) {
    joke.isFavorite = !joke.isFavorite;
    if (joke.isFavorite) {
      favoriteJokes.push(joke);
    } else {
      favoriteJokes = favoriteJokes.filter(j => j.id !== jokeId);
    }
    res.json({ success: true, isFavorite: joke.isFavorite });
  } else {
    res.json({ success: false });
  }
});

// Bonus: Favorites page
app.get("/favorites", (req, res) => {
  res.render("favorites", { 
    favorites: favoriteJokes,
    categories: jokeCategories
  });
});

// Bonus: Statistics page
app.get("/stats", (req, res) => {
  const stats = {
    totalJokes: jokeHistory.length,
    averageRating: jokeHistory.length > 0 ? 
      (jokeHistory.reduce((sum, joke) => sum + joke.rating, 0) / jokeHistory.length).toFixed(1) : 0,
    topCategory: jokeHistory.length > 0 ? 
      Object.entries(jokeHistory.reduce((acc, joke) => {
        acc[joke.category] = (acc[joke.category] || 0) + 1;
        return acc;
      }, {})).sort((a, b) => b[1] - a[1])[0][0] : 'None',
    totalFavorites: favoriteJokes.length,
    categories: jokeCategories.map(cat => ({
      ...cat,
      count: jokeHistory.filter(joke => joke.category === cat.id).length
    }))
  };
  
  res.render("stats", { stats, categories: jokeCategories });
});

// Bonus: API endpoint for getting random joke
app.get("/api/random-joke", async (req, res) => {
  try {
    const { category = 'Any', firstName = '', lastName = '' } = req.query;
    const apiUrl = `https://v2.jokeapi.dev/joke/${category}?firstName=${firstName}&lastName=${lastName}&type=single`;
    const response = await axios.get(apiUrl);
    res.json({ joke: response.data.joke || "No joke found." });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch joke" });
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
  console.log("🎭 Bonus features enabled: Categories, History, Ratings, Favorites, Stats!");
});

module.exports = app;