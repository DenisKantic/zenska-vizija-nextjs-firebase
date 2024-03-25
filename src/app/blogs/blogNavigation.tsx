import React, { useEffect, useState } from 'react';
import { collection, doc, getDoc, getDocs, orderBy, query } from 'firebase/firestore';
import { db } from "@/app/FirebaseConfig";

interface BlogItem {
  id: string;
  title: string;
  // Add any other properties you expect in your blog items
}

async function fetchDataFirestore(): Promise<BlogItem[]> {
  const listCollection = collection(db, "blog");
  const querySnapshot = await getDocs(query(listCollection, orderBy("title", "desc")));
  const list: BlogItem[] = [];

  querySnapshot.forEach((doc) => {
    const newList = doc.data();
    list.push({ id: doc.id, ...newList } as BlogItem);
  });

  return list;
}

async function fetchBlog(id: string): Promise<any> {
  const docRef = doc(db, "blog",  id);
  const docSnap = await getDoc(docRef);
  const blog = docSnap.data();
  
  return blog;
}

export default function BlogNavigation({ blogId, setBlog, blog }: any) {
  const [blogs, setBlogs] = useState<BlogItem[]>([]);

  const settingBlog = async (id: string) => {
    const blog = await fetchBlog(id);
    setBlog(blog);
  }

  useEffect(() => {
    fetchDataFirestore().then(setBlogs).catch(error => {
      console.error("Error fetching blogs:", error);
    });
  }, []);

  return (
    <div className=''>
      <h3 className='text-slate-700 text-2xl font-semibold mt-16 mb-8 px-6'>Istaknuti članci</h3>
      {
        blogs.slice(0, 5).map((listItem) => (
          <div key={listItem.id} onClick={() => settingBlog(listItem.id)} className={`${listItem.title === blog.title ? 'bg-[#F93EDF] text-white' : ''} hover:bg-[#F93EDF] hover:text-white cursor-pointer px-6 py-4 rounded-xl mb-2`}>
            <p>{listItem.title}</p>
          </div>
        ))
      }
    </div>
  );
}
