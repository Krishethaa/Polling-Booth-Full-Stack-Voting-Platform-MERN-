require('dotenv').config();
const mongoose = require('mongoose');
const Poll = require('./Model/pollModel.js'); // Adjust the path if needed

async function updatePollsCategory() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");

    const result = await Poll.updateMany(
      { category: { $exists: false } },
      { $set: { category: "Others" } }
    );

    console.log(`${result.modifiedCount} polls updated.`);
    mongoose.disconnect();
  } catch (error) {
    console.error("Error updating polls:", error);
  }
}

updatePollsCategory();
