import React from 'react'

function Home() {
  return (
    <div className='z-50 py-56'>
      <div className='px-96 flex'>
        <div className='flex flex-col items-center w-fit'>
          <div className='size-5 rounded-full bg-[#915eff]'></div>
          <div className='w-1 h-80 bg-gradient-to-b from-violet-600'></div>
        </div>
        <div className='flex flex-col'>
          <div className='mt-4 font-extrabold text-7xl'>
            Hi, I'm <span className='text-[#915eff]'>Vedant</span>
          </div>
          <div className='mt-2 w-96 font-medium text-lg'>
            Empowering brands
            to Identify, Engage,
            and Convert
            audiences through
            Data, Insights and
            Technology.
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home