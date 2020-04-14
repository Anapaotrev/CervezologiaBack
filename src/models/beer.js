const mongoose = require('mongoose')
const validator = require('validator')

const beerSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    brewery: {
        type: String,
        required: true
    },
    style: {
        type: String,
        required: true,
    },
    origin: String,
    ibu: String,
    abv: String,
    srm: String,
    photoUrl: {
        type: String,
        validate(value) {
            if (!validator.isURL(value)) {
                throw new Error('Url Inválido')
            }
        }
    }
})

const Beer = mongoose.model('Beer', beerSchema)

module.exports = Beer
