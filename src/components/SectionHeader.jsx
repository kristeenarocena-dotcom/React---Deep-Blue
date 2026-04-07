function SectionHeader({ title, subtitle }) {
  return (
    <div className="grid gap-1">
      <div className="inline-flex items-center gap-2 font-serif text-xl text-slate-800">
        <span className="h-4 w-4 rounded-full border border-cyan-200 bg-cyan-50" />
        <span>{title}</span>
      </div>
      <p className="text-sm text-slate-500">{subtitle}</p>
    </div>
  )
}

export default SectionHeader
