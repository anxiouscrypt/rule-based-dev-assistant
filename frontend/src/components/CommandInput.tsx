type CommandInputProps = {
  value: string
  onChange: (value: string) => void
}

export function CommandInput({ value, onChange }: CommandInputProps) {
  return (
    <input
      className="h-12 w-full rounded-md border border-slate-300 px-3 font-mono text-sm outline-none focus:border-violet-500"
      onChange={(event) => onChange(event.target.value)}
      placeholder="create fastapi endpoint orders"
      value={value}
    />
  )
}
