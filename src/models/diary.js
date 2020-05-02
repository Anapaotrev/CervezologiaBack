const mongoose = require('mongoose')
const validator = require('validator')

const diarySchema = mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    createdFor:{
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Beer'
    }
})

const Diary = mongoose.model('Diary', diarySchema)

module.exports = Diary
