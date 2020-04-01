const mongoose = require('mongoose')

const placeSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    description: {
        type: String
    }
})

const Place = mongoose.model('Place', placeSchema)

module.exports = Place
