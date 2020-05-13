const mongoose = require('mongoose')

const diarySchema = mongoose.Schema({
    notes: {
        type: String,
        required: true
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    rating: {
        type: Number,
        required: true
    },
    beer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Beer'
    },
    newBeer: {
        abv: String,
        name: String, 
        ibu: String,
        origin: String,
        photos: [String],
        srm: String,
        style: String
    },
})

const Diary = mongoose.model('Diary', diarySchema)

module.exports = Diary
