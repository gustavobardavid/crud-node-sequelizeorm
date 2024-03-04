const { Sequelize } = require('sequelize')
const config = require('../config/database')
require('dotenv').config()

const sequelize = new Sequelize(process.env.db, process.env.user, process.env.password, {
    host: process.env.host, 
    dialect: process.env.dialect
})

conectar = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}

conectar();

module.exports = sequelize;