import NeuBorderButton from '../components/common/NeuBorderButton.tsx'
import { useState } from 'react'

export default function Matches() {
 const {trigger,setTrigger} = useState(false)
  

  return (
    <div className='w-full'>
      <div className='w-full'>
        <ul className='flex w-full gap-x-5 font-SpaceGrotesk text-lg text-neutral-600'>
          <NeuBorderButton text='For You'/>
          <NeuBorderButton text='For Your Projects'/>
        </ul>
      </div>
      {

      }
    </div>
  )
}
