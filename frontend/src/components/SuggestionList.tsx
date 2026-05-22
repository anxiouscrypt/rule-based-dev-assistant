type SuggestionListProps = {
  examples: string[]
  onSelect: (example: string) => void
}

export function SuggestionList({ examples, onSelect }: SuggestionListProps) {
  return (
    <div>
      <p className="mb-2 text-sm font-semibold text-slate-800">Examples</p>
      <div className="space-y-2">
        {examples.map((example) => (
          <button
            className="block w-full rounded-md border border-slate-200 px-3 py-2 text-left font-mono text-sm text-slate-700 hover:bg-slate-50"
            key={example}
            onClick={() => onSelect(example)}
            type="button"
          >
            {example}
          </button>
        ))}
      </div>
    </div>
  )
}
