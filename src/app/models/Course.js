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
    },
    image:{
        type:String,
        maxLength:255
    },
    createAt:{ type:Date,default:Date.now},
    updateAt:{ type:Date,default:Date.now},
})
const course = mongoose.model('Course', courseSchema);

export default course;