import type { IntentId } from './types'

export type IntentRule = {
  id: IntentId
  label: string
  category: string
  keywords: string[]
  entityMarkers: string[]
  fallbackEntity: string
}

export const rules: IntentRule[] = [
  {
    id: 'fastapi-endpoint',
    label: 'FastAPI endpoint',
    category: 'FastAPI',
    keywords: ['fastapi', 'endpoint'],
    entityMarkers: ['endpoint'],
    fallbackEntity: 'items',
  },
  {
    id: 'react-component',
    label: 'React component',
    category: 'React',
    keywords: ['react', 'component'],
    entityMarkers: ['component'],
    fallbackEntity: 'ExampleCard',
  },
  {
    id: 'readme-section',
    label: 'README section',
    category: 'README',
    keywords: ['readme'],
    entityMarkers: ['for'],
    fallbackEntity: 'developer tool',
  },
  {
    id: 'env-example',
    label: '.env.example',
    category: '.env',
    keywords: ['env', 'example'],
    entityMarkers: ['for'],
    fallbackEntity: 'app',
  },
  {
    id: 'github-issue',
    label: 'GitHub issue',
    category: 'GitHub Issue',
    keywords: ['github', 'issue'],
    entityMarkers: ['for'],
    fallbackEntity: 'bug report',
  },
  {
    id: 'pytest-skeleton',
    label: 'Pytest skeleton',
    category: 'Pytest',
    keywords: ['pytest'],
    entityMarkers: ['for'],
    fallbackEntity: 'feature',
  },
]
