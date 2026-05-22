import { Clipboard } from 'lucide-react'

type CopyButtonProps = {
  value: string
}

export function CopyButton({ value }: CopyButtonProps) {
  return (
    <button
      className="inline-flex h-9 items-center gap-2 rounded-md border border-slate-300 bg-white px-3 text-sm font-medium text-slate-700 hover:bg-slate-50"
      onClick={() => void navigator.clipboard.writeText(value)}
      type="button"
    >
      <Clipboard className="h-4 w-4" />
      Copy
    </button>
  )
}
