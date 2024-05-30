'use client'
import React, { useState, useEffect } from 'react'
import { doc, getDoc, } from 'firebase/firestore';
import { db } from "@/app/FirebaseConfig";
import Image from "next/image";
async function fetchDataFirestore(blogId: string) {
    const docRef = doc(db, "blog",  blogId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        return docSnap.data();
    } else {
        return null;
    }
}
export default function Blog({id, blogData}:any) {
    const blogId = id;
    console.log(blogData)
    const [blog, setBlog] = useState<any>(null);

    console.log("Im from params " + blogId)
    const fetchBlog = async () => {
        return await fetchDataFirestore(blogId);
    }

    useEffect(() => {
       fetchBlog().then(setBlog);
    }, []);

    return (
        <>
            {blog && (

                <div className='w-full h-screen overflow-y-auto bg-red-400'>
                     <Image
                        alt="image"
                        src={blog.imageURL}
                        height={50}
                        width={50}
                        unoptimized
                        className='w-full h-[40vh] object-cover'
                        />
                    <div className='w-[90%] bg-orange-200 min-h-[60vh] mx-auto'>
                       <p className='text-4xl py-5'>{blog.title}</p>
                       <textarea className='disabled w-full bg-white border-[1px] border-black'>{blog.description}</textarea>
                    </div>

                </div>
                // <div className='relative p-4 flex flex-col gap-6 md:gap-12 md:flex-row md:p-20'>
                //     <div className='w-full md:w-2/3'>
                //         <h2 className='text-3xl lg:text-6xl font-semibold text-slate-800 mb-6'>{blog.title}</h2>
                //         <p className='text-lg text-slate-600 mb-6'>Ažurirano: Januar 2024</p>
                //         <p className='text-black-900 font-semibold text-2xl mb-10'>Autor: <span className='text-slate-500'>Ime i Prezime</span></p>
                //         <p dangerouslySetInnerHTML={{__html: blog.description }}>
                //         </p>
                        
                //     </div>
                //     <div className='fixed top-0 p-4 md:p-20 right-0 box-border w-full md:w-1/3 h-screen overflow-y-auto flex flex-col justify-between'>
                //         <div className='h-1/3'>
                //             <Image src={`${blog.imageURL}`} className='h-full w-auto' width={800} height={800} alt="blog image"/>
                //         </div>
                //     </div>
                // </div>
            )}
        </>
    );
}
