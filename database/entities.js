const mongoose = require("mongoose");

// Submission Schema (embedded directly in Influencer)
const submissionSchema = new mongoose.Schema({
  project: { type: Number, required: true },
  imagePath: { type: String, required: true },
});

// Admin Schema
const AdminSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  fName: { type: String },
  lName: { type: String },
  email: { type: String },
});

// Influencer Schema (with embedded submissions array)
const InfluencerSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  fName: { type: String },
  lName: { type: String },
  email: { type: String },
  campaign_id: { type: String },
  video_topic: { type: String },
  submissions: [submissionSchema], // Embedding the submissions array here
  script: { type: String },
});

// Influencer Submission Entry Schema
const InfluencerSubmissionEntrySchema = new mongoose.Schema({
  campaign_id: { type: Number, required: true },
  text: { type: String, required: true },
  timestamp: { type: Date, required: true },
});

// Admin Message Schema
const AdminMessageSchema = new mongoose.Schema({
  record_id: { type: Number, required: true },
  campaign_id: { type: Number, required: true },
  admin_id: { type: mongoose.Schema.Types.ObjectId, ref: "Admin" },
  notes: { type: String, required: true },
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