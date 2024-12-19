const express = require("express");
const mongoose = require("mongoose");
const { Admin, Influencer } = require("./entities");

const app = express();
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect("mongodb://127.0.0.1:27017/dummyApp")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Failed to connect to MongoDB", err));

// Add a route for "/"
app.get("/", (req, res) => {
  res.send("Welcome to the API!");
});

// Print Admin and Influencer data
app.get("/printData", async (req, res) => {
    try {
      // Fetch all Admin documents
      const admins = await Admin.find();
      console.log("Admins in the database:", admins); // Log admins to the terminal
  
      // Fetch all Influencer documents
      const influencers = await Influencer.find();
      console.log("Influencers in the database:", influencers); // Log influencers to the terminal
  
      res.json({ admins, influencers }); // Optionally, return the data in the response
    } catch (err) {
      console.error("Error fetching data:", err);
      res.status(500).json({ error: "Error fetching data" });
    }
  });

// Login route
app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    const admin = await Admin.findOne({ username, password });
    if (admin) {
      return res.json({ role: "admin" });
    }

    const influencer = await Influencer.findOne({ username, password });
    if (influencer) {
      return res.json({ role: "influencer" });
    }

    res.status(401).json({ error: "Invalid credentials" });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});