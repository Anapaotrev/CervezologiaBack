const express = require('express')
require('./db/db')
var cors = require('cors');

const userRoutes = require('./routes/user')
const placeRoutes = require('./routes/places')
const beerRoutes = require('./routes/beers')

const app = express()
const port = process.env.PORT || 3000

app.use(cors())
app.use(express.json())
app.use('/', userRoutes, placeRoutes, beerRoutes);

app.listen(port, function() {
  console.log('Server up and running on port ' + port)
})