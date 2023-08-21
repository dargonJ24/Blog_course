import mongoose from "mongoose";
import slug from 'mongoose-slug-updater';
import mongoose_delete from 'mongoose-delete';
import AutoIncrementFactory from 'mongoose-sequence';
const AutoIncrement = AutoIncrementFactory(mongoose);
const Schema =mongoose.Schema
const courseSchema=new Schema({
    _id:{
        type:Number
    },
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
    
},
{_id:false,
    timestamps:true})

mongoose.plugin(slug);
courseSchema.plugin(AutoIncrement)
courseSchema.plugin(mongoose_delete,{overrideMethods:true,deletedAt : true });
const course = mongoose.model('Course', courseSchema);

export default course;