'use client'
import { useState, useEffect } from 'react';
import { blogData } from '../../home/blog/data/dummyData'
import Image, { StaticImageData } from "next/image";
import BlogNavigation from '../blogNavigation';
import { addDoc, collection, updateDoc, getFirestore, doc, getDoc, query } from 'firebase/firestore';
import { db } from "@/app/FirebaseConfig";
import { useParams } from 'next/navigation';

async function fetchDataFirestore(blogId: string) {
    const docRef = doc(db, "blog",  blogId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        return docSnap.data();
    } else {
        return null;
    }
}


export default function Blogs() {
    const blogId = useParams();
    
    const [blog, setBlog] = useState<any>(null);

    console.log("Im from params " + blogId)
    const fetchBlog = async () => {
        return await fetchDataFirestore(String(blogId.blogId));
    }

    useEffect(() => {
       fetchBlog().then(setBlog);
    }, []);

    return (
        <>
            {blog && (
                <div className='p-4 flex flex-col gap-6 md:gap-12 md:flex-row md:p-20'>
                    <div className='w-full md:w-2/3'>
                        <h2 className='text-3xl lg:text-6xl font-semibold text-slate-800 mb-6'>{blog.title}</h2>
                        <p className='text-lg text-slate-600 mb-6'>Ažurirano: Januar 2024</p>
                        <p className='text-black-900 font-semibold text-2xl mb-10'>Autor: <span className='text-slate-500'>Ime i Prezime</span></p>
                        <p>{blog.description}</p>
                    </div>
                    <div className='w-full md:w-1/3'>
                        <div className='w-1/2'>
                            <Image src={`${blog.imageURL}`} className='w-full' width={800} height={800} alt="blog image"/>
                        </div>
                        <BlogNavigation blogId={blogId.blogId} blog={blog} setBlog={setBlog}/>
                    </div>
                </div>
            )}
        </>
    );
    
}
