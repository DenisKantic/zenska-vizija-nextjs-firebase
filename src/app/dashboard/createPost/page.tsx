"use client"
import React,{useState} from 'react';
import MyRichTextEditor from './TextEditor';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '@/app/FirebaseConfig';
import { useSession } from 'next-auth/react'





const createPost = () => {

  const [title,setTitle] = useState("");
  const [option, setOption] = useState("blog");
  const [text, setText] = useState("");

  const updateParentState =(newValue: any) =>{
    setText(newValue);
  }

  const session = useSession();
  const user = session?.data?.user;

  async function createDataFirestore(title: any, description:any, type: any){
    try{
      const docRef = await addDoc(collection(db, option),{
        title: title,
        description: description,
        type: type
      })
      console.log("document written with ID", docRef.id);
    } catch(error){
      console.log("error, something bad " ,error);
    }
  }

  const handleSubmit = async (e: any) =>{
    e.preventDefault();

    try{
    const submit = await createDataFirestore(title, text, option);

    setTitle("");
    setText("");
    setOption("");

    alert("sucessfully created new data");
  } catch(error){
    console.log("ERROR", error);
  }
}


  

  return (
    <div className='w-full h-screen overflow-y-scroll p-10'>
      <h1 className='text-4xl'>Kreiraj objavu</h1>

      <form onSubmit={handleSubmit}  className='flex flex-col justify-start items-start mt-10 min-h-screen'>
        <p className='text-xl'>Naslov objave</p>
        <input 
        type="text" 
        required 
        placeholder='Unesite Vaš naslov' 
        className='w-[50%] mt-6 text-[#C86DD7] text-xl rounded-full outline-none cursor-pointer
        hover:outline-1 hover:outline-[#F93EDF] focus:outline-[#AC009B]
        xxs:text-sm xxs:p-2 sm:p-7 sm:text-xl sm:py-3'
        onChange={(e)=>setTitle(e.target.value)}
        />
        <br />

          <p className='mb-4 text-xl'>Izaberite opciju:</p>
            <div className='flex justify-center items-center mb-5'>
              <button type='button' className='px-8 bg-[#F93EDF] text-white border border-[2px] border-[#F93EDF] rounded-full py-2 
                       hover:bg-transparent hover:border-[#F93EDF] hover:font-bold hover:text-[#F93EDF]
                       xxs:text-sm sm:text-lg'
                       onClick={()=>setOption("blog")}>
                        Blog
             </button>

              <button type='button' className='px-8 bg-[#F93EDF] ml-5 text-white border border-[2px] border-[#F93EDF] rounded-full py-2 
                       hover:bg-transparent hover:border-[#F93EDF] hover:font-bold hover:text-[#F93EDF]
                       xxs:text-sm sm:text-lg'
                       onClick={()=>setOption("event")}
                       >
                        Događaj
              </button>
            </div>

        <p>Tekst objave</p>
        
      <MyRichTextEditor onTextChange={updateParentState} />
 
    {/* za testiranje teksta nakon upisivanja u editor<p
      dangerouslySetInnerHTML={{__html: text }} 
      className='w-[50%] min-h-[50vh] text-lg'>
      </p>
  */}

          <button className='px-8 bg-[#F93EDF] mt-5 text-white border border-[2px] border-[#F93EDF] rounded-full py-2 
                       hover:bg-transparent hover:border-[#F93EDF] hover:font-bold hover:text-[#F93EDF]
                       xxs:text-sm sm:text-lg'
                       type='submit'
                       >
                        Kreiraj objavu
              </button>

      </form>
      </div>
     
  )
}

export default createPost