import { blogData } from '../../home/blog/data/dummyData'
import Image, { StaticImageData } from "next/image";
import BlogNavigation from '../blogNavigation';

type Props = {
    params: {
        blogId: string
    }
}

export function generateMetadata({ params: { blogId }}: Props) {
    const blogPost = blogData.find(blog => blog.id === parseInt(blogId));
    console.log(parseInt(blogId))
    if (!blogPost) {
        return {
            title: 'Post Not Found'
        };
    }

    return {
        title: blogPost.title,
    };
}

export default function Blogs({ params: { blogId }}: Props) {
    
    const blogPost = blogData.find(blog => blog.id === parseInt(blogId));
    const blog = blogPost
    console.log(blog)
    return (<div className='p-4 flex flex-col gap-6 md:gap-12 md:flex-row md:p-20'>
    <div className='w-full md:w-2/3'>
        <h2 className='text-3xl lg:text-6xl font-semibold text-slate-800 mb-6'>{blog?.title}</h2>
        <p className='text-lg text-slate-600 mb-6'>Ažurirano: Januar 2024</p>
        <p className='text-black-900 font-semibold text-2xl mb-10'>Autor: <span className='text-slate-500'>Ime i Prezime</span></p>
        <p>{blog?.description}</p>
    </div>
    <div className='w-full md:w-1/3'>
        <div className='w-full'>
            <Image src={`${blog?.imageUrl}`} className='w-full' width={800} height={800} alt="blog image"/>
        </div>
        <BlogNavigation />
    </div>
</div>)
        

}
