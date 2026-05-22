import { matchCommand } from '../lib/matcher'
import { renderTemplate } from '../lib/templates'
import { CopyButton } from './CopyButton'

type TemplatePreviewProps = {
  command: string
}

export function TemplatePreview({ command }: TemplatePreviewProps) {
  const result = matchCommand(command)
  const output = result.matched ? renderTemplate(result.match) : `// ${result.reason}`

  return (
    <section className="rounded-lg border border-slate-200 bg-white">
      <div className="flex items-center justify-between gap-3 border-b border-slate-200 px-4 py-3">
        <div>
          <h2 className="text-base font-semibold">Preview</h2>
          <p className="text-sm text-slate-500">
            {result.matched
              ? `${result.match.label} for ${result.match.entity}`
              : 'Unsupported command'}
          </p>
        </div>
        <CopyButton value={output} />
      </div>
      <div className="p-4">
        <pre className="min-h-[420px] overflow-auto rounded-md bg-slate-950 p-4 font-mono text-sm leading-6 text-slate-100">
          {output}
        </pre>
      </div>
    </section>
  )
}
