"use client"

export function SqlEditor() {
  return (
    <div className="h-full p-4">
      <div className="h-full rounded-lg border bg-card p-4">
        <pre className="text-sm text-foreground">SELECT * FROM table;</pre>
      </div>
    </div>
  )
}