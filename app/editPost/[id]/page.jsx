"use client";
import React, { useEffect } from "react";
import { useParams } from "next/navigation";
import { useState } from "react";

const getData = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("failed to load");
    }
    return res.json();
  } catch (error) {
    console.log(error);
  }
};
const page = async () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const {id} = useParams();
  const {postOne} = await getData(id);
  console.log(postOne)
  
 return (
    <>
      <form className="text-white flex flex-col w-[80%] mx-auto">
        <label htmlFor="title" className="mb-3 cursor-pointer">
          Post Title :
        </label>
        <input
          type="text"
          id="title"
          placeholder="Something title"
          className="p-3 px-4 text-[#222] rounded-sm"
          value={postOne?.title}
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
          value={postOne?.image}
          onChange={(e)=>setImage(e.target.value)}
        />

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
          value={postOne?.description}
          onChange={(e)=>setDescription(e.target.value)}
        ></textarea>

        <button
          className="mt-7 border-2 border-white font-semibold py-2 transition ease-in-out  hover:bg-white 
        duration-300 hover:text-[#222] rounded-sm"
          type="submit"
        >
          Update Post
        </button>
      </form>
    </>
  );
};

export default page;
