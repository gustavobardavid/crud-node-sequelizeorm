const express = require('express')
const routes = require('./routes')
const app = express()
require('dotenv').config()
const PORT = process.env.PORT

app.use(express.json())

require('./database/sequelize')

app.use(routes)

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
  });