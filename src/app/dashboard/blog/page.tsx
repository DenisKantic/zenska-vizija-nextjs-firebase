"use client"
import React,{useState,useEffect} from 'react'
import UserDataFetcher from './Post';
import Spinner from '@/app/Spinner';

const fetchData = () => {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Display spinner for 2 seconds

    return () => clearTimeout(timer);
  }, []);


  return (
    <div className='w-full h-screen overflow-y-scroll p-10'>
      <h1 className='text-4xl'>Moje objave</h1>

    <div className='w-full'>
      {isLoading? (<Spinner />) :
      (<UserDataFetcher />)
      }
    </div>

    </div>
  )
}

export default fetchData;