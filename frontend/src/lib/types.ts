export type IntentId =
  | 'fastapi-endpoint'
  | 'react-component'
  | 'readme-section'
  | 'env-example'
  | 'github-issue'
  | 'pytest-skeleton'

export type RuleMatch = {
  intentId: IntentId
  category: string
  entity: string
  label: string
}

export type MatchResult =
  | {
      matched: true
      match: RuleMatch
    }
  | {
      matched: false
      reason: string
    }
