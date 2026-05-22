import { matchCommand } from '../lib/matcher'

type TemplatePreviewProps = {
  command: string
}

export function TemplatePreview({ command }: TemplatePreviewProps) {
  const result = matchCommand(command)

  return (
    <section className="rounded-lg border border-slate-200 bg-white">
      <div className="border-b border-slate-200 px-4 py-3">
        <h2 className="text-base font-semibold">Preview</h2>
      </div>
      <div className="p-4">
        <pre className="min-h-[420px] overflow-auto rounded-md bg-slate-950 p-4 font-mono text-sm leading-6 text-slate-100">
          {result.matched
            ? `// ${result.match.label}\n// Category: ${result.match.category}\n// Entity: ${result.match.entity}\n\n// Template renderer pending.`
            : `// ${result.reason}`}
        </pre>
      </div>
    </section>
  )
}
