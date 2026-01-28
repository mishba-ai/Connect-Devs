import { Moon, Sun } from 'lucide-react'
const DarkLight = () => {
  return (
    <div>
      <input type="checkbox" className='opacity-0 absolute' id='checkbox' />
      <label htmlFor="checkbox" className='bg-primary border-white border h-2 w-16 rounded-full p-4 relative cursor-pointer flex '>
        <Moon />
        <Sun />
        <span className='bg-white w-6 h-6 rounded-full absolute transition-transform duration-75 ease-linear'></span>
      </label>
    </div>
  )
}

export default DarkLight