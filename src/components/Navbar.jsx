import React from 'react'

function Navbar() {
  return (
    <div className='fixed top-0 left-0 flex justify-between items-end w-full h-min px-64 py-10'>
      <div className='text-6xl font-medium'>AG</div>
      <div className='flex gap-5 text-2xl font-thin pr-20'>
        <span>Home</span>
        <span>About</span>
        <span>Contact</span>
      </div>
    </div>
  )
}

export default Navbar
