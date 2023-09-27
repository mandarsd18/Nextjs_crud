import Link from "next/link"
const Navbar = () => {
  return (
   <>
   <div className="w-full h-20 text-white ">
    <div className="w-[90%] sm:w-[80%] mx-auto h-full flex items-center justify-between" >
      <h1 className="font-bold text-3xl cursor-pointer">CRUD</h1>
      <nav className="flex gap-7">
        <Link href={"/"} className="border border-2 border-white py-2 px-6 font-semibold transition ease-in-out  hover:bg-white duration-300 hover:text-[#222]">Home</Link>
        <Link href={"createPost"} className=" bg-white text-[#222] py-2 px-6  font-semibold transition ease-in-out hover:bg-transparent border-2 hover:border-white duration-300 hover:text-white ">Create Task</Link>
      </nav>
    </div>
   </div>
   </>
  )
}

export default Navbar
