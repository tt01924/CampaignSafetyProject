const express = require("express");
const mongoose = require("mongoose");
const { Admin, Influencer, Submissions } = require("./entities");
const cors = require('cors');
const multer = require("multer");
const upload = multer({ dest: "uploads/" }); 
const router = express.Router();

// Multer allows for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Directory where images will be stored
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});


const app = express();
app.use(express.json());
app.use(cors());
// Connect to MongoDB
mongoose
  .connect("mongodb://127.0.0.1:27017/dummyApp")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Failed to connect to MongoDB", err));

// Print Admin and Influencer data
app.post("/", async (req, res) => {
    try {
      const admins = await Admin.find();
      console.log("Admins in the database:", admins);
  
      const influencers = await Influencer.find();
      console.log("Influencers in the database:", influencers);
  
      res.json({ admins, influencers }); 
    } catch (err) {
      console.error("Error fetching data:", err);
      res.status(500).json({ error: "Error fetching data" });
    }
  });

// Login 
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

// Logout
app.post("/logout", async (req, res) => {
    try {
      // Save user submissions and close the database here
      const { username, submissions } = req.body;
  
      await Submissions.create({ username, submissions });
  
      console.log(`Submissions saved for user: ${username}`);
      
      res.json({ message: "Logged out successfully and submissions saved." });
  
      // Optionally close the database connection if required
    //   mongoose.connection.close(() => {
    //     console.log("MongoDB connection closed.");
    //   });
    } catch (err) {
      console.error("Error during logout:", err);
      res.status(500).json({ error: "Failed to log out and save data." });
    }
  });

// Upload images
app.post("/upload", upload.single("image"), async (req, res) => {
  try {
    const { project } = req.body;
    const username = req.body.username || "unknown_user";
    const imagePath = req.file.path;

    // Save the image path to the database
    await Submissions.create({
      username,
      submissions: [{ project, imagePath }],
    });

    res.json({ message: "Image uploaded successfully." });
  } catch (err) {
    console.error("Error uploading image:", err);
    res.status(500).json({ error: "Failed to upload image." });
  }
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});