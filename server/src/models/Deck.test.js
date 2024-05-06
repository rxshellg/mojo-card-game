const { describe, it, expect, beforeAll, afterAll } = require('@jest/globals')
const { Deck } = require('./index.js')
const db = require('../db/config')

// define in global scope
let deck

// clear db and create new deck before tests
beforeAll(async () => {
  await db.sync({ force: true })
  deck = await Deck.create({ name: 'Deck 1', xp: 100})
})

// clear db after tests
afterAll(async () => await db.sync({ force: true }))

describe('Deck', () => {
    it('has necessary properties', async () => {
        expect(deck).toHaveProperty('id')
        expect(deck).toHaveProperty('name')
        expect(deck).toHaveProperty('xp')
    })
    it('has correct values', async () => {
        expect(deck.name).toBe('Deck 1')
        expect(deck.xp).toBe(100)
    })
})
