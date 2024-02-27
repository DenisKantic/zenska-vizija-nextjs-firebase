"use client"
import React, {useEffect, useState} from 'react'
import Image from 'next/image'
import { signIn, useSession } from 'next-auth/react'
import { redirect } from 'next/navigation';


const Login = () => {

  const session = useSession();

  const checkUser = () => {   // check if user is logged in. 
    if(session?.data?.user){
    redirect('/dashboard'); // if it's already logged in, redirect to dashboard.
  } else {
    return null;
  }
}

const handleSubmit = (e: any) =>{
  e.preventDefault();
  if(email == ""){
    alert("Unesite vas Email")
  } else if (password == ""){
    alert("Unesite vasu sifru")
  } else {
  signIn('credentials', {email, password, redirect: true, callbackUrl: '/dashboard'})
  }
}

useEffect(()=>{
  checkUser();
}) // fire the function

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  return (
    <div 
    className='w-full p-10 bg-[#FEF1FD] min-h-screen flex justify-center items-center overflow-hidden
    sm:flex-col lg:flex-row'>

    <div 
    className='flex w-[50%] h-[50vh] 
               sm:h-[30vh] lg:hidden'>
        <Image 
        src="/images/zenskaBG.png"
        alt='zenska vizija logo'
        width={50}
        height={50}
        className='w-full h-full object-contain'
        unoptimized={true}
        />
    </div>

    <div
    className='mx-auto h-[50vh] flex flex-col overflow-hidden
    sm:w-[90%] lg:w-[50%] sm:p-0 md:p-10'
    onSubmit={()=>signIn('credentials', {email,password, redirect:true, callbackUrl: '/dashboard'})}>
        <h1 
        className='text-4xl text-[#AC009B] font-bold p-3'>
        Dobrodošli!
        </h1>

        <input 
        type="email" 
        required 
        placeholder='Unesite Vaš mail' 
        className='w-full mt-10 py-3 p-10 text-[#C86DD7] text-xl rounded-full outline-none cursor-pointer
        hover:outline-1 hover:outline-[#F93EDF] focus:outline-[#AC009B]'
        onChange={(e)=>setEmail(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter")
            handleSubmit(e);
          }}
        /> 

        <br />

        <input 
        type="password" 
        required 
        placeholder='Šifra' 
        className='w-full mt-5 py-3 p-10 text-[#C86DD7] text-xl rounded-full outline-none cursor-pointer
        hover:outline-1 hover:outline-[#F93EDF] focus:outline-[#AC009B]'
        onChange={(e)=>setPassword(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter")
            handleSubmit(e);
          }}
        /> 

        <br />

        <a 
        href="#"
        className='text-lg text-[#C86DD7] m-3 italic underline'
        >Zaboravili ste šifru?</a>

        <div className='w-full mt-5 p-3 flex flex-row justify-between items-center'>
            <button
            className='w-[45%] bg-none border border-[2px] border-[#F93EDF] rounded-full py-3 text-lg text-[#F93EDF]
                       hover:bg-[#F93EDF] hover:text-white hover:font-bold'
            >
            Napusti
            </button>

            <button
            className='w-[45%] bg-[#F93EDF] text-white border border-[2px] border-[#F93EDF] rounded-full py-3 text-lg
                       hover:bg-transparent hover:border-[#F93EDF] hover:font-bold hover:text-[#F93EDF]'
                       onClick={() => signIn('credentials', {email, password, redirect: true, callbackUrl: '/dashboard'})}
                       onKeyDown={(e) => {
                        if (e.key === "Enter")
                          handleSubmit(e);
                        }}
            >
            Prijavi se
            </button>
        </div>

    </div>

    <div className='flex p-10 w-[50%] h-[50vh] sm:hidden lg:block'>
        <Image 
        src="/images/zenskaBG.png"
        alt='zenska vizija logo'
        width={50}
        height={50}
        className='w-full h-full object-contain'
        unoptimized={true}
        />
    </div>

    </div>
  )
}

Login.requireAuth = true
export default Login