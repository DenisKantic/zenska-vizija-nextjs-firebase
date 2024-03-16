'use client'
import React from 'react';
import { blogData } from '../home/blog/data/dummyData';
import Link from 'next/link';
import { usePathname } from "next/navigation";

export default function BlogNavigation() {
  const pathname = usePathname();
  const blogs = blogData;

  return (
    <div className=''>
      <h3 className='text-slate-700 text-2xl font-semibold mt-16 mb-8 px-6'>Istaknuti članci</h3>
      {
        blogs.slice(0, 5).map(blog => (
          <Link key={blog.id} href={`/blogs/${blog.id}`}>
            <div className={`${pathname === `/blogs/${blog.id}` ? "bg-[#F93EDF] text-white" : ""} hover:bg-[#F93EDF] hover:text-white cursor-pointer px-6 py-4 rounded-xl mb-2`}>
              <p>{blog.title}</p>
            </div>
          </Link>
        ))
      }
    </div>
  );
}
