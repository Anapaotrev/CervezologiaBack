const mongoose = require('mongoose')

const placeSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    category: {
        type: String
    },
    schedule: {
        type: String
    },
    instagram: {
        type: String
    },
    website: {
        type: String
    },
    phoneNo: {
        type: String
    },
    address: {
        type: String
    },
    lat: {
        type: String,
        required: true
    },
    lng: {
        type: String,
        required: true
    }
})

const Place = mongoose.model('Place', placeSchema)

module.exports = Place
