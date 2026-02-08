import React, { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

interface dropdown {
    label: string,
    options: string[]
}
export default function Dropdown({ label, options }: dropdown) {
    const [open, setOpen] = useState(false)
    const [selectedState ,setSelectedState] = useState('Options')
    return (
        <div>
            <label className="block text-xl font- mb-4 uppercase tracking-">
{label} 
           </label>
            <div className='w-72 relative'>
                <div 
                className={`flex text-xl bg-amber-200 hover:bg-amber-300 p-2 border-2 justify-center items-center border-black focus:outline-none ${open? 'shadow-[6px_6px_0_#FFD700]':''} hover:cursor-pointer active:transition-all active:duration-200`}
                    onClick={() => setOpen(!open)}
                >
                    <p>{selectedState}</p>
                    {!open ? <ChevronDown /> : <ChevronUp />}
                </div>
                {open && (
                    <div className={`text-md absolute mt-3 w-72 h-auto border-2 z-50 border-black focus:outline-none shadow-[4px_4px_0_#000] transition-all duration-200 bg-white `}>
                        {/* making it so that it can be used in multiple places in someplaces it would be 3 select or maybe 5 select etc ...  */}
                        {
                            options.map((option, index) => (
                                <div className={`w-full p-2 border-b-2 hover:bg-amber-300  border-black cursor-pointer ${index !== option.length - 1 ? 'border-b-2 border-black' : ''}`}
                                    key={index}
                                    onClick={() => {
                                        setOpen(false)
                                        setSelectedState(option)
                                    }}
                                >{option}</div>

                            ))
                        }

                    </div>
                )}
            </div>
        </div>
    )
}
