import Link from "next/link";
import React from "react";

const Post = ( {key,id ,title,description,image ,date}) => {
  return (
    <>
      <div className="w-full h-[200px] flex text-white gap-6 items-center justify-start overflow-hidden">
        <div className="w-[30%] h-full">
          <Link href={`getPost/${id}`}>
          <img
            className="w-full h-full object-cover rounded-md"
            src={image}
            alt={title}
          />

          </Link>
        </div>
        <div className="w-[70%]">
          <h1 className="font-bold text-2xl mb-2">{title}</h1>
          <p className="font-semibold text-sm mb-2 break-words">
          {description.length>300?description.slice(0,300)+"...":description}
          </p>
          <p className="font-semibold text-sm mb-2">{date}</p>
        </div>
      </div>
    </>
  );
};

export default Post;
