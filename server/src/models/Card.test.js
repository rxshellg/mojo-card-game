const { describe, it, expect, beforeAll, afterAll } = require('@jest/globals')
const { Card } = require('./index.js')
const db = require('../db/config')

// define in global scope
let card

// clear db and create new card before tests
beforeAll(async () => {
  await db.sync({ force: true })
  card = await Card.create({ name: 'Card 1', mojo: 100, stamina: 75, imgUrl: 'google.com/randomimage'})
})

// clear db after tests
afterAll(async () => await db.sync({ force: true }))

describe('Card', () => {
    it('has necessary properties', async () => {
        expect(card).toHaveProperty('id')
        expect(card).toHaveProperty('name')
        expect(card).toHaveProperty('mojo')
        expect(card).toHaveProperty('stamina')
        expect(card).toHaveProperty('imgUrl')
    })
    it('has correct values', async () => {
        expect(card.name).toBe('Card 1')
        expect(card.mojo).toBe(100)
        expect(card.stamina).toBe(75)
        expect(card.imgUrl).toBe('google.com/randomimage')
    })
})
