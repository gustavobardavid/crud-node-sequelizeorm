const sequelize = require('../database/sequelize');
const {DataTypes} = require('sequelize');

const User = sequelize.define('User', {
  // Model attributes are defined here
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    primaryKey: true
  }
}, {
  // Other model options go here
});

async function sincronizar(){
  await User.sync();
  console.log("Sincronizado");
}

sincronizar();

module.exports = User
