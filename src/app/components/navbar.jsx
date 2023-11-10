import React from 'react'

function Navbar() {

  return (
    <div className='flex justify-between items-center px-4 py-3 bg-black text-white'>

      <div className='lg:text-[2vw] text-[3.5vw] font-bold'>TTT STORIES</div>

      <button className='bg-yellow-500 text-white rounded py-2 px-4 lg:text-[1.5vw] text-[3vw] font-semibold hover:scale-95 hover:translate-y-1'>
        Courses
      </button>

    </div>
  )

}

export default Navbar;