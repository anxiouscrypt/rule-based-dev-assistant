import { rules } from './rules'
import type { IntentRule } from './rules'
import type { MatchResult } from './types'

export function normalizeInput(input: string): string {
  return input
    .trim()
    .replace(/[^\w\s.-]/g, ' ')
    .replace(/\s+/g, ' ')
    .toLowerCase()
}

export function matchCommand(input: string): MatchResult {
  const normalized = normalizeInput(input)

  if (!normalized) {
    return { matched: false, reason: 'Enter a command to generate a template.' }
  }

  const rule = rules.find((candidate) =>
    candidate.keywords.every((keyword) => normalized.includes(keyword)),
  )

  if (!rule) {
    return {
      matched: false,
      reason: 'No deterministic rule matched this command.',
    }
  }

  return {
    matched: true,
    match: {
      intentId: rule.id,
      category: rule.category,
      entity: extractEntity(normalized, rule),
      label: rule.label,
    },
  }
}

function extractEntity(normalized: string, rule: IntentRule): string {
  const words = normalized.split(' ')

  for (const marker of rule.entityMarkers) {
    const markerIndex = words.lastIndexOf(marker)
    if (markerIndex >= 0 && markerIndex < words.length - 1) {
      return formatEntity(words.slice(markerIndex + 1).join(' '), rule)
    }
  }

  return formatEntity(rule.fallbackEntity, rule)
}

function formatEntity(entity: string, rule: IntentRule): string {
  const cleaned = entity.trim()

  if (rule.id === 'react-component') {
    return cleaned
      .split(/[\s_-]+/)
      .filter(Boolean)
      .map((part) => part.slice(0, 1).toUpperCase() + part.slice(1))
      .join('')
  }

  if (rule.id === 'fastapi-endpoint') {
    return cleaned.toLowerCase().replace(/\s+/g, '-')
  }

  return cleaned
}
