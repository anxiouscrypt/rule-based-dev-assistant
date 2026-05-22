import { describe, expect, it } from 'vitest'
import { matchCommand } from '../lib/matcher'
import { renderTemplate } from '../lib/templates'

function render(command: string) {
  const result = matchCommand(command)
  if (!result.matched) {
    throw new Error('Expected command to match')
  }
  return renderTemplate(result.match)
}

describe('templates', () => {
  it('renders a FastAPI endpoint', () => {
    const output = render('create fastapi endpoint orders')

    expect(output).toContain('APIRouter')
    expect(output).toContain('prefix="/orders"')
  })

  it('renders a React component', () => {
    const output = render('make react component service card')

    expect(output).toContain('export function ServiceCard')
    expect(output).toContain('ServiceCardProps')
  })

  it('renders a pytest skeleton', () => {
    const output = render('create pytest for config validation')

    expect(output).toContain('def test_config_validation')
  })
})
