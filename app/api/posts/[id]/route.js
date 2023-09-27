import connectionDb from "@/libs/mongodb";
import Post from "@/models/postModel";
import { NextResponse } from "next/server";

export async function PUT(req,{params}){
 const {id}= params
 const { title, description,image} = await req.json();
  await connectionDb();
 const newPost= await Post.findByIdAndUpdate(id,{title,description,image},{new:true})
 return NextResponse.json({newPost})
}

export async function GET(req,{params}){
    const {id}=params
    await connectionDb();
    const postOne= await Post.findOne({_id:id})
    return NextResponse.json({postOne})

}
export async function DELETE(req,{params}) {
    const {id}=params
    await connectionDb();
    await Post.findByIdAndDelete(id);
    return NextResponse.json({message:"Deleted succesfully"})
  }