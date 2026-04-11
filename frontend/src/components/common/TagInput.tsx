import { X } from 'lucide-react'
import { useState, useRef } from 'react'

interface TagInputProps {
  label?: string
  value: string[]
  onChange: (tags: string[]) => void
}

export default function TagInput({ label, value, onChange }: TagInputProps) {
  const [input, setInput] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  const addTag = (raw: string) => {
    const tag = raw.trim()
    if (tag && !value.includes(tag)) {
      onChange([...value, tag])
    }
    setInput('')
  }

  const removeTag = (tag: string) => {
    onChange(value.filter(t => t !== tag))
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      addTag(input)
    }
    // Delete last tag when backspace on empty input
    if (e.key === 'Backspace' && input === '' && value.length > 0) {
      onChange(value.slice(0, -1))
    }
  }

  return (
    <div>
      {label && <label className="text-xl font-medium mb-2 uppercase block">{label}</label>}

      {/* Click anywhere on the box to focus input */}
      <div
        className="flex flex-wrap gap-2 p-2 border-2 border-black min-h-[44px] cursor-text"
        onClick={() => inputRef.current?.focus()}
      >
        {value.map((tag) => (
          <span key={tag} className="flex items-center gap-1 px-2 py-0.5 bg-amber-100 border border-black text-sm">
            {tag}
            <button type="button" onClick={() => removeTag(tag)}>
              <X size={12} />
            </button>
          </span>
        ))}

        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={value.length === 0 ? 'Type and press Enter...' : ''}
          className="flex-1 min-w-[140px] outline-none bg-transparent text-sm"
        />
      </div>
    </div>
  )
}