// Import our instance and DataTypes
const db = require('../db/config')
const { DataTypes } = require('sequelize')

// Use the define method to create our model(table)
const Attack = db.define('Attack', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    mojoCost: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    staminaCost: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
})

module.exports = Attack