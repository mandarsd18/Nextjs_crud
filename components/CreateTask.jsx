"use client"

import { useRouter } from "next/navigation";
import { useState } from "react";

const CreateTask = () => {
const [title,setTitle]=useState("");
const [description,setDescription]=useState("");
const [image,setImage]=useState("")

const router=useRouter()

const handleOnClick= async(e)=>{
  e.preventDefault()
  if(!title || !description || !image){
    alert("Please fill all the fields");
    return;
  }
   try {
    const res=await fetch("http://localhost:3000/api/posts",{
    method:"POST",
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify({
      title,description,image
    })
  })
  if(res.ok){
    await router.push("/")
  }else{
    throw new Error('something went wrong')
  }
   } catch (error) {
    console.log(error)
    
   }
}
 return (
    <>
      <form onSubmit={handleOnClick} className="text-white flex flex-col">
        <label htmlFor="title" className="mb-3 cursor-pointer">
          Post Title :
        </label>
        <input
          type="text"
          id="title"
          placeholder="Something title"
          className="p-3 px-4 text-[#222] rounded-sm"
          value={title}
          onChange={(e)=>setTitle(e.target.value)}
        />

        <label htmlFor="imege" className="mb-3 mt-6 cursor-pointer">
          Post Image url :
        </label>
        <input
          type="text"
          id="image"
          placeholder="https://images.jpg"
          className="p-3 px-4 text-[#222] rounded-sm"
          value={image}
          onChange={(e)=>setImage(e.target.value)}
        />

        {/* <label htmlFor="img" className='mb-3 mt-6 cursor-pointer'>Post Image :</label>
        <input type="file" id='img' placeholder='Something title'
        className=' cursor-pointer' /> */}

        <label htmlFor="desc" className="mt-6 mb-3 cursor-pointer">
          Post Description :
        </label>
        <textarea
          name=""
          id="desc"
          cols="30"
          rows="10"
          placeholder="something description"
          className="p-3 px-4 text-[#222] rounded-sm"
          value={description}
          onChange={(e)=>setDescription(e.target.value)}
        ></textarea>

        <button className="mt-7 border-2 border-white font-semibold py-2 transition ease-in-out  hover:bg-white 
        duration-300 hover:text-[#222] rounded-sm" type="submit">
          Create Post
        </button>
      </form>
    </>
  );
};

export default CreateTask;
