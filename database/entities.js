const mongoose = require("mongoose");

// Admin Schema
const AdminSchema = new mongoose.Schema({
  username: String,
  password: String,
  fName: String,
  lName: String,
  email: String,
});

// Influencer Schema
const InfluencerSchema = new mongoose.Schema({
  username: String,
  password: String,
  fName: String,
  lName: String,
  email: String,
  campaign_id: String,
});

// Influencer Submission Entry Schema
const InfluencerSubmissionEntrySchema = new mongoose.Schema({
  campaign_id: Number,
  text: String,
  timestamp: Date,
});

// Admin Message Schema
const AdminMessageSchema = new mongoose.Schema({
  record_id: Number,
  campaign_id: Number,
  admin_id: Number,
  notes: String,
});

// Export models
module.exports = {
  Admin: mongoose.model("Admin", AdminSchema),
  Influencer: mongoose.model("Influencer", InfluencerSchema),
  InfluencerSubmissionEntry: mongoose.model(
    "InfluencerSubmissionEntry",
    InfluencerSubmissionEntrySchema
  ),
  AdminMessage: mongoose.model("AdminMessage", AdminMessageSchema),
};
