"use client"
import React, {useState} from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className='h-[95vh] w-[300px] bg-white shadow-md flex flex-col justify-start items-center rounded-xl p-10'>
        <div className='p-10'>
         <Image 
        src="/images/zenskaBG.png"
        alt='zenska vizija logo'
        width={50}
        height={50}
        className='w-full h-full object-contain'
        unoptimized={true}
        />
    </div>
    </div>
  )
}

export default Navbar