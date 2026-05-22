import { describe, expect, it } from 'vitest'
import { matchCommand, normalizeInput } from '../lib/matcher'

describe('matcher', () => {
  it('normalizes punctuation and whitespace', () => {
    expect(normalizeInput('  Create: FastAPI   endpoint orders! ')).toBe(
      'create fastapi endpoint orders',
    )
  })

  it('matches fastapi endpoint commands', () => {
    const result = matchCommand('create fastapi endpoint orders')

    expect(result.matched).toBe(true)
    if (result.matched) {
      expect(result.match.intentId).toBe('fastapi-endpoint')
      expect(result.match.entity).toBe('orders')
    }
  })

  it('matches react component commands', () => {
    const result = matchCommand('make react component service card')

    expect(result.matched).toBe(true)
    if (result.matched) {
      expect(result.match.entity).toBe('ServiceCard')
    }
  })

  it('returns unsupported state for unknown commands', () => {
    const result = matchCommand('do something magical')

    expect(result.matched).toBe(false)
  })
})
