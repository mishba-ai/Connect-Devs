import React, { useEffect, useState } from 'react'
import Dropdown from '../components/project/Dropdown.tsx'
import MultiSelectAutocomplete from '../components/project/MultiSelectAutocomplete.tsx'
import UploadFile from '../components/common/UploadFile.tsx'
import api from '../api/axiosInstance.ts'

export default function CreateProject() {
  const [formData, setFormData] = useState({
    project_title: '',
    tags: 'open',
    project_thumbnail: '',
    category_tags: [] as number[],
    skilled_tags: [] as number[],
    looking_for: [] as number[],
    description: '',
  })

  const [lookingforOptions, setLookingForOptions] = useState<{ id: number, name: string }[]>([])
  const [skillOptions, setSkillOptions] = useState<{ id: number, name: string }[]>([])
  const [categoryOptions, setCategoryOptions] = useState<{ id: number, name: string }[]>([])

  useEffect(() => {
    api.get('api/looking_for/').then(r => setLookingForOptions(r.data))
    api.get('api/skills/').then(r => setSkillOptions(r.data))
    api.get('api/categories/').then(r => setCategoryOptions(r.data))
  }, [])

  const handleChange = async (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    
  }

  const handleLaunchBtn = async () => {
    try {
      const payload = {
        project_title: formData.project_title,
        tags: formData.tags,
        project_thumbnail: formData.project_thumbnail,
        description: formData.description,
        category_tags_ids: formData.category_tags,
        skilled_tag_ids: formData.skilled_tags,
        looking_for_ids: formData.looking_for,
      }
      await api.post('api/create_project/', payload);
      setFormData({
        project_title: '',
        tags: 'open',
        project_thumbnail: '',
        category_tags: [],
        skilled_tags: [],
        looking_for: [],
        description: '',
      })
      alert('Project created successfully!')

    } catch (error: any) {
      console.error(error.response?.data)
    }
  }

  return (
    <div className='flex justify-center p- min-h-screen'>
      <form className="w-full max-w-5xl " onSubmit={(e) => e.preventDefault()}>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 mb-10'>
          <div className='flex flex-col'>
            <label className="text-xl font-medium mb-4 uppercase">Project Name</label>
            <input
              value={formData.project_title}
              onChange={(e) => handleChange('project_title', e.target.value)}
              type="text"
              placeholder='AI Code Review Assistant'
              className='text-lg p-3 border-2 border-black  focus:shadow-[4px_4px_0_#FFD700] outline-none transition-all'
            />
          </div>
          <div className='flex flex-col'>
            <Dropdown
              label="Project Status"
              options={['Open', 'In Progress', 'Completed']}
              onChange={(val) => {
                const map: Record<string, string> = {
                  'Open': 'open',
                  'In Progress': 'in_progress',
                  'Completed': 'closed'
                }
                handleChange('tags', map[val])
              }}
            />
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
              options={categoryOptions}
              onChange={(selected) => handleChange('category_tags', selected)}
            />
          </div>
        </div>

        <div className='flex flex-col mb-10'>
          <label className="text-xl font-medium mb-4 uppercase">Description</label>
          <textarea
            value={formData.description}
            onChange={(e) => handleChange('description', e.target.value)}
            placeholder="Describe your project vision..."
            className='w-full h-32 text-lg p-3 border-2 border-black focus:shadow-[4px_4px_0_#FFD700] outline-none transition-all resize-none'
          />
        </div>

        {/* BOTTOM SECTION: Team Needs */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
          <div className='flex flex-col'>
            <MultiSelectAutocomplete
              label='Skills Required'
              options={skillOptions}
              onChange={(selected) => handleChange('skilled_tags', selected)}
            />
          </div>
          <div className='flex flex-col'>
            <MultiSelectAutocomplete
              label='Looking For'
              options={lookingforOptions}
              onChange={(selected) => handleChange('looking_for', selected)}
            />

          </div>
        </div>

        {/* SUBMIT BUTTON */}
        <div className="mt-16 flex justify-end">
          <button className="bg-black text-[#FFD700] px-12 py-5 text-2xl font-black uppercase border-4 border-black shadow-[8px_8px_0_#FFD700] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
            onClick={handleLaunchBtn}
          >
            Launch Project
          </button>
        </div>
      </form>
    </div>
  )
}