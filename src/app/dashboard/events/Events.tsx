"use client";
import React, { useState, useEffect } from 'react'
import { getDocs, collection,query, orderBy, deleteDoc, doc } from 'firebase/firestore';
import { db } from '@/app/FirebaseConfig';
import Event from './interface'
import Image from 'next/image';
import { RiDeleteBinLine } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";


    async function fetchDataFirestore(){
        const listCollection = collection(db, "event");
        const querySnapshot = await getDocs(query(listCollection, orderBy("title", "desc")))
        const list:any = [];
      
        querySnapshot.forEach((doc)=>{
          const newList = doc.data();
          list.push({id: doc.id, ...newList})
        })
        return list;
    }

    async function deleteFromDatabase(id:any){
      try{
        await deleteDoc(doc(db, "event", id));
        window.location.reload()
        return id;
      } catch (error){
        alert("error")
        console.log(error);
      }
    }

    const UserDataFetcher: React.FC = () => {
    const [userData, setUserData] = useState<Event[]>([]);
    const [title, setTitle] = useState("");


    useEffect(()=>{
        async function fetchData(){
          const data: Event[] = await fetchDataFirestore();
          setUserData(data);
        }
        fetchData();
    },[])

  return (

    <div className='grid items-center justify-center mt-10 w-full h-full grid-flow-row auto-cols-max
    xxs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-20'>
        {userData.map((data)=>(
        <div className='flex flex-col justify-around bg-red-100 mt-10' key={data.id}>
            <div className='h-full rounded-xl'>
                <Image src={data.imageURL} height={50} width={50}
                alt='test' unoptimized priority={false}
                className='w-full h-[230px] object-cover'
                />
                <div className='p-2 h-full'>
                <h1 className='text-lg font-bold'>Naslov:<span className='font-normal ml-2'>{data.title}</span></h1>
                <p className='text-md font-bold'>Datum: <span className='font-normal ml-2'>{data.date}</span></p>
                <p className='text-md font-bold'>Mjesto: <span className='font-normal ml-2'>{data.location}</span></p>
                <p className='text-md font-bold'>Vrijeme: <span className='font-normal ml-2'>{data.time}</span></p>
                </div>
             </div>

              <div className='flex flex-row'>
                  <button className='w-[50%] flex items-center justify-center bg-red-400 py-3 cursor-pointer
                  hover:bg-red-600' type='button'
                    onClick={()=>deleteFromDatabase(data.id)}
                  >
                    <RiDeleteBinLine />
                  </button>

                  <button className='w-[50%] flex items-center justify-center bg-blue-200 py-3 cursor-pointer
                  hover:bg-blue-400' type='button'
                    onClick={()=>deleteFromDatabase(data.id)}
                  ><FaEdit /></button>
              </div>

        </div>
        ))}
    </div>
  )
 }

export default UserDataFetcher;