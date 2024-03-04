"use client"
import React, { useEffect } from 'react'
import { useSession, signOut } from 'next-auth/react';
import { redirect, useRouter } from 'next/navigation';
import Navbar from './navigation/Navbar';
import Link from 'next/link';
import { useAuth } from "@/app/AuthContext";


const Dashboard = () => {

  const router = useRouter();
  const { user, logout } = useAuth();
  
  const checkUser = () =>{
    if(user == null){
      router.push('/login');
    } else {
      return null
    }
  }

  useEffect(()=>{
    checkUser()
  },[])

  return (
    <div className='bg-[#FEF1FD] flex h-screen w-full'>
      <div className='flex-2 p-5'>
      </div>
      <div className='flex-1 p-5'>
        <h1 className='text-4xl'>Dobrodosli u svoj dashboard!</h1>
        <Link href="/dashboard/settings" className='px-4 py-3 bg-red-400 text-white font-bold'>Profile</Link>
        <p>Izaberite jednu od sljedecih opcija:</p>
        <button className='px-4 py-3 bg-red-400' onClick={()=>logout}>Odjava</button>
        </div>
    </div>
  )
}

export default Dashboard