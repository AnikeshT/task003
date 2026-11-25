export function Empty({ onClear }: { onClear: () => void }) {
  return (
    <div className="border border-border px-6 py-24 text-center">
      <p className="display-sm">Nothing matches that combination yet.</p>
      <p className="mt-3 text-ink-500">Try a different length or a different mood.</p>
      <button
        onClick={onClear}
        className="btn mt-8 btn-wine"
      >
        Show all experiences
      </button>
    </div>
  )
}
