'use client'
import React, { useState } from 'react'
import { blogData } from '../home/blog/data/dummyData'
import Link from 'next/link';
export default function BlogNavigation() {
  const [activeCol, setActiveCol] = useState();
  const blogs = blogData;

  const findBlog = blogData.find(blog => blog.id === 1);
  
  const settingActiveCol = (value: any) => {
    setActiveCol(value)
  }
  return (
    <div className=''>
      <h3 className='text-slate-700 text-2xl font-semibold mt-16 mb-4 px-6'>Istaknuti članci</h3>
      {
        blogs.slice(0, 5).map(blog => (
          <Link key={blog.id} href={`/blogs/${blog.id}`}>
          <div onClick={() => settingActiveCol(blog.id)} className={`${activeCol === blog.id ? 'bg-[#F93EDF] text-white' : '' } hover:bg-[#F93EDF] cursor-pointer p-6 rounded-xl`}>
            <p>{blog.title}</p>
          </div>
          </Link>
        ))
      }
    </div>
  )
}
