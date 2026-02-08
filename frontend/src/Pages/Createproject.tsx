import React, { useState } from 'react'
import Dropdown from '../components/project/Dropdown'
import MultiSelectAutocomplete from '../components/project/MultiSelectAutocomplete'

export default function Createproject() {
  const [formData, setFormData] = useState({
    projectName: '',
    tags: [],
    description: '',
    image: null,
    skillsRequired: [],
    lookingFor: []
  })
  const [currentTag, setCurrentTag] = useState('')
  const [currentSkill, setCurrentSkill] = useState('')
  const [currentRole, setCurrentRole] = useState('')

  return (
    <div className='flex justify-center'>
      <form action="">
        <div className='flex gap-x-44'>
          <div>
            <label className="block text-xl font- mb-4 uppercase tracking-">
              Project Name
            </label>
            <input type="text" placeholder='Project name' name='projectName' className='w-[400px] text-lg p-2 border-2 border-black focus:outline-none focus:shadow-[6px_6px_0_#FFD700] transition-all duration-200 bg-white font-' required />
          </div>
          <div>
            <Dropdown label="Project Status" options={['Active', 'Pending', 'Closed']} />
          </div>
        </div>
        {/* tags */}
        <div className='mt-3'>
          <MultiSelectAutocomplete label='Tags' options={['Hackathon', 'sideProject']} />
        </div>
      </form>
    </div>
  )
}
