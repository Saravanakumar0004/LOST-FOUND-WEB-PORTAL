const mongoose = require('mongoose');

const userDataSchema = new mongoose.Schema({
  topic: { type: String, required: true },
  description: { type: String },
  image: { type: String },
  studentName: { type: String, required: true },
  department: { type: String, required: true },
  date: { type: String, required: true },   // Store as string (e.g., '2025-07-17')
  time: { type: String, required: true }    // Store as string (e.g., '10:30 AM')
},{
    timestamps: true
});


module.exports = mongoose.model('UserData', userDataSchema);
