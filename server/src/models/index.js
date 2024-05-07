const User = require('./User.js')
const Attack = require('./Attack.js')
const Card = require('./Card.js')
const Deck = require('./Deck.js')

// Associate Users and Decks with a one-to-one relationship
User.hasOne(Deck)
Deck.belongsTo(User)

// Associate Decks and Cards with a one-to-many association
Deck.hasMany(Card)
Card.belongsTo(Deck)

// Associate Cards and Attacks with a many-to-many association
Card.belongsToMany(Attack, { through: 'CardAttacks' })
Attack.belongsToMany(Card, { through: 'CardAttacks' })

module.exports = { User, Attack, Card, Deck }