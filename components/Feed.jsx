import Post from './Post'

const getData=async()=>{
  try {
    
    const res=await fetch("http://localhost:3000/api/posts",{
      cache:'no-store'
    });
    if(!res.ok){
      throw new Error("failed to load")
    }
    return res.json()
  } catch (error) {
    console.log(error)
    
  }
}

const Feed =  async() => {
  const {posts}=await getData()
  return (
   <>
   <div className='w-[90%] sm:w-[80%] mx-auto flex items-center justify-center flex-col gap-5'>
  {posts.map((p)=>(

    <Post
      key={p._id}
      id={p._id}
      title={p.title}
      image={p.image}
      description={p.description}
      date={p.createdAt}
    />
  ))

  }
  

   </div>
   </>
  )
}

export default Feed
