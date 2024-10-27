import Image from 'next/image'
import React from 'react'

export default function Profile() {
  return (
    <div className="flex items-center gap-2 ">
    <Image src={`https://framerusercontent.com/images/8X4Oh2NqDpHAT2l68ODpkCZjd1Y.png`} alt="profile" height={30} width={30} 
className="rounded-full border border-black"
    />
    <p className="font-bold text-sm lg:text-xl">Shruti Mishra</p>
  </div>
  )
}
