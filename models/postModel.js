import mongoose from "mongoose"

const postSchema=new mongoose.Schema({
title:{
    type:String,
    required:[true,"Please add a title"],
},
description:{
    type:String,
    require:true
},
image:{
    type:String,
    required:true
}
},{
    timestamps : true
})
const Post =mongoose.models.Post || mongoose.model('Post',postSchema);

export default Post

