const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  courseId: {type:String, required:true, unique:true},
  category: { type: String, required: true},
  chapters: [
    {
      id: { type: String, required: true, unique:true },
      title: { type: String, required: true },
      content: { type: String, default: "none" },
      description: { type: String, default: "NA" },
      videoLink: { type: String, default: "NA" },
      duration: { type: Number, required: true }
    }
  ],
  description: { type: String },
  duration: { type: Number, required: true },
  instructorName: { type: String, required: true },
  language: { type: String, required: true },
  level: { type: String, required: true },
  price: { type: Number, required: true },
  status: { type: String, required: true },
  visibility: { type: String, required: true }
});

const Course = mongoose.model('Course', courseSchema);
module.exports = { Course };
