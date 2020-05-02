const Place = require('../models/place')

const getPlaces = function(req, res) {
    var filters = {}

    if (req.query.category) filters.category = req.query.category

    Place.find(filters).then(function(places) {
        res.send(places)
    }).catch(function(error) {
        res.status(500).send(error)
    })
}

const getPlace = function(req, res) {
    const _id = req.params.id
    Place.findOne(_id).then(function(place) {
        if (!place) {
            return res.status(404).send({ error: `Place with id ${_id} not found.` })
        }
        return res.send(place)
    }).catch(function(error) {
        return res.status(404).send(error)
    })
}

const newPlace = function(req, res) {
    const place = new Place(req.body)
    place.save().then(function() {
      return res.send(place)
    }).catch(function(error) {
      return res.status(400).send(error)
    })
}

const updatePlace = function(req, res) {
    const _id = req.params.id
    Place.findByIdAndUpdate(_id, req.body).then(function(place) {
        if (!place) {
            return res.status(404).send({ error: `Place with id ${_id} not found.`})
        }
        return res.send(place)
    }).catch(function(error) {
        res.status(500).send(error)
    })
}

const deletePlace = function(req, res) {
    const _id = req.params.id
    Place.findByIdAndDelete(_id).then(function(place) {
        if (!place) {
            return res.status(404).send('Place not found')
        }
        return res.send(place)
    }).catch(function(error) {
        res.status(505).send(error)
    })
}

module.exports = {
    getPlaces,
    getPlace,
    newPlace,
    updatePlace,
    deletePlace
}