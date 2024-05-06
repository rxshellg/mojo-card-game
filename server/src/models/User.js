// Import our instance and DataTypes
const sequelize = require('../db/config')
const { DataTypes } = require('sequelize')

// Use the define method to create our model(table)
const User = sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false
  }
})

module.exports = User