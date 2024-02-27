"use client"
import React,{useState} from 'react'
import Link from 'next/link';

const Profile = () => {

  const [email,setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [oldPassword, setOldPassword] = useState("");


  return (
    <div className='w-full h-screen'>
      <h1 className='text-4xl'>Postavke profila</h1>
      <Link className='px-4 py-3 bg-red-400 text-white font-bold' href="/dashboard">Pocetna</Link>
     
      <div className='flex flex-col justify-start mt-20'>
          <label>Promijenite Vas e-mail</label>
          <input 
          type="email" 
          required 
          placeholder='Unesite Vaš mail' 
          className='w-[50%] py-3 p-7 text-[#C86DD7] text-xl rounded-full outline-none cursor-pointer
          hover:outline-1 hover:outline-[#F93EDF] focus:outline-[#AC009B]'
          onChange={(e)=>setEmail(e.target.value)}
          /> 

          <label>Unesite staru sifru</label>
          <input 
          type="password" 
          required 
          placeholder='Šifra' 
          className='w-[50%] mt-5 py-3 p-7 text-[#C86DD7] text-xl rounded-full outline-none cursor-pointer
          hover:outline-1 hover:outline-[#F93EDF] focus:outline-[#AC009B]'
          onChange={(e)=>setPassword(e.target.value)}
          /> 

          <br />
          <label>Unesite novu sifru</label>
          <input 
        type="password" 
        required 
        placeholder='Šifra' 
        className='w-[50%] mt-5 py-3 p-7 text-[#C86DD7] text-xl rounded-full outline-none cursor-pointer
        hover:outline-1 hover:outline-[#F93EDF] focus:outline-[#AC009B]'
        onChange={(e)=>setPassword(e.target.value)}
        /> 


      </div>
    </div>
  )
}

export default Profile