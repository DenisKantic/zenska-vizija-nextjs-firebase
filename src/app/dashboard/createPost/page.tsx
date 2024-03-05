"use client"
import React,{ChangeEvent, useState} from 'react';
import MyRichTextEditor from './TextEditor';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '@/app/FirebaseConfig';
import Form from 'react-bootstrap/Form';
import {storage} from '@/app/FirebaseConfig'
import {ref, uploadBytesResumable, UploadTaskSnapshot} from "firebase/storage"


const createPost = () => {

  const [title,setTitle] = useState("");
  const [option, setOption] = useState("blog");
  const [text, setText] = useState("");
  const [event, setEvent] = useState(false);
  const [date, setDate] = useState("");
  const [image,setImage] = useState<File | null>(null);
  const [imageName, setImageName] = useState("");

  const updateParentState =(newValue: any) =>{
    setText(newValue);
  }


  const uploadImage = (e: ChangeEvent<HTMLInputElement>) =>{
    if(e.target.files && e.target.files[0]){
      setImage(e.target.files[0])
    } else {
      console.log("error upload image")
    }
  }

  const handleUpload =()=>{
    if(image) {

      const storageRef = ref(storage, `images/${image.name}`)
      const uploadTask = uploadBytesResumable(storageRef, image);

      uploadTask.on(
        'state_changed',
        (snapshot: UploadTaskSnapshot)=>{
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

          console.log(`Upload is ${progress}$ done`);
        }, error =>{
          console.log(error.message);
        }
      )
  }
}

  async function createDataFirestore(title: any, description:any, type: any, date: any){
    try{
      const docRef = await addDoc(collection(db, option),{
        title: title,
        description: description,
        type: type,
        date: date
      })
      console.log("document written with ID", docRef.id);
    } catch(error){
      console.log("error, something bad " ,error);
    }
  }

  const handleSubmit = async (e: any) =>{
    e.preventDefault();

    try{
    const submit = await createDataFirestore(title, text, option,date);

    setTitle("");
    setText("");
    setOption("");

    handleUpload();

    alert("sucessfully created new data");
  } catch(error){
    console.log("ERROR", error);
  }
}

const handleEventBtn = () =>{
  setOption("event");
  setEvent(true);

  console.log("option", option, " event", event);
}

const handleBlogBtn = () =>{
  setOption("blog");
  setEvent(false);
}


  return (
    <div className='w-full h-screen overflow-y-scroll p-10'>
      <h1 className='text-4xl'>Kreiraj objavu</h1>

      <form onSubmit={handleSubmit}  className='flex flex-col justify-start items-start mt-10 min-h-screen'>

        <p className='text-xl'>Ubacite naslovnu sliku</p>
        <input type="file" required  onChange={(e:any)=> uploadImage(e)}/>
          
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
              <button type='button' 
              className='px-8 bg-[#F93EDF] text-white border border-[2px] border-[#F93EDF] rounded-full py-2 
                       hover:bg-transparent hover:border-[#F93EDF] hover:font-bold hover:text-[#F93EDF]
                       xxs:text-sm sm:text-lg'
                       onClick={()=>handleBlogBtn()}>
                        Blog
             </button>

              <button type='button' className='px-8 bg-[#F93EDF] ml-5 text-white border border-[2px] border-[#F93EDF] rounded-full py-2 
                       hover:bg-transparent hover:border-[#F93EDF] hover:font-bold hover:text-[#F93EDF]
                       xxs:text-sm sm:text-lg'
                       onClick={()=>handleEventBtn()}
                       >
                        Događaj
              </button>
            </div>

            <div className={event ? 'w-full block' : "hidden"}>
              <p className='text-xl'>Izaberite datum dogadjaja</p>
              <input type="date" className='w-[50%] py-3 mt-6 mb-6 p-7 text-start text-xl rounded-full outline-none cursor-pointer
              over:outline-1 hover:outline-[#F93EDF] focus:outline-[#AC009B]'
              onChange={(e)=>setDate(e.target.value)}/>
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