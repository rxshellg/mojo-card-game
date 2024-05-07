// Import our instance and DataTypes
const db = require('../db/config')
const { DataTypes } = require('sequelize')

// Use the define method to create our model(table)
const Deck = db.define('Deck', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    xp: {
        type: DataTypes.INTEGER
    }
})

module.exports = Deck