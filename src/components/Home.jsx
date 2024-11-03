import React from 'react'
import Controller from './Controller'

function Home() {
  return (
    <div className='z-50 py-56 h-full'>
      <div className='flex xl:flex-row flex-col 2xl:px-96 xl:px-52'>
        <div className='flex w-full justify-center'>
          <div className='flex flex-col items-center w-fit ml-5'>
            <div className='size-5 rounded-full bg-[#915eff]'></div>
            <div className='w-1 h-80 bg-gradient-to-b from-violet-600'></div>
          </div>
          <div className='flex flex-col'>
            <div className='mt-4 font-extrabold sm:text-7xl text-6xl w-full'>
              Hi, I'm <span className='text-[#915eff]'>Anupam</span>
            </div>
            <div className='mt-2 sm:w-96 w-full font-medium text-lg streaky-glow'>
              Empowering brands
              to Identify, Engage,
              and Convert
              audiences through
              Data, Insights and
              Technology.
            </div>
          </div>
        </div>
        <div className='size-full'>
          <Controller />
        </div>
      </div>
    </div>
  )
}

export default Home