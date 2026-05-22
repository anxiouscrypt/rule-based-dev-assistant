import { useEffect, useState } from 'react'
import { Save } from 'lucide-react'
import {
  createCustomTemplate,
  loadCustomTemplates,
  saveCustomTemplates,
  type CustomTemplate,
} from '../lib/customTemplates'

export function CustomTemplateStorage() {
  const [templates, setTemplates] = useState<CustomTemplate[]>([])
  const [name, setName] = useState('Custom checklist')
  const [body, setBody] = useState('- Step one\n- Step two')

  useEffect(() => {
    setTemplates(loadCustomTemplates())
  }, [])

  function saveTemplate() {
    const next = [createCustomTemplate(name, body), ...templates]
    setTemplates(next)
    saveCustomTemplates(next)
  }

  return (
    <section className="rounded-lg border border-slate-200 bg-white">
      <div className="border-b border-slate-200 px-4 py-3">
        <h2 className="text-base font-semibold">Custom Templates</h2>
        <p className="text-sm text-slate-500">Stored locally in this browser.</p>
      </div>
      <div className="space-y-3 p-4">
        <input
          className="h-10 w-full rounded-md border border-slate-300 px-3 text-sm outline-none focus:border-violet-500"
          onChange={(event) => setName(event.target.value)}
          value={name}
        />
        <textarea
          className="h-28 w-full resize-none rounded-md border border-slate-300 bg-slate-950 p-3 font-mono text-xs leading-5 text-slate-100 outline-none focus:border-violet-500"
          onChange={(event) => setBody(event.target.value)}
          value={body}
        />
        <button
          className="inline-flex h-9 items-center gap-2 rounded-md bg-slate-950 px-3 text-sm font-medium text-white hover:bg-slate-800"
          onClick={saveTemplate}
          type="button"
        >
          <Save className="h-4 w-4" />
          Save custom
        </button>
        {templates.length > 0 && (
          <div className="space-y-2 pt-2">
            {templates.map((template) => (
              <div className="rounded-md bg-slate-50 px-3 py-2" key={template.id}>
                <p className="text-sm font-medium text-slate-800">{template.name}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
