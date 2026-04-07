function SearchIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </svg>
  )
}

function FishIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path d="M3 12c2.5-4.5 7-7 12-7 0 0 1 2 1 3 2 .2 4 1.4 5 4-1 2.6-3 3.8-5 4 0 1-1 3-1 3-5 0-9.5-2.5-12-7Z" />
      <circle cx="14.5" cy="10" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

function SearchBar({ value, placeholder, ariaLabel, onChange }) {
  return (
    <label className="inline-flex min-w-[220px] items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2.5 text-slate-400">
      <SearchIcon className="h-4 w-4" />
      <input
        type="text"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        aria-label={ariaLabel}
        className="w-full border-0 bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400"
      />
    </label>
  )
}

SearchBar.FishIcon = FishIcon

export default SearchBar
