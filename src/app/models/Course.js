import mongoose from "mongoose";
const Schema =mongoose.Schema
const courseSchema=new Schema({
    name:{
        type:String,
        maxLength:255
    },
    description:{
        type:String,
        maxLength:255
    }, videoid:{
        type:String,
        maxLength:255
    },
    slug:{
        type:String,
        maxLength:255
    },
    image:{
        type:String,
        maxLength:255
    },
    
},{timestamps:true})
const course = mongoose.model('Course', courseSchema);

export default course;