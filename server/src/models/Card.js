// Import our instance and DataTypes
const db = require('../db/config')
const { DataTypes } = require('sequelize')

// Use the define method to create our model(table)
const Card = db.define('Card', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    mojo: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    stamina: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    imgUrl: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

module.exports = Card