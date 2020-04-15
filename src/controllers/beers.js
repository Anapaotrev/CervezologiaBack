const Beer = require('../models/beer')

const getBeers = function(req, res) {
    var filters = {}

    if (req.query.brewery) filters.brewery = req.query.brewery
    if (req.query.origin) filters.origin = req.query.origin
    if (req.query.style) filters.style = req.query.style

    Beer.find(filters).then(function(beers) {
        res.send(beers)
    }).catch(function(error) {
        res.status(500).send(error)
    })
}

const getDistinct = function(req, res) {
    var value = req.query.value

    Beer.collection.distinct(value).then(function(beers) {
        res.send(beers)
    }).catch(function(error) {
        res.status(500).send(error)
    });
}

const getBeer = function(req, res) {
    const _id = req.params.id
    Beer.findOne({ _id }).then(function(beer) {
        if (!beer) {
            return res.status(404).send({ error: `Beer with id ${_id} not found.` })
        }
        return res.send(beer)
    }).catch(function(error) {
        return res.status(404).send(error)
    })
}

const newBeer = function(req, res) {
    const beer = new Beer(req.body)
    beer.save().then(function() {
      return res.send(beer)
    }).catch(function(error) {
      return res.status(400).send(error)
    })
}

const updateBeer = function(req, res) {
    const _id = req.params.id
    Beer.findByIdAndUpdate(_id, req.body).then(function(beer) {
        if (!beer) {
            return res.status(404).send({ error: `Beer with id ${_id} not found.`})
        }
        return res.send(beer)
    }).catch(function(error) {
        res.status(500).send(error)
    })
}

const deleteBeer = function(req, res) {
    const _id = req.params.id
    Beer.findByIdAndDelete(_id).then(function(beer) {
        if (!beer) {
            return res.status(404).send('Beer not found')
        }
        return res.send(beer)
    }).catch(function(error) {
        res.status(505).send(error)
    })
}

module.exports = {
    getBeers,
    getBeer,
    newBeer,
    updateBeer,
    deleteBeer,
    getDistinct
}