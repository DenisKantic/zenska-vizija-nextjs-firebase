"use client";
import React, { useState, useEffect } from 'react'
import { getDocs, collection,query, orderBy } from 'firebase/firestore';
import { db } from '@/app/FirebaseConfig';
import Post from './interface'
import Image from 'next/image';

    async function fetchDataFirestore(){
        const listCollection = collection(db, "blog");
        const querySnapshot = await getDocs(query(listCollection, orderBy("title", "desc")))
        const list:any = [];
      
        querySnapshot.forEach((doc)=>{
          const newList = doc.data();
          list.push({id: doc.id, ...newList})
        })
        return list;
    }

    const UserDataFetcher: React.FC = () => {
    const [userData, setUserData] = useState<Post[]>([]);
    const [title, setTitle] = useState("");


    useEffect(()=>{
        async function fetchData(){
          const data: Post[] = await fetchDataFirestore();
          setUserData(data);
        }
        fetchData();
    },[])

  return (

    <div className='grid grid-cols-3 grid-flow-col items-center mt-10 w-full h-full'>
        {userData.map((data)=>(
        <div className='flex flex-col w-[300px] min-h-[300px] bg-red-200'>
        <Image src="/images/zenskaBG.png" height={50} width={50}
        alt='test' unoptimized
        className='w-full h-[200px] object-contain'
        />
        <h1>Naslov:{data.title}</h1>
        <p>ID: {data.id}</p>
        <p
      dangerouslySetInnerHTML={{__html: data.description }} ></p>
        <button className='w-full bg-orange-400 py-3 mt-5'>Obrisi</button>
        </div>
        ))}
        </div>
  )
 }

export default UserDataFetcher;