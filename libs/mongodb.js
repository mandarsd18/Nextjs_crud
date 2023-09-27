import mongoose from "mongoose";
const connectionDb= async()=>{
    // await mongoose.connect('mongodb://127.0.0.1:27017/Posts').then((res)=>{
    //     console.log("Connected to MongoDB");
    // }).catch((err)=>{
    //     console.log(err)
    // })
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/Posts')
       
    } catch (error) {
        console.log(error)
        
    }
}
export default connectionDb;
