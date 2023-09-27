"use client";
import { useParams } from "next/navigation";
import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import Link from "next/link";
import { useRouter } from "next/navigation";

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

const DetailPage = async () => {
  const { id } = useParams();
  const { postOne } = await getData(id);
  console.log(postOne);

  const deleteOPeration = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/api/post/${id}`, {
        method: "DELETE",
      });
      alert("Post Deleted");
      if (response.ok) {
        await router.push("/");
      } else {
        throw new Error("something went wrong");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="w-[80%] mx-auto text-white mb-5">
        <h1 className="text-5xl font-bold text-center mt-4 mb-6">
          {postOne?.title}
        </h1>
        <img
          src={postOne.image}
          alt=""
          className="w-full h-[300px] object-cover rounded-sm"
        />
        <div className="flex items-center justify-between h-16">
          <div>
            <p className="text-sm">{postOne.createdAt}</p>
          </div>
          <div className="flex item-center justify-between gap-4">
            <Link href={`/editPost/${postOne._id}`}>
              <FaEdit className="text-[20px] font-semibold cursor-pointer" />
            </Link>
            <AiFillDelete
              className="text-[20px] font-semibold cursor-pointer"
              onClick={() => deleteOPeration(id)}
            />
          </div>
        </div>

        <p>{postOne.description}</p>
      </div>
    </>
  );
};

export default DetailPage;
