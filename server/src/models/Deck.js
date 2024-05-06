// Import our instance and DataTypes
const sequelize = require('../db/config')
const { DataTypes } = require('sequelize')

// Use the define method to create our model(table)
const Deck = sequelize.define('Deck', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    xp: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
})

module.exports = Deck