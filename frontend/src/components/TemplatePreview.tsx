type TemplatePreviewProps = {
  command: string
}

export function TemplatePreview({ command }: TemplatePreviewProps) {
  return (
    <section className="rounded-lg border border-slate-200 bg-white">
      <div className="border-b border-slate-200 px-4 py-3">
        <h2 className="text-base font-semibold">Preview</h2>
      </div>
      <div className="p-4">
        <pre className="min-h-[420px] overflow-auto rounded-md bg-slate-950 p-4 font-mono text-sm leading-6 text-slate-100">
          {`// Template output for:\n// ${command}\n\n// Rule matcher pending.`}
        </pre>
      </div>
    </section>
  )
}
