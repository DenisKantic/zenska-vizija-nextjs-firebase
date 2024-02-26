"use client"
import React from 'react'
import { useSession, signOut } from 'next-auth/react';
import { redirect } from 'next/navigation';

const Dashboard = () => {

  const session = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/login');
    },
  });


  return (
    <div className='bg-orange-200 flex h-screen justify-center items-center'>
        <h1 className='text-4xl'>Dobrodosli u svoj dashboard!</h1>
        <button className='px-4 py-3 bg-red-400' onClick={()=>signOut()}>Odjava</button>
    </div>
  )
}

export default Dashboard