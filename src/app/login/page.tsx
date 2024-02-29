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
    className='w-full bg-[#FEF1FD] min-h-screen flex justify-center items-center overflow-hidden
    xxs:flex-col lg:flex-row xxs:p-4 sm:p-10'>

    <div 
    className='flex h-[50vh] 
               xxs:h-[15vh] lg:hidden xxs:flex-col'>
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
    xxs:w-full xxs:h-full lg:w-[50%] sm:p-0 md:p-10'
    onSubmit={()=>signIn('credentials', {email,password, redirect:true, callbackUrl: '/dashboard'})}>
        <h1 
        className='text-[#AC009B] font-bold p-3
                  xxs:text-2xl sm:text-4xl'>
        Dobrodošli!
        </h1>

        <input 
        type="email" 
        required 
        placeholder='Unesite Vaš mail' 
        className='w-full mt-10 text-[#C86DD7] text-xl rounded-full outline-none cursor-pointer
        hover:outline-1 hover:outline-[#F93EDF] focus:outline-[#AC009B]
        xxs:text-sm xxs:p-2 sm:p-7 sm:text-xl sm:py-3'
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
        className='w-full mt-5 py-3 p-7 text-[#C86DD7] text-xl rounded-full outline-none cursor-pointer
        hover:outline-1 hover:outline-[#F93EDF] focus:outline-[#AC009B]
        xxs:text-sm xxs:p-2 sm:p-7 sm:text-xl sm:py-3'
        onChange={(e)=>setPassword(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter")
            handleSubmit(e);
          }}
        /> 

        <br />

        <a 
        href="#"
        className='text-[#C86DD7] italic underline
                  xxs:text-sm xxs:m-0 sm:text-lg sm:m-3'
        >Zaboravili ste šifru?</a>

        <div className='w-full mt-5 p-3 flex flex-row justify-between items-center'>
            <button
            className='w-[45%] bg-none border border-[2px] border-[#F93EDF] rounded-full py-2 text-[#F93EDF]
                       hover:bg-[#F93EDF] hover:text-white hover:font-bold
                      xxs:text-sm sm:text-lg'
            >
            Napusti
            </button>

            <button
            className='w-[45%] bg-[#F93EDF] text-white border border-[2px] border-[#F93EDF] rounded-full py-2 
                       hover:bg-transparent hover:border-[#F93EDF] hover:font-bold hover:text-[#F93EDF]
                       xxs:text-sm sm:text-lg'
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

    <div className='flex p-10 w-[50%] h-[50vh] xxs:hidden lg:block'>
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