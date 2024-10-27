import React from 'react'
import Profile from './Profile'

export default function Footer() {
  return (
    <div className='w-[100vw] border border-t-black m-auto h-[fit-content] lg:h-20 flex-wrap md:flex justify-between p-x-10 p-3 '>
        <div className='flex justify-center'>
        <Profile/>
        </div>
        <div className='flex-wrap md:flex gap-x-5 items-center font-medium text-center'>
            <p >Twitter/X</p>
            <p>LinkedIn</p>
            <p>NewsLetter</p>
            <p>Products</p>
        </div>
    </div>
  )
}
