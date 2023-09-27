import connectionDb from "@/libs/mongodb";
import Post from "@/models/postModel";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { title, description,image } = await req.json();
  await connectionDb();
  await Post.create({ title, description,image });
  return NextResponse.json(
    { message: "Created Successfully" },
    { status: 200 }
  );
}
export async function GET(req) {
  await connectionDb();
  const posts = await Post.find();
  return NextResponse.json({ posts });
}

