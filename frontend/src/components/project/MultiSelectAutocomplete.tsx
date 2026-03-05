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
}

export default function MultiSelectAutocomplete({ label, options, onChange }: tagsType) {
    const [inputValue, setInputValue] = useState('')
    const [selectedOption, setSelectedOption] = useState<Option[]>([])

    const [Open, setOpen] = useState(false)

    const filteredOptions = options.filter((option) => {
        const matchesSearch = option.name.toLowerCase().includes(inputValue.toLowerCase())
        const isNotSelected = !selectedOption.find(s => s.id === option.id)

        return matchesSearch && isNotSelected
    });

    const addTags = (tag: Option) => {
        const updated = [...selectedOption, tag]
        setSelectedOption(updated)
        onChange?.(updated.map(o => o.id))
        setInputValue('')
        setOpen(false)
    }

    const removeTag = (id: number) => {
        const updated = selectedOption.filter(o => o.id !== id)
        setSelectedOption(updated)
        onChange?.(updated.map(o=>o.id))
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
        <div className='relative ' ref={Ref}>
            <label className="block text-xl font- mb-4 uppercase tracking-">
                {label}
            </label>
            <div className={`w-[80%] text-lg gap-2 p-1 border-2 h-12 border-black focus:outline-none ${!Open ? '' : 'shadow-[6px_6px_0_#fb6f92]'}  transition-all duration-200 bg-transparent font- flex justify-between items-center align-baseline`}>
                {selectedOption.map((tag, index) => (
                    <div key={index} className='flex items-center gap-1 px-2 py-1 bg-amber-100 border border-black text-sm'>
                        {tag.name}
                        <button
                            type="button"
                            onClick={() => removeTag(tag.id)}
                        >
                            <X size={14} />
                        </button>
                    </div>
                ))}
                <input
                    type="text"
                    placeholder={selectedOption.length === 0 ? 'Hackathon project' : ''}
                    className='flex-1 min-w-[120px] h-8 outline-none bg-transparent'
                    value={inputValue}
                    onChange={(e) => {
                        setInputValue(e.target.value)
                        if (!Open) setOpen(true);
                    }}
                    onFocus={() => setOpen(true)}
                />
                <div className='flex gap-x-4 '> |
                    <button type='button' onClick={() => setOpen(!Open)}>
                        {!Open ? <ChevronDown /> : <ChevronUp />}
                    </button>
                </div>
            </div>

            {Open && (
                <div className={`text-md absolute mt-3 w-[80%] h-auto border-2 z-50 border-black focus:outline-none shadow-[4px_4px_0_#000] transition-all duration-200 bg-white `}>
                    {filteredOptions.length > 0 ?
                        (filteredOptions.map((option, index) => (
                            <div className={`w-full p-2 border-b-2 hover:bg-amber-300  border-black cursor-pointer ${index !== filteredOptions.length - 1 ? 'border-b-2 border-black' : ''}`}
                                key={index}
                                onClick={() => addTags(option)}
                            >
                                {option.name}
                            </div>
                        ))) : (<div className="p-3 text-gray-500 italic">No results found</div>)}
                </div>
            )}


        </div>
    )
}