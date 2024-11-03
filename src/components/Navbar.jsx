import React from 'react'

function Navbar() {
  return (
    <div className='fixed top-0 left-0 flex justify-between sm:items-end items-start w-full h-min lg:px-64 sm:px-32 px-12 py-10'>
      <div className='text-6xl font-medium'>AG</div>
      <div className='flex sm:flex-row flex-col gap-5 text-2xl font-thin sm:pr-20'>
        <span>Home</span>
        <span>About</span>
        <span>Contact</span>
      </div>
    </div>
  )
}

export default Navbar
