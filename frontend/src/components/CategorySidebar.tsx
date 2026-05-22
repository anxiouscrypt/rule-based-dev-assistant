const categories = [
  'FastAPI',
  'React',
  'README',
  '.env',
  'GitHub Issue',
  'Pytest',
]

export function CategorySidebar() {
  return (
    <aside className="rounded-lg border border-slate-200 bg-white">
      <div className="border-b border-slate-200 px-4 py-3">
        <h2 className="text-base font-semibold">Categories</h2>
      </div>
      <div className="space-y-2 p-3">
        {categories.map((category) => (
          <div
            className="rounded-md bg-slate-50 px-3 py-2 text-sm font-medium text-slate-700"
            key={category}
          >
            {category}
          </div>
        ))}
      </div>
    </aside>
  )
}
