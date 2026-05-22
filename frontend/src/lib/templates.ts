import type { RuleMatch } from './types'

export function renderTemplate(match: RuleMatch): string {
  switch (match.intentId) {
    case 'fastapi-endpoint':
      return renderFastApiEndpoint(match.entity)
    case 'react-component':
      return renderReactComponent(match.entity)
    case 'readme-section':
      return renderReadmeSection(match.entity)
    case 'env-example':
      return renderEnvExample(match.entity)
    case 'github-issue':
      return renderGithubIssue(match.entity)
    case 'pytest-skeleton':
      return renderPytestSkeleton(match.entity)
  }
}

function renderFastApiEndpoint(entity: string): string {
  const resource = entity.toLowerCase().replace(/\s+/g, '-')
  const functionName = resource.replace(/-/g, '_')

  return `from fastapi import APIRouter

router = APIRouter(prefix="/${resource}", tags=["${resource}"])


@router.get("/")
def list_${functionName}():
    return {"items": []}


@router.post("/")
def create_${functionName}(payload: dict):
    return {"item": payload}
`
}

function renderReactComponent(entity: string): string {
  return `type ${entity}Props = {
  title: string
  description?: string
}

export function ${entity}({ title, description }: ${entity}Props) {
  return (
    <section className="rounded-lg border border-slate-200 bg-white p-4">
      <h2 className="text-base font-semibold text-slate-950">{title}</h2>
      {description && <p className="mt-1 text-sm text-slate-500">{description}</p>}
    </section>
  )
}
`
}

function renderReadmeSection(entity: string): string {
  return `## ${titleCase(entity)}

### Problem

Describe the developer workflow this solves.

### Features

- Feature one
- Feature two
- Feature three

### Local Setup

\`\`\`bash
npm install
npm run dev
\`\`\`

### Future Improvements

- Improvement one
- Improvement two
`
}

function renderEnvExample(entity: string): string {
  const prefix = entity.toUpperCase().replace(/[^A-Z0-9]+/g, '_')

  return `# ${titleCase(entity)}
${prefix}_ENV=development
${prefix}_PORT=8000
${prefix}_DATABASE_URL=sqlite:///./app.db
${prefix}_LOG_LEVEL=info
`
}

function renderGithubIssue(entity: string): string {
  return `## Summary

${titleCase(entity)}

## Expected Behavior

Describe what should happen.

## Actual Behavior

Describe what happens instead.

## Steps to Reproduce

1. 
2. 
3. 

## Notes

Add logs, screenshots, or related links.
`
}

function renderPytestSkeleton(entity: string): string {
  const name = entity.toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/^_|_$/g, '')

  return `def test_${name || 'feature'}():
    # Arrange
    payload = {}

    # Act
    result = payload

    # Assert
    assert result == {}
`
}

function titleCase(value: string): string {
  return value
    .split(/\s+/)
    .filter(Boolean)
    .map((part) => part.slice(0, 1).toUpperCase() + part.slice(1))
    .join(' ')
}
