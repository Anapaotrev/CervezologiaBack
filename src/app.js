const express = require('express')
const bcryptjs = require('bcryptjs')
require('./db/db')
var cors = require('cors');
const AdminBro = require('admin-bro')
const AdminBroExpressjs = require('admin-bro-expressjs')

const userRoutes = require('./routes/user')
const placeRoutes = require('./routes/places')
const beerRoutes = require('./routes/beers')
const diaryRoutes = require('./routes/diaries')

const User = require('./models/user')
const Beer = require('./models/beer')
const Diary = require('./models/diary')
const Place = require('./models/place')

const app = express()
const port = process.env.PORT || 3000

AdminBro.registerAdapter(require('admin-bro-mongoose'))

const adminBro = new AdminBro({
  resources: [User, Beer, Diary, Place],
  rootPath: '/admin',
  branding: {
    companyName: 'Cervezología',
    softwareBrothers: false
  },
})

const router = AdminBroExpressjs.buildAuthenticatedRouter(adminBro, {
  authenticate: async (email, password) => {
    const user = await User.findOne({ email })
    if (user.role === 'admin') {
      const matched = await bcryptjs.compare(password, user.password)
      if (matched) {
        return user
      }
    }
    return false
  },
  cookiePassword: 'secret',
})

app.use(adminBro.options.rootPath, router)
app.use(cors())
app.use(express.json())
app.use(express.static('src'));
app.use('/', userRoutes, placeRoutes, beerRoutes, diaryRoutes);

app.listen(port, function() {
  console.log('Server up and running on port ' + port)
})