import mongoose from "mongoose";
import slug from 'mongoose-slug-updater';

import mongoose_delete from 'mongoose-delete';
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
    slug: { 
        type: String, 
        slug: 'name',
        unique: true
    },
    image:{
        type:String,
        maxLength:255
    },
    
},{timestamps:true})
mongoose.plugin(slug);
courseSchema.plugin(mongoose_delete,{overrideMethods:true,deletedAt:true});
const course = mongoose.model('Course', courseSchema);

export default course;