import { ChevronDown, ChevronUp, Container, X } from 'lucide-react'
import { useState, useRef, useEffect } from 'react'


interface Option {
    id: number
    name: string
}

interface tagsType {
    label: string,
    options: Option[]
    onChange?: (selected: number[]) => void
    limit?: number
}

export default function MultiSelectAutocomplete({ label, options, onChange, limit }: tagsType) {
    const [inputValue, setInputValue] = useState('')
    const [selectedOption, setSelectedOption] = useState<Option[]>([])

    const [Open, setOpen] = useState(false)

    const filteredOptions = options.filter((option) => {
        const matchesSearch = option.name.toLowerCase().includes(inputValue.toLowerCase())
        const isNotSelected = !selectedOption.find(s => s.id === option.id)
        return matchesSearch && isNotSelected

    });

    const addTags = (tag: Option) => {
        if (limit !== undefined && selectedOption.length >= limit) return
        const updated = [...selectedOption, tag]
        setSelectedOption(updated)
        onChange?.(updated.map(o => o.id))
        setInputValue('')
        setOpen(false)
    }

    const removeTag = (id: number) => {
        const updated = selectedOption.filter(o => o.id !== id)
        setSelectedOption(updated)
        onChange?.(updated.map(o => o.id))
    }
    const Ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (Ref.current && !Ref.current.contains(e.target as Node)) {
                setOpen(false)
            }
        };
        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        };
    }, [])



   return (
    <div className='relative w-full' ref={Ref}>
        <label className="block text-xl mb-4 uppercase tracking-widest">
            {label}
        </label>

        {/* Main container - chevron INSIDE the border */}
        <div
            className={`relative w-full flex flex-wrap items-center gap-2 px-3 py-2 
            border-2 border-black min-h-[48px] cursor-text
            ${Open ? 'shadow-[6px_6px_0_#fb6f92]' : ''}
            transition-all duration-200 bg-transparent`}
            onClick={() => document.getElementById(`input-${label}`)?.focus()}
        >
            {/* Tags */}
            {selectedOption.map((tag) => (
                <div key={tag.id} className='flex items-center gap-1 px-2 py-0.5 border border-black text-sm bg-white'>
                    {tag.name}
                    <button type="button" onClick={(e) => { e.stopPropagation(); removeTag(tag.id) }}>
                        <X size={12} />
                    </button>
                </div>
            ))}

            {/* Input */}
            <input
                id={`input-${label}`}
                type="text"
                placeholder={selectedOption.length === 0 ? 'Type to search...' : ''}
                className='flex-1 min-w-[80px] h-7 outline-none bg-transparent text-base'
                value={inputValue}
                onChange={(e) => { setInputValue(e.target.value); setOpen(true) }}
                onFocus={() => { if (!limit || selectedOption.length < limit) setOpen(true) }}
            />

            {/* Chevron INSIDE the border */}
            <button
                type='button'
                className='ml-auto pl-2 border-l border-black'
                onClick={() => setOpen(!Open)}
            >
                {Open ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </button>
        </div>

        {/* Dropdown */}
        {Open && (
            
            <div className='absolute mt-1 w-full border-2 border-black z-50 shadow-[4px_4px_0_#000] bg-white'>
                { (limit === undefined || selectedOption.length < limit) ? (
                    filteredOptions.length > 0
                    ? filteredOptions.map((option, index) => (
                        <div
                            key={option.id}
                            className={`px-3 py-2 cursor-pointer hover:bg-[#fb6f92] text-sm
                            ${index !== filteredOptions.length - 1 ? 'border-b border-black' : ''}`}
                            onClick={() => addTags(option)}
                        >
                            {option.name}
                        </div>
                    ))
                    : <div className="p-3 text-gray-400 italic text-sm">No results found</div>
                ) : (
                    <div className="p-3 text-gray-400 italic text-sm">Selection limit reached</div>
                )}
            </div>
        )}
    </div>
)
}