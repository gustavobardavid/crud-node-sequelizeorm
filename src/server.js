const express = require('express')
const routes = require('./routes')
const app = express()
require('dotenv').config()
const cors = require('cors');
const PORT = process.env.PORT

app.use(express.json())
app.use(cors());

require('./database/sequelize')

app.use(routes)

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
  });