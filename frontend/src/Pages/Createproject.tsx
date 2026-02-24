import React, { useState } from 'react'
import Dropdown from '../components/project/Dropdown'
import MultiSelectAutocomplete from '../components/project/MultiSelectAutocomplete'
import UploadFile from '../components/common/UploadFile'

export default function CreateProject() {
  const [formData, setFormData] = useState({
    projectName: '',
    status: 'Active',
    tags: [],
    description: '',
    image: null,
    skillsRequired: [],
    lookingFor: []
  })

  return (
    <div className='flex justify-center p- min-h-screen'>
      <form className="w-full max-w-5xl " onSubmit={(e) => e.preventDefault()}>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 mb-10'>
          <div className='flex flex-col'>
            <label className="text-xl font-medium mb-4 uppercase">Project Name</label>
            <input 
              type="text" 
              placeholder='AI Code Review Assistant' 
              className='text-lg p-3 border-2 border-black  focus:shadow-[4px_4px_0_#FFD700] outline-none transition-all'
            />
          </div>
          <div className='flex flex-col'>
             <Dropdown label="Project Status" options={['Open', 'In Progress', 'Completed']} />
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 mb-10'>
          <div className='flex flex-col'>
            <label className="text-xl font-medium mb-4 uppercase">Project Thumbnail</label>
            <UploadFile />
          </div>
          <div className='flex flex-col'>
            <MultiSelectAutocomplete 
              label='Category Tags' 
              options={['Hackathon Project', 'Side Project', 'Open Source', 'TechHacks 2024']} 
            />
          </div>
        </div>

        <div className='flex flex-col mb-10'>
          <label className="text-xl font-medium mb-4 uppercase">Description</label>
          <textarea 
            placeholder="Describe your project vision..."
            className='w-full h-32 text-lg p-3 border-2 border-black focus:shadow-[4px_4px_0_#FFD700] outline-none transition-all resize-none'
          />
        </div>

        {/* BOTTOM SECTION: Team Needs */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
          <div className='flex flex-col'>
            <MultiSelectAutocomplete 
              label='Skills Required' 
              options={['React', 'TypeScript', 'TailwindCSS', 'Python', 'Node.js']} 
            />
          </div>
          <div className='flex flex-col'>
            <MultiSelectAutocomplete 
              label='Looking For' 
              options={['Frontend Developer', 'ML Engineer', 'UI/UX Designer', 'Backend Dev']} 
            />
          </div>
        </div>

        {/* SUBMIT BUTTON */}
        <div className="mt-16 flex justify-end">
           <button className="bg-black text-[#FFD700] px-12 py-5 text-2xl font-black uppercase border-4 border-black shadow-[8px_8px_0_#FFD700] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
             Launch Project
           </button>
        </div>
      </form>
    </div>
  )
}