const mongoose = require("mongoose");
const {
  Admin,
  Influencer,
  InfluencerSubmissionEntry,
  AdminMessage,
} = require("./entities");

// Connecting to MongoDB
(async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/dummyApp", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
    process.exit(1);
  }
})();

async function initDummyDatabase() {
  try {
    // Clear existing data
    await Admin.deleteMany({});
    await Influencer.deleteMany({});
    await InfluencerSubmissionEntry.deleteMany({});
    await AdminMessage.deleteMany({});

    // Insert Admin
    const admin1 = new Admin({
      username: "admin",
      password: "admin123",
      fName: "Himika",
      lName: "Doe",
      email: "todd01924@gmail.com",
    });

    // Insert Influencers
    const influencers = [
      {
        username: "Shar",
        password: "Shar123",
        fName: "Shar",
        lName: "Doe",
        email: "shar@example.com",
        campaign_id: "1",
        video_topic: "",
        submissions: [
          {
            project: 1,
            imagePath: "./uploads/shar-project1.jpeg",
          },
        ],
        script: "",
      },
      {
        username: "Etellan",
        password: "Etellan123",
        fName: "Etellan",
        lName: "Doe",
        email: "etellan@example.com",
        campaign_id: "2",
        video_topic: "",
        submissions: [
          {
            project: 1,
            imagePath: "./uploads/etellan-project1.jpeg",
          },
        ],
        script: "",
      },
      {
        username: "Viyaura",
        password: "Viyaura123",
        fName: "Viyaura",
        lName: "Doe",
        email: "viyaura@example.com",
        campaign_id: "3",
        video_topic: "",
        submissions: [    {
          project: 1,
          imagePath: "./uploads/viyaura-project1.jpeg",
        },],
        script: "",
      },
      {
        username: "Hanacue",
        password: "Hanacue123",
        fName: "Hanacue",
        lName: "Doe",
        email: "hanacue@example.com",
        campaign_id: "4",
        video_topic: "",
        submissions: [
          {
            project: 1,
            imagePath: "./uploads/hanacue-project1.jpeg",
          },
        ],
        script: "",
      },
      {
        username: "Oridays",
        password: "Oridays123",
        fName: "Oridays",
        lName: "Doe",
        email: "oridays@example.com",
        campaign_id: "5",
        video_topic: "",
        submissions: [
          {
            project: 1,
            imagePath: "./uploads/oridays-project1.jpeg",
          },
        ],
        script: "",
      },
    ];

    // Save Admin and Influencers
    await admin1.save();
    await Influencer.insertMany(influencers);

    // Insert Influencer Submissions
    const submissions = [
      {
        campaign_id: 6,
        text: "Hey team, Hope this is okay!",
        timestamp: new Date("2024-11-29T12:00:00"),
      },
      {
        campaign_id: 6,
        text: "Struggling to meet your requirements from your last message, could you be more specific.",
        timestamp: new Date("2024-12-02T18:45:00"),
      },
      {
        campaign_id: 7,
        text: "All ran smoothly.",
        timestamp: new Date("2024-11-30T15:30:00"),
      },
      {
        campaign_id: 7,
        text: "Updated and improved.",
        timestamp: new Date("2024-12-03T10:15:00"),
      },
      {
        campaign_id: 8,
        text: "Let me know how this is, I found your examples super helpful.",
        timestamp: new Date("2024-12-01T09:00:00"),
      },
      {
        campaign_id: 8,
        text: "Script feels a little short, let me know what you think.",
        timestamp: new Date("2024-12-04T20:00:00"),
      },
      {
        campaign_id: 4,
        text: "Started a new book today, feeling inspired.",
        timestamp: new Date("2024-12-05T14:30:00"),
      },
      {
        campaign_id: 4,
        text: "So excited for this collaboration to come to life!",
        timestamp: new Date("2024-12-06T16:45:00"),
      },
    ];
    await InfluencerSubmissionEntry.insertMany(submissions);

    // Insert Admin Messages
    const adminMessages = [
      {
        record_id: 1,
        campaign_id: 1,
        admin_id: admin1._id,
        notes: "This is great, love the structure.",
      },
      {
        record_id: 2,
        campaign_id: 2,
        admin_id: admin1._id,
        notes: "Thanks for your hard work.",
      },
      {
        record_id: 3,
        campaign_id: 3,
        admin_id: admin1._id,
        notes: "This script needs revisiting.",
      },
      {
        record_id: 4,
        campaign_id: 4,
        admin_id: admin1._id,
        notes: "You're going to have to make this longer.",
      },
      {
        record_id: 5,
        campaign_id: 5,
        admin_id: admin1._id,
        notes: "This is my favourite script yet!",
      },
    ];
    await AdminMessage.insertMany(adminMessages);

    console.log("Dummy data initialized successfully!");
  } catch (error) {
    console.error("Error initializing dummy data:", error);
  } finally {
    mongoose.connection.close();
  }
}

initDummyDatabase();