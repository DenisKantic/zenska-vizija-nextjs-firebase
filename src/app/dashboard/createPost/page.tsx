"use client"
import React,{useState} from 'react';
import MyRichTextEditor from './TextEditor';


const createPost = () => {

  const [title,setTitle] = useState("");
  const [option, setOption] = useState("blog");
  const [text, setText] = useState("");


  {console.log(text)}

  const updateParentState =(newValue: any) =>{
    setText(newValue);
  }
  

  return (
    <div className='w-full min-h-screen overflow-y-scroll'>
      <h1 className='text-4xl'>Kreiraj objavu</h1>

      <div className='flex flex-col justify-start items-start mt-10 min-h-screen'>
        <p className='text-xl'>Naslov objave</p>
        <input 
        type="text" 
        required 
        placeholder='Unesite Vaš naslov' 
        className='w-[50%] mt-6 text-[#C86DD7] text-xl rounded-full outline-none cursor-pointer
        hover:outline-1 hover:outline-[#F93EDF] focus:outline-[#AC009B]
        xxs:text-sm xxs:p-2 sm:p-7 sm:text-xl sm:py-3'/>
        <br />

          <p className='mb-4 text-xl'>Izaberite opciju:</p>
            <div className='flex justify-center items-center mb-5'>
              <button className='px-8 bg-[#F93EDF] text-white border border-[2px] border-[#F93EDF] rounded-full py-2 
                       hover:bg-transparent hover:border-[#F93EDF] hover:font-bold hover:text-[#F93EDF]
                       xxs:text-sm sm:text-lg'
                       onClick={()=>setOption("blog")}>
                        Blog
             </button>

              <button className='px-8 bg-[#F93EDF] ml-5 text-white border border-[2px] border-[#F93EDF] rounded-full py-2 
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


      </div>
      </div>
     
  )
}

export default createPost