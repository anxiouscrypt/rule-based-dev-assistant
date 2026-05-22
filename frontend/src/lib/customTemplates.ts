export type CustomTemplate = {
  id: string
  name: string
  body: string
}

const STORAGE_KEY = 'rule-based-dev-assistant.customTemplates'

export function loadCustomTemplates(): CustomTemplate[] {
  const raw = window.localStorage.getItem(STORAGE_KEY)

  if (!raw) {
    return []
  }

  try {
    return JSON.parse(raw) as CustomTemplate[]
  } catch {
    return []
  }
}

export function saveCustomTemplates(templates: CustomTemplate[]) {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(templates))
}

export function createCustomTemplate(name: string, body: string): CustomTemplate {
  return {
    id: crypto.randomUUID(),
    name,
    body,
  }
}
