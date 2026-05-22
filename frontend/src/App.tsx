import { useState } from 'react'
import { CategorySidebar } from './components/CategorySidebar'
import { CommandInput } from './components/CommandInput'
import { SuggestionList } from './components/SuggestionList'
import { TemplatePreview } from './components/TemplatePreview'
import { examples } from './lib/examples'

function App() {
  const [command, setCommand] = useState('create fastapi endpoint orders')

  return (
    <main className="min-h-screen bg-[#f5f6f8] px-4 py-5 text-slate-900 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <header className="mb-5 border-b border-slate-200 pb-4">
          <p className="text-sm font-medium text-violet-700">Rule-Based Dev Assistant</p>
          <h1 className="text-2xl font-semibold text-slate-950">
            Deterministic snippets from structured commands
          </h1>
        </header>
        <div className="grid gap-4 lg:grid-cols-[240px_minmax(0,1fr)_520px]">
          <CategorySidebar />
          <section className="rounded-lg border border-slate-200 bg-white">
            <div className="border-b border-slate-200 px-4 py-3">
              <h2 className="text-base font-semibold">Command</h2>
            </div>
            <div className="space-y-4 p-4">
              <CommandInput value={command} onChange={setCommand} />
              <SuggestionList examples={examples} onSelect={setCommand} />
            </div>
          </section>
          <TemplatePreview command={command} />
        </div>
      </div>
    </main>
  )
}

export default App
