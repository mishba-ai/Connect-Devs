import React from 'react'

export default function Recommendation() {
    return (
        <div className=" flex-1 flex-col items-start bg-green- min-w-0  h-90 ">
            <p className='text-xl font-Michroma font-medium border-2 shadow-[0px_2px_2px_rgb(0,0,0)] w-72 text-center border-black rounded-xl'>Recommendation</p>
            <div className="flex gap-x-2  flex-nowrap overflow-x-auto no-scrollbar h-80 mt-4  bg-red-">
                <div className="flex flex-col relative flex-shrink-0 rounded-[0.5rem] border p-4 border-black  h-78 w-[240px] shadow-[0px_4px_0px_rgb(0,0,0)] transition-all ease-out duration-75">
                    <img src="https://i.pinimg.com/736x/93/1d/3b/931d3b08c1dc1bc48783d201e434e989.jpg" alt="" className='rounded-full w-14 h-14' />
                    <p className='text-2xl mt-4 font-Ubuntu font-semibold'>Build with Me </p>
                    <div className=' absolute align-baseline bottom-4 flex justify-between left-4 right-4 '>
                        <div>
                            <p className='font-bold'>Full name</p>
                            <p className='text-sm text-gray-500 font-medium'>match : <span className='text-violet-400'>80%</span></p>
                        </div>
                        <button className='bg-highlight w-20 shadow-[2px_2px_0px_rgb(0,0,0)]'>Follow </button>
                    </div>
                </div>
                <div className="flex flex-col relative flex-shrink-0 rounded-[0.5rem] border p-4 border-black  h-78 w-[240px] shadow-[0px_4px_0px_rgb(0,0,0)] transition-all ease-out duration-75">
                    <img src="https://i.pinimg.com/736x/93/1d/3b/931d3b08c1dc1bc48783d201e434e989.jpg" alt="" className='rounded-full w-14 h-14' />
                    <p className='text-2xl mt-4 font-Ubuntu font-semibold'>Build with Me </p>
                    <div className=' absolute align-baseline bottom-4 flex justify-between left-4 right-4 '>
                        <div>
                            <p className='font-bold'>Full name</p>
                            <p className='text-sm text-gray-500 font-medium'>match : <span className='text-violet-400'>80%</span></p>
                        </div>
                        <button className="bg-highlight w-20  shadow-[2px_2px_0px_rgb(0,0,0)] cursor-pointer text-black  ">Follow</button>

                    </div>
                </div>
                <div className="flex flex-col relative flex-shrink-0 rounded-[0.5rem] border p-4 border-black  h-78 w-[240px] shadow-[0px_4px_0px_rgb(0,0,0)] transition-all ease-out duration-75">
                    <img src="https://i.pinimg.com/736x/93/1d/3b/931d3b08c1dc1bc48783d201e434e989.jpg" alt="" className='rounded-full w-14 h-14' />
                    <p className='text-2xl mt-4 font-Ubuntu font-semibold'>Build with Me </p>
                    <div className=' absolute align-baseline bottom-4 flex justify-between left-4 right-4 '>
                        <div>
                            <p className='font-bold'>Full name</p>
                            <p className='text-sm text-gray-500 font-medium'>match : <span className='text-violet-400'>80%</span></p>
                        </div>
                        <button className='bg-highlight w-20 shadow-[2px_2px_0px_rgb(0,0,0)]'>Follow </button>
                    </div>
                </div>

            </div>

        </div>
    )
}
