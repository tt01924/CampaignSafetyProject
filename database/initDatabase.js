const mongoose = require("mongoose");

// Admin schema
const adminSchema = new mongoose.Schema({
  username: String,
  password: String,
});

// Influencer schema
const influencerSchema = new mongoose.Schema({
  username: String,
  password: String,
});

// Models
const Admin = mongoose.model("Admin", adminSchema);
const Influencer = mongoose.model("Influencer", influencerSchema);

async function initDatabase() {
  try {
    // Connect to MongoDB
    await mongoose.connect("mongodb://127.0.0.1:27017/dummyApp", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to the database.");

    // Clear existing data
    await Admin.deleteMany({});
    await Influencer.deleteMany({});

    // Insert dummy data
    await Admin.create({ username: "admin", password: "admin123" });
    await Influencer.create({ username: "Shar", password: "Shar123" });
    await Influencer.create({ username: "Etellan", password: "Etellan123" });
    await Influencer.create({ username: "Viyaura", password: "Viyaura123" });
    await Influencer.create({ username: "Hanacue", password: "Hanacue123" });
    await Influencer.create({ username: "Oridays", password: "Oridays123" });

    console.log("Dummy data has been inserted.");
  } catch (error) {
    console.error("Error initializing database:", error);
  } finally {
    mongoose.connection.close();
  }
}

initDatabase();