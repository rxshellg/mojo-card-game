const { describe, it, expect, beforeAll, afterAll } = require('@jest/globals')
const { Attack } = require('./index.js')
const db = require('../db/config')

// define in global scope
let attack

// clear db and create new attack before tests
beforeAll(async () => {
  await db.sync({ force: true })
  attack = await Attack.create({ title: 'superKick', mojoCost: 100, staminaCost: 75})
})

// clear db after tests
afterAll(async () => await db.sync({ force: true }))

describe('Attack', () => {
    it('has necessary properties', async () => {
        expect(attack).toHaveProperty('id')
        expect(attack).toHaveProperty('title')
        expect(attack).toHaveProperty('mojoCost')
        expect(attack).toHaveProperty('staminaCost')
    })
    it('has correct values', async () => {
        expect(attack.title).toBe('superKick')
        expect(attack.mojoCost).toBe(100)
        expect(attack.staminaCost).toBe(75)
    })
})
