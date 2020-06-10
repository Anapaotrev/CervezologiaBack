const mongoose = require("mongoose");

const commentSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    comment: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const diarySchema = mongoose.Schema({
  notes: {
    type: String,
    required: true,
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  rating: {
    type: Number,
    required: true,
  },
  beer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Beer",
  },
  newBeer: {
    abv: String,
    name: String,
    ibu: String,
    origin: String,
    photoUrl: String,
    srm: String,
    style: String,
  },
  comments: [
    {
      type: commentSchema,
    },
  ],
});

const Diary = mongoose.model("Diary", diarySchema);

module.exports = Diary;
